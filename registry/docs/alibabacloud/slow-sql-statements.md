Database Autonomy Service (DAS) provides the slow query log analysis feature. You can use this feature to view the trends, statistics, and details of slow queries to identify, analyze, optimize, and track slow query logs.

## Background information

Slow SQL queries significantly decrease the database stability. When issues such as high workloads and performance jitters occur on a database, administrators or developers can check whether slow query logs are generated.

Slow logs are exported by the database kernel. The configuration parameters and thresholds vary based on the database engine. For more information about the configuration parameters and thresholds, see the official documentation of the corresponding database engines.

## Traditional methods used to view slow query logs and their disadvantages

-   Directly view the logs.
    
    -   Slow query log records are not easy to read because they are not parameterized, aggregated, or sampled.
        
    -   Issues cannot be identified or fixed in a short period of time.
        
-   View the logs by using self-managed slow query log platforms.
    
    -   Self-managed log collection, computing, and storage platforms incur high costs.
        
    -   Platform development and O&M personnel are required.
        

## Advantages of the slow query log analysis feature provided by DAS

-   **Low costs**: You do not need to build your own log collection, computing, and storage platforms. This helps you reduce costs.
    
-   **Closed-loop management**: Slow query logs can be managed throughout their lifecycle, including discovery, analysis, optimization, and tracking.
    
-   **Low requirements for technical skills**: Professional data administrators are not required.
    
-   **Simple operation**: Slow query logs can be analyzed in an easy manner. For more information, see [Slow query log analysis](/help/en/das/user-guide/slow-query-log-analysis-1#multiTask704).
    

## Architecture

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2803296561/p171120.png)

The slow log analysis feature is based on the SQL diagnostics and optimization engine. For more information about the engine, see [Cost-based SQL diagnostics engine](/help/en/das/product-overview/cost-based-sql-diagnostics-engine#concept-1955420).
