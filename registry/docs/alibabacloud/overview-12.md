HoloWeb is a visualized end-to-end database management and development platform based on Hologres. This platform is suitable for scenarios such as database management, database access, data development, data analysis, and performance analysis and diagnostics. This topic describes HoloWeb and its development and O&M features.

## **Introduction to HoloWeb**

Hologres is an all-in-one real-time data warehouse service that allows you to write data in real time, analyze and process petabytes of data with high concurrency and low latency, and perform point queries with an ultra-high level of queries per second (QPS). Hologres is seamlessly integrated with MaxCompute. It supports accelerated data queries and is compatible with the PostgreSQL ecosystem. You can use business intelligence (BI) tools that you are most familiar with to perform multi-dimensional analysis as well as business exploration on large amounts of data to suit your needs of data warehouse analysis and service integration.

HoloWeb enables Hologres databases to be managed and developed in a visualized manner. HoloWeb has the following advantages over development tools in the PostgreSQL ecosystem:

-   Simple operations
    
    HoloWeb provides a user interface (UI) so that you can perform big data development without the need to write SQL statements. Simple operations can help significantly reduce the learning costs for big data development.
    
-   High compatibility with Hologres
    
    Hologres provides powerful data warehouse capabilities, including importing data by using foreign tables, uploading local files, visually tuning execution plans, and viewing slow query logs. HoloWeb is highly compatible with Hologres and provides a UI to implement most features of Hologres.
    
-   End-to-end development and O&M
    
    HoloWeb provides end-to-end development and O&M features such as IP address whitelists and resource isolation to meet enterprise-level requirements without the need to separately build a development UI.
    

## **O&M features**

-   Metadata Management
    
    The Metadata Management module allows you to manage Hologres objects, including instances, databases, schemas, tables, and views. You can connect to Hologres instances on the Metadata Management page, and create objects such as internal and foreign tables within instances and import data. You can also manage and modify objects within instances.
    
-   SQL Editor
    
    HoloWeb provides a standard SQL editor. You can execute standard PostgreSQL statements in the SQL editor. In this module, you can also view the execution plans and execution analysis of SQL statements to optimize the execution. You can perform various SQL queries in this module, such as interactive queries and ad hoc queries. When you execute SQL statements, take note that the execution time cannot exceed 60 minutes.
    
-   Diagnostics and Optimization
    
    The Diagnostics and Optimization module provides instance-level O&M management capabilities. You can view slow query logs and active queries and manage connections in this module. You can also diagnose instance exceptions based on the metrics in the console. This improves automated O&M capabilities.
    
-   Data Solutions
    
    The Data Solutions module provides data import capabilities. You can upload files from your computer and import data from foreign tables in a visualized manner without the need to execute SQL statements. This reduces the learning costs and simplifies operations.
    
-   Security Center
    
    The Security Center module provides end-to-end security management capabilities, including user authorization, IP address whitelists, and resource groups. You can manage the security of your instances in HoloWeb to meet the requirements for end-to-end O&M and management.
