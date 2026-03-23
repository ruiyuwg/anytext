Empty database initialization copies table structures (schemas) from a source database to a destination database that contains no tables. Use this operation to replicate database schemas across regions, units, or environments without migrating data.

To synchronize schemas to a destination database that already contains tables, use [schema synchronization](/help/en/dms/synchronize-schemas#multiTask883) instead.

## Prerequisites

Before you begin, make sure that:

-   The source and destination databases are one of the following supported types:
    
    **Engine**
    
    **Supported database services**
    
    MySQL
    
    ApsaraDB RDS for MySQL, PolarDB for MySQL, MyBase for MySQL, PolarDB for Xscale, AnalyticDB for MySQL V3.0, and MySQL databases from other sources
    
    SQL Server
    
    ApsaraDB RDS for SQL Server, MyBase for SQL Server, and SQL Server databases from other sources
    
    PostgreSQL
    
    ApsaraDB RDS for PostgreSQL, PolarDB for PostgreSQL, MyBase for PostgreSQL, AnalyticDB for PostgreSQL, and PostgreSQL databases from other sources
    
    MariaDB
    
    ApsaraDB RDS for MariaDB and MariaDB databases from other sources
    
    OceanBase
    
    ApsaraDB for OceanBase in MySQL mode
    
    Oracle-compatible
    
    PolarDB for PostgreSQL (Compatible with Oracle)
    
-   The security rule **Enable execution capability (if closed, other rules are invalid)** is enabled for the destination database. For more information, see [Enable execution capability](/help/en/dms/table-synchronization).
    
    **Note**
    
    If this rule is disabled, schema synchronization can only compare schemas but cannot run SQL statements to synchronize them.
    
-   The destination database is empty and contains no tables.
    
-   Your account has query permissions on the source database. For more information, see [View owned permissions](/help/en/dms/view-owned-permissions).
    
-   Your account has permissions to alter tables in the destination database. For more information, see [View owned permissions](/help/en/dms/view-owned-permissions).
    

## Procedure

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
    
2.  In the top navigation bar, click **Database Development**. In the left-side navigation pane, choose **Schema Change** > **Empty Database Initialization**.
    
3.  On the **Table/Database Synchronization Application** page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Source Database**
    
    The source database. After you select a database, you can optionally specify a schema version number. By default, the latest schema version is used. For more information, see [Manage schema versions](/help/en/dms/manage-schema-versions#task-2040592).
    
    **Destination Database**
    
    The destination database. You can optionally specify a schema version number. For more information, see [Manage schema versions](/help/en/dms/manage-schema-versions#task-2040592).
    
    **Initialized Table**
    
    The tables to initialize. **Partial Tables**: initialize only the tables that you select. **All Tables**: initialize all tables in the source database.
    
    **Whether to Ignore Error**
    
    The error handling mode. **Not Ignore**: DMS stops execution when an error occurs. **Ignore**: DMS skips the failed statement and continues to run the remaining statements.
    
4.  Click **Submit**.
    
    DMS analyzes the schemas of the source and destination databases.
    
    **Note**
    
    If the schemas change during analysis, click **Re-analyze** to restart the analysis.
    
5.  Click **Submit for Approval** and wait for the request to be approved.
    
6.  After approval, click **Submit and Synchronize to Target Database**.
    
7.  Review the SQL statements, then click **Confirm Synchronization**.
    
    DMS runs the SQL statements to synchronize the schemas. Click **Details** to view the operation logs, including SQL statements, execution duration, and scheduling details.
    

## Next steps

-   [Synchronize schemas](/help/en/dms/synchronize-schemas) -- Synchronize schemas to destination databases that already contain tables.
    
-   [Manage schema versions](/help/en/dms/manage-schema-versions) -- Track and manage schema version history.
