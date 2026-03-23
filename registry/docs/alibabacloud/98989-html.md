During daily operations and maintenance of ApsaraDB RDS for SQL Server instances, you can use Database Autonomy Service (DAS) to handle instance failures, optimize instance performance, improve efficiency, and reduce O&M costs. DAS is a cloud service developed based on machine learning and expert experience. It provides self-awareness, self-healing, self-optimization, self-O&M, and self-securing capabilities to simplify database O&M tasks and ensure the stability, security, and efficiency of database services.

## Feature overview

Autonomy services provided by DAS for ApsaraDB RDS for SQL Server include the following features:

### [SQL Explorer and audit](/help/en/rds/apsaradb-rds-for-sql-server/use-the-sql-explorer-and-audit-feature-on-an-apsaradb-rds-for-sql-server-instance#main-2346126) **(recommended)**

If you want to monitor and manage SQL statements that are executed on an ApsaraDB RDS for SQL Server instance in scenarios such as security compliance audit, performance analysis, and troubleshooting, you can use the SQL Explorer and Audit feature. The feature enables you to record and perform aggregate analysis on the execution statuses of SQL statements. After this feature is enabled, SQL statements from database kernels, the accounts that are used to execute the SQL statements, IP addresses, and execution details are automatically recorded. This does not affect the instance performance.

### [Storage management](/help/en/rds/apsaradb-rds-for-sql-server/view-the-storage-information-of-an-apsaradb-rds-for-sql-server-instance#concept-wpx-xnk-xfb)

This feature allows you to monitor and analyze your storage at the instance level, database level, and table level. The storage monitoring and analysis data help you identify and troubleshoot storage issues. The Storage Management page in the ApsaraDB RDS console includes the following sections:

-   Storage Overview: This section provides an overview of the storage information. The storage information includes the changes in storage over the last week, the available storage, the used storage, and the estimated increase in storage consumption.
    
-   Charts of Storage Information: This section displays the storage consumption of your RDS instance in charts. The storage consumption includes the storage usage, the percentages of used data storage and used log storage, and the top 5 databases that consume the most storage.
    
-   Storage Trend: This section displays the storage trends of your RDS instance in a chart.
    
-   Top 10 Databases: This section displays the details of the top 10 databases that consume the most storage. These details are displayed in a table.
    
-   Top 20 Data Tables: This section displays the details of the top 20 data tables that consume the most storage. These details are displayed in a table.
    

### **Performance Optimization**

This feature provides various important performance data about your RDS instance. The Performance Optimization page in the ApsaraDB RDS console includes the following tabs:

-   [Performance insights](/help/en/rds/apsaradb-rds-for-sql-server/use-the-performance-insight-feature-for-an-apsaradb-rds-for-sql-server-instance#concept-ix2-chc-dhb): This feature allows you to quickly evaluate database loads, identify the sources of performance issues, and improve database stability.
    
-   [Missing indexes](/help/en/rds/apsaradb-rds-for-sql-server/view-the-missed-indexes-of-an-rds-for-sql-server-instance#concept-mml-ynk-xfb): This feature displays information about missing indexes in your RDS instance in charts and provides statements to create the missing indexes.
    
-   [Index usage](/help/en/rds/apsaradb-rds-for-sql-server/view-the-index-usage-statistics-of-an-apsaradb-rds-for-sql-server-instance#concept-o5d-tsk-xfb): This feature displays detailed information about the indexes that are used in your RDS instance in charts and provides statements to create the indexes.
    
-   [Statistics information](/help/en/rds/apsaradb-rds-for-sql-server/view-the-performance-statistics-of-an-apsaradb-rds-for-sql-server-instance#concept-t3r-tsk-xfb): This feature displays detailed statistics information about your RDS instance in charts.
    
-   [TOP SQL](/help/en/rds/apsaradb-rds-for-sql-server/view-the-sql-statement-statistics-of-an-apsaradb-rds-for-sql-server-instance#concept-t52-5sk-xfb): This feature displays SQL statements in charts based on multiple dimensions. You can query real-time TOP SQL statements.
    
-   [TOP Objects](/help/en/rds/apsaradb-rds-for-sql-server/view-the-top-n-objects-of-an-apsaradb-rds-for-sql-server-instance#concept-ijk-4wl-2gb): This feature allows you to obtain real-time performance consumption at the object level (including stored procedures, functions, and triggers) in your RDS instance. This feature helps you identify the objects that consume the most resources and the SQL statements in these objects.
    

### **Lock optimization**

This feature provides various important performance data about your RDS instance. The Lock Optimization page in the ApsaraDB RDS console includes the following tabs:

-   [Deadlocks](/help/en/rds/apsaradb-rds-for-sql-server/deadlock#task-2070219): This feature displays detailed information about deadlocks in charts.
    
-   [Lock blocks](/help/en/rds/apsaradb-rds-for-sql-server/view-the-blocking-statistics-of-an-apsaradb-rds-for-sql-server-instance#task-2069961): This feature displays detailed information about lock blocks in charts.
    
-   [Slow SQL statements](/help/en/rds/apsaradb-rds-for-sql-server/use-the-slow-query-analysis-feature-for-an-apsaradb-rds-for-mysql-instance-1#task-2070850)
    
    This feature records and analyzes SQL statements that consume many resources. It displays aggregated results (slow SQL statistics) and details of slow SQL statements.
    
-   [Monitoring dashboard](/help/en/rds/apsaradb-rds-for-sql-server/use-the-monitoring-dashboard-feature-2#task-2214180)
    
    The monitoring dashboard feature allows you to specify RDS instances and metrics to monitor and compare the metrics of the RDS instances. You can also configure metric linkage. This helps you monitor your RDS instances.
    

## **Limits**

-   ApsaraDB RDS for SQL Server 2008 R2 instances that use standard SSDs or enhanced SSDs (ESSDs) are not supported.
    
-   The instance must be deployed in one of the following regions: China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, UAE (Dubai).
    

## **Appendix:** Authorization description

To use the features of DAS, you must grant required permissions to RAM users.

-   You can [grant permissions to RAM users by using system policies](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800). The following system policies are provided for DAS:
    
    -   **AliyunHDMFullAccess**: This policy grants RAM users full management permissions on DAS.
        
    -   **AliyunHDMReadOnlyAccess**: This policy grants RAM users read-only permissions on DAS.
        
    -   **AliyunHDMReadOnlyWithSQLLogArchiveAccess**: This policy grants RAM users read-only permissions on DAS and the permissions to use the **search** (including export) feature of SQL Explorer and audit.
        
-   You can [grant permissions to RAM users by using custom policies](/help/en/ram/create-a-custom-policy#section-kwn-gu8-48m). The following example describes how to grant RAM users read-only permissions on DAS:
    
    ```
    {
               
                "Action": [
                    "hdm:Get*",
                    
                    "hdm:Describe*",
                    
                    "hdm:Query*",
                    
                    "hdm:Support*"
                
                ],
                
                    "Effect": "Allow",
                
                    "Resource": "acs:rds:*:*:*"
            
    }
    ```
