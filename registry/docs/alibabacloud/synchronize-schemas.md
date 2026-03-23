Data Management (DMS) provides the schema synchronization feature. You can use this feature to compare the schemas of two databases or those of specific tables in the databases and generate SQL statements for schema synchronization. Then, you can execute the statements to synchronize the schemas to the destination database. You can use this feature to compare and synchronize the schemas of databases in different environments, such as a database in the production environment and a database in the test environment, different databases in the test environment, or different databases in the production environment.

## Prerequisites

-   The source and destination databases are of the following types:
    
    -   MySQL: ApsaraDB RDS for MySQL, PolarDB for MySQL, ApsaraDB MyBase for MySQL, PolarDB-X, AnalyticDB for MySQL V3.0, and MySQL databases from other sources
        
    -   SQL Server: ApsaraDB RDS for SQL Server, ApsaraDB MyBase for SQL Server, and SQL Server databases from other sources
        
    -   PostgreSQL: ApsaraDB RDS for PostgreSQL, PolarDB for PostgreSQL, ApsaraDB MyBase for PostgreSQL, AnalyticDB for PostgreSQL, and PostgreSQL databases from other sources
        
    -   MariaDB: ApsaraDB RDS for MariaDB and MariaDB databases from other sources
        
    -   ApsaraDB for OceanBase in MySQL mode
        
    -   PolarDB for PostgreSQL (Compatible with Oracle)
        
-   The security rule named **Enable execution capability (if closed, other rules are invalid)** is enabled for the destination database. For more information, see the [Enable execution capability](/help/en/dms/table-synchronization#section-5yz-usn-yja) section of the "Table synchronization" topic.
    
    **Note**
    
    If this rule is disabled, the schema synchronization feature can only compare the schemas of two different databases but cannot execute SQL statements to synchronize the schemas.
    
-   The query permissions on the source database are granted to your account. For more information, see [View owned permissions](/help/en/dms/view-owned-permissions#task-1940691).
    
-   The permissions to alter tables in the destination database are granted to your account. For more information, see [View owned permissions](/help/en/dms/view-owned-permissions#task-1940691).
    

## Usage notes

The schema synchronization feature can be used to synchronize the schemas of the source database to the destination database, whereas data is not synchronized during the synchronization process. Take note of the following two scenarios:

-   The destination database does not contain tables that have the same names as those to be synchronized in the source database. In this case, DMS creates those tables in the destination database.
    
-   The destination database contains tables that have the same names as those to be synchronized in the source database. In this case, DMS creates fields in or deletes fields from those tables in the destination database to ensure schema consistency. If a field is deleted, the data of the field is also deleted. Proceed with caution.
    

**Note**

During the synchronization process, DMS does not delete a table in the destination database that is not consistent with any table in the source database.

## Procedure

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  In the top navigation bar, choose **Database Development** > **Schema Change** > **Schema Synchronization**.
    
    **Note**
    
    If you use the DMS console in simple mode, move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner of the console and choose **All Features** > **Database Development** > **Schema Change** > **Schema Synchronization**.
    
3.  On the **Table Sync Tickets** page, configure the parameters. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Source Database**
    
    1.  The source database for schema synchronization. You can enter a keyword of the database name in the Source Database field to search for the database.
        
    2.  **Optional**: Specify the schema **version number** of the database. By default, the latest schema is used. For more information about schema versions, see [Manage schema versions](/help/en/dms/manage-schema-versions#task-2040592).
        
    
    **Destination Database**
    
    1.  The destination database for schema synchronization. You can enter a keyword of the database name in the Destination Database field to search for the database.
        
    2.  **Optional**: Specify the schema **version number** of the database. By default, the latest schema is used. For more information about schema versions, see [Manage schema versions](/help/en/dms/manage-schema-versions#task-2040592).
        
    
    **Synchronized Table**
    
    The tables that you want to synchronize. Valid values:
    
    -   **Partial Tables**: If you select this option, you must enter the names of the source and destination tables. If you do not specify the names of destination tables, DMS assumes that the destination table names are the same as the source table names.
        
    -   **All Tables**: If you select this option, all tables in the source database are synchronized.
        
    
    **Whether to Ignore Error**
    
    Specifies whether to skip errors that occur when SQL statements are being executed. Valid values:
    
    -   **Not Ignore**: If an error occurs when SQL statements are being executed, DMS stops executing the current and subsequent SQL statements.
        
    -   **Ignore**: If an error occurs when SQL statements are being executed, DMS skips the current SQL statement and continues to execute subsequent SQL statements until all remaining statements are executed.
        
        **Warning**
        
        If you choose to ignore errors, some DDL executions may be skipped and the synchronization results do not meet expectations. Proceed with caution.
        
    
4.  Click **Submit**.
    
    DMS starts to analyze the schemas.
    
    **Note**
    
    If the schemas are changed during schema analysis, click **Re-analyze** in the Schema Analysis step.
    
5.  Click **Submit for Approval** and wait for approval.
    
6.  After the application is approved, click **Submit and Synchronize to Target Database**.
    
7.  Check the SQL statements to be executed and click **Confirm Synchronization**.
    
    **Note**
    
    The synchronization duration is affected by various factors such as the number of tables to be synchronized and the size of the task queue. We recommend that you synchronize schemas during off-peak hours.
    
    After you click Confirm Synchronization, DMS starts to execute the SQL statements to synchronize schemas. You can click **Details** to view the operation logs that contain detailed information such as the SQL statements, execution duration, and scheduling details.
    
8.  If the **Synchronized.** message appears, the schemas of the source database are synchronized to the destination database.
