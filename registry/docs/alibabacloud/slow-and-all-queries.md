E-MapReduce (EMR) StarRocks Manager provides the diagnostics and analytics features that can be used to record and analyze the SQL queries that you perform in detail. The SQL Tasks page displays all SQL tasks that are run. On the Slow Queries page, you can analyze slow queries, especially queries that have an extended duration. This helps you identify performance bottlenecks and optimize query performance.

## Prerequisites

An EMR Serverless StarRocks instance is created. For more information, see [Create an instance](/help/en/emr/emr-serverless-starrocks/create-an-instance#task-2285387).

## **Features**

-   [Manage SQL tasks](#9838d87415yhg): You can manage SQL tasks on the Complete Tasks and Running Tasks tabs.
    
    -   **Complete Tasks**: This tab displays the complete queries in a comprehensive manner. The complete queries include queries in the following states: Complete, Execution failed, and Invalid Syntax. You can obtain the overall information about queries in the system on this tab for in-depth analysis and management. Take note of the following items when you manage SQL tasks:
        
        **Note**
        
        Only the first 5,000 data records in the previous 30 days are retained. For information about how to view all query records, see [Audit logs](/help/en/emr/emr-serverless-starrocks/manage-audit-logs).
        
    -   **Running Tasks**: This tab displays the large or complex queries that are in progress. Such queries generally involve large-scale data processing, complex computing operations, or interactions across multiple databases. These queries may consume a large amount of computing resources such as CPU, memory, and I/O. This affects the performance of other queries in the system. Therefore, you can monitor these large or complex queries in real time to effectively maintain system stability and ensure response speed.
        
-   [Analyze slow queries](#section-xa4-f3b-n1e): The Slow Queries page displays the queries that take an extended period of time to run and may have performance bottlenecks on your EMR Serverless StarRocks instance. You can identify and track slow queries to accurately identify the issues that affect database efficiency and take appropriate optimization measures.
    
    **Note**
    
    -   By default, the minimum duration of a query displayed on the Slow Queries page is 5,000 ms.
        
    -   Only queries performed by using SELECT statements can be recorded as slow queries.
        
    -   By default, only slow queries of the previous 30 days or the latest 10,000 slow queries are retained. You can filter slow queries by using the filter conditions displayed on the Slow Queries page.
        
    

## **Go to a query details page**

### **On the SQL Tasks page**

1.  Go to the Instances tab of the E-MapReduce (EMR) console.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left-side navigation pane, choose **EMR Serverless** > **StarRocks**.
        
    3.  In the top navigation bar, select a region based on your business requirements.
        
    4.  Click **StarRocks Manager**, or click **Connect** in the operation column of the already created instance.
        
        For more information, see [Use EMR StarRocks Manager to connect to an EMR Serverless StarRocks instance](/help/en/emr/emr-serverless-starrocks/use-sql-editor-to-operate-a-starrocks-instance).
        
2.  In the left-side navigation pane, choose **Diagnostics and Analytics** > **SQL Tasks**.
    
3.  On the **Complete Tasks** or **Running Tasks** tab, find the query that you want to manage and click its ID.
    
    -   **Complete Tasks**: On this tab, you can view information such as the SQL statements, task status, and time consumption of each query. You can also filter queries by user, SQL type, and database. The SQL types include DQL, DML, DDL, and DCL.
        
    -   **Running Tasks**: On this tab, you can monitor the key performance metrics of large queries, including the total amount of scanned data, the number of processed rows, and the CPU utilization and memory usage.
        

### **On the Slow Queries page**

1.  In the left-side navigation pane, choose **Diagnostics and Analytics** > **Slow Queries**.
    
2.  On the **Slow Queries** page, find the query that you want to manage and click its ID.
    
    For more information about the query details, see the [View query details](#section-guk-9tk-oli) section of this topic.
    

## View query details

On the **Slow Queries** page, find the query that you want to manage and click its ID to go to the query details page. The information is displayed on the following tabs:

-   Query Details
    
    Displays the basic information about the query and the details of SQL statements.
    
-   Query Plan
    
    A query plan is generated for the query after frontends (FEs) parse the SQL statements of the query. The query plan specifies the coordination of operators such as JOIN, ORDER, and AGGREGATE. This allows database administrators to view the execution information about the SQL statements of the query from a macro perspective.
    
-   Query Profile
    
    A query profile is the results generated after the query is run by backends (BEs). The query profile contains data such as the amount of time consumed by each step and the amount of data processed at each step during the query and reflects the query performance. EMR StarRocks Manager allows you to analyze query profiles in a visualized manner.
    

**Important**

In most cases, query profiles are used to diagnose and analyze slow queries. By default, the query profile feature is enabled for EMR Serverless StarRocks instances. You can run the `show variables like '%enable_profile%'` command to check whether the query profile feature is enabled for a StarRocks instance.

## **Export query information**

When you analyze query results, you may need to export information about specific queries to your computer for further processing. EMR Serverless StarRocks allows you to filter and export query information within a specific time period.

On the **SQL Tasks** or **Slow Queries** page, filter queries based on the conditions such as status, duration, date range, and time consumption, select the queries that meet the specified conditions, and then click **Export** to save the query information to your computer.
