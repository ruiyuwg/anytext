This topic describes the development and O&M recommendations for ApsaraDB RDS for PostgreSQL. The recommendations help increase the compliance, stability, and performance of your ApsaraDB RDS for PostgreSQL instance.

## Connection pooling

-   We recommend that you store SQL statements in PreparedStatement objects. This way, hard parses are not required, which reduces CPU resource consumption and increases the performance of your RDS instance.
    
-   We recommend that you reduce idle connections. This reduces memory usage, improves the efficiency of `GetSnapshotData()`, and increases system performance.
    
-   We recommend that you enable the connection pooling feature for your application to prevent the resources from being consumed by short-lived connections and prevent performance deterioration. If your application does not support the connection pooling feature, we recommend that you configure a connection pool between your application and your RDS instance. For example, you can use PgBouncer or Pgpool-II as a connection pool.
    
-   We recommend that you configure the following parameters for connection pooling:
    
    -   `minimumIdle`: specifies the minimum number of idle connections in connection pools. We recommend that you set this parameter to 1 to reduce idle connections.
        
        **Note**
        
        The maxIdle parameter is removed from the configurations of most connection pools. If the maxIdle parameter is available, you need to set this parameter to 1.
        
    -   `maxLifetime`: specifies the maximum time-to-live (TTL) of each connection in connection pools. We recommend that you set this parameter to 60 minutes. This way, you can reduce the probability of out of memory (OOM) errors that occur due to frequent connections to RelCache.
        
    -   `maximumPoolSize`: specifies the maximum number of connections that are allowed in each connection pool. We recommend that you set this parameter to 15. A connection pool that supports up to 15 connections is suitable for most business scenarios. If the number of cached connections in a connection pool is small and your RDS instance processes only the workloads from the connections, you can set the maximumPoolSize parameter to a value greater than 15 on the database clients.
        
    
    **Note**
    
    We recommend that you use the following configurations for connection pooling:
    
    -   We recommend that you use the following configuration for the [HikariCP](https://github.com/brettwooldridge/HikariCP) connection pool, which is the recommended connection pool in Java environments:
        
        ```
        minimumIdle=1, maximumPoolSize=15, idleTimeout=600000 (10 minutes), maxLifetime=3600000 (60 minutes)
        ```
        
    -   We recommend that you use the following configuration for the [GORM](https://gorm.io/docs/) connection pool, which is the recommended connection pool in GO environments:
        
        ```
        sqlDB.SetMaxIdleConns(1), sqlDB.SetMaxOpenConns(15), sqlDB.SetConnMaxLifetime(time.Hour)
        ```
        
    -   We recommend that you use the following configuration for the [Druid](https://github.com/alibaba/druid) connection pool, which is used in Java environments:
        
        ```
        initialSize=1, minIdle=1, maxIdle=1, maxActive=15, testOnBorrow=false, testOnReturn=false, testWhileIdle=true,minEvictableIdleTimeMillis=600000 (10 minutes), maxEvictableIdleTimeMillis=900000 (15 minutes), timeBetweenEvictionRunsMillis=60000 (1 minutes), maxWait=6000 (6 seconds).
        ```
        
    
    The preceding configurations do not include PreparedStatement objects. You must configure PreparedStatement objects based on your business requirements.
    

## Performance and stability

-   In ApsaraDB RDS for PostgreSQL, a single database corresponds to a folder in the underlying file system. Tables, partitions, and indexes in the database correspond to files in the folder. If the number of files in the folder exceeds 20 million, an error indicating that the disk space is exhausted may be reported. We recommend that you split the database or merge table files based on your business requirements.
    
-   We recommend that you execute the CREATE INDEX CONCURRENTLY statement to create indexes for online workloads. This does not affect the INSERT, UPDATE, and DELETE DML operations in other sessions on tables for which the indexes are created.
    
-   We recommend that you execute the REINDEX CONCURRENTLY statement to re-create indexes for RDS instances that run PostgreSQL 12 or later. For RDS instances run PostgreSQL 11 or earlier, we recommend that you use CONCURRENTLY to create indexes before you delete the original indexes.
    
-   Do not frequently create or delete temporary tables. This reduces the consumption of system table resources. Proceed with caution when you use ON COMMIT DROP. In most cases, you can use the WITH clause instead of creating temporary tables.
    
-   In PostgreSQL 13, the following capabilities are improved: partitioned tables, HashAggregate operations for GROUP BY clauses, and parallel queries. We recommend that you upgrade the major engine version of your RDS instance to PostgreSQL 13. For more information, see [Upgrade the major engine version of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/).
    
-   If you no longer use the cursor feature, we recommend that you disable this feature.
    
-   We recommend that you execute the TRUNCATE statement rather than the DELETE statement on tables to improve the performance of your RDS instance.
    
-   PostgreSQL supports the execution and rollback of DDL transactions. We recommend that you encapsulate DDL statements in transactions. This way, you can roll back DDL statements based on your business requirements. Take note that you must encapsulate DDL statements in transactions of appropriate lengths. If the transactions are long, the read operations on the objects that are being accessed by these transactions may be blocked for a long period of time.
    
-   If you want to write a large amount of data to your RDS instance, we recommend that you execute the COPY or `INSERT INTO table VALUES (),(),...();` statement to increase the write speed.
    

## Minor engine version

-   If you want to use the replication slot feature, we recommend that you update the minor engine version of your RDS instance to 20201230 or later. This way, you can enable the Logical Replication Slot Failover feature and configure an alert rule for the Maximum Replication Slot Latency metric to prevent logical subscriptions from being delayed or interrupted. If logical subscriptions are delayed or interrupted, logical replication slots are lost and write-ahead logging (WAL) records are accumulated. For more information, see [Logical Replication Slot Failover](/help/en/rds/apsaradb-rds-for-postgresql/logical-replication-slot-failover) and [Manage the alert rules of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-alert-rules-of-an-apsaradb-rds-for-postgresql-instance).
    
-   If you enable the audit log feature or the performance insight feature, we recommend that you update the minor engine version of your RDS instance to 20211031 or later. If you set log\_statement to all, you enable the feature
    
    **Note**
    
    If `log_statement` is set to all, the performance of the RDS instance is improved by approximately four times in scenarios in which more than 50 active connections are established. This also prevents the significant increase in CPU utilization of the RDS instance.
    

## Monitoring and alerting

-   We recommend that you turn on Initiative Alert for your RDS instance to enable the default alert rules that are provided by the monitoring and alerting feature. For more information, see [Manage the alerts](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-alert-rules-of-an-apsaradb-rds-for-postgresql-instance).
    
-   You can specify a threshold to trigger a memory usage alert based on your business requirements. We recommend that you set the threshold to a value between 85% and 95%.
    

## Troubleshooting

For more information about how to identify the SQL statements that consume the most resources, see [Locate SQL statements with the highest resource consumption](/help/en/rds/apsaradb-rds-for-postgresql/locate-sql-statements-with-the-highest-resource-consumption#concept-8069).

## Design

**Permissions**

-   We recommend that you manage permissions by schema or role and create the following two roles for your RDS instance in compliance with the principle of least privilege (PoLP): one role with the read and write permissions and one role with only the read permissions. For more information, see [Manage permissions in an ApsaraDB RDS for PostgeSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/manage-permissions-in-an-apsaradb-rds-for-postgesql-instance#task-2143299).
    
-   If you enable read/write splitting at the application layer, we recommend that you follow PoLP and use the read-only role for read-only database clients.
    

**Tables**

-   The data types that are defined for the fields of the schema in your RDS instance must be the same as the data types that are defined in your application. In addition, the same rules must be used to check fields for all tables. This way, you can prevent errors and make sure that you can use indexes.
    
-   If you want to delete historical data on a regular basis, we recommend that you partition tables by year or month. We also recommend that you execute the `DROP` or `TRUNCATE` statement on child tables obtained after partitioning to delete data. We recommend that you do not execute the `DELETE` statement on the child tables to delete data.
    
-   If you want to frequently update a table, we recommend that you set `FILLFACTOR` of the table to 85 to reserve 15% of storage per page when you create the table. The reserved storage is used to update the hot data in the table.
    
    ```
    CREATE TABLE test123(id int, info text) WITH(FILLFACTOR=85);  
    ```
    
-   We recommend that you make sure the names of temporary tables start with `tmp_`. You must also make sure that the names of child tables end with the rule based on which the parent table of the child tables is partitioned. For example, if the name of a parent table that is partitioned by year is tbl, the names of the child tables of the parent table can be tbl\_2016 and tbl\_2017.
    

**Indexes**

-   A B-tree index can contain fields whose total size is up to 2,000 bytes. If the total size of the fields exceeds 2,000 bytes, a new index is required. We recommend that you create a function index, such as a hash index. If you do not create a function index, we recommend that you use an analyzer to analyze the data before you create an index on the data.
    
-   Data such as streaming data, time fields, and auto-increment fields may be stored in a linear order. In most cases, range queries are run to query these types of data. We recommend that you create `BRIN` indexes to reduce the size per index and speed up data insertion.
    
    ```
    CREATE INDEX idx ON tbl using BRIN(id);
    ```
    
-   We recommend that you do not run full table scans, except when you want to scan and analyze a large amount of data. ApsaraDB RDS for PostgreSQL supports indexes of most data types.
    
    The following types of indexes are supported: B-tree, Hash, GIN, GiST, SP-GiST, BRIN, RUM, Bloom, and PASE. Among these types of indexes, RUN, Bloom, and PASE are extended indexes.
    
-   We recommend that you make sure the names of primary key indexes start with `pk_`, the names of unique indexes start with `uk_`, and the names of regular indexes start with `idx_`.
    

**Data types and character sets**

-   We recommend that you select a suitable data type for the data you want to write. If you want to write numeric data or the data that you want to write can be stored in tree structures, we recommend that you do not select the string data type.
    
    A suitable data type increases query efficiency.
    
    ApsaraDB RDS for PostgreSQL supports the following data types: Numeric, Floating-Point, Monetary, String, Character, Binary, Date/Time, Boolean, Enumerated, Geometry, Network Address, Bit String, Text Search, UUID, XML, JSON, Array, Composite, Range, Object identifier, row number, large object, ltree structure, Data Cube, geography, H-Store, pg\_trgm module, PostGIS, and HyperLogLog. PostGIS includes data types such as point, line segment, surface, path, latitude, longitude, raster, and topology. HyperLogLog is a fixed-size, set-like data structure that is used to count distinct values at a tunable precision.
    
-   We recommend that you set LC\_COLLATE to C rather than UTF8. The UTF8 character set collation is inferior to the C character set collation. In addition, if you use the UTF8 character set collation, you must specify the text\_pattern\_ops operator class for indexes to support LIKE queries.
    

**Stored procedures**

-   If the business logic is lengthy, we recommend that you reduce the number of interactions between your application and your RDS instance. We recommend that you use stored procedures, such as stored procedures that are based on PL/pgSQL, or built-in functions. PL/pgSQL is a procedural programming language that is supported by PostgreSQL and is used to process complex business logic. PostgreSQL supports the following common functions and complex functions: analytic functions, aggregate functions, window functions, mathematical functions, and geometric functions.
    

## Data query

-   We recommend that you do not replace `COUNT(*)` with `COUNT(column_name)` or `COUNT(constants)`. `COUNT(*)` is a standard function that is defined in SQL-92 to count the number of rows. COUNT(\*) counts in NULL values when it calculates the actual number of rows, whereas `COUNT(column_name)` does not count in NULL values.
    
-   If `COUNT(DISTINCT)` is used, the names of the multiple columns that you want to specify must be enclosed in a pair of parentheses (). Example: `COUNT( (col1,col2,col3) )`. `COUNT(DISTINCT)` counts in all NULL values. Therefore, COUNT(DISTINCT) produces the same result as `COUNT(*)`.
    
-   We recommend that you do not use `SELECT * FROM t`. Replace the wildcard (`*`) with an array of fields that you require. This way, ApsaraDB RDS returns only the fields that you specify and does not return the fields that you do not require.
    
-   We recommend that you prevent ApsaraDB RDS from returning large amounts of data to database clients, except for extract, transform, and load (ETL) operations. If the amount of data that is returned for a query is abnormally large, check whether the execution plan of the query is optimal.
    
-   If you want to perform range queries, we recommend that you use the Range data type and GiST indexes to improve query performance.
    
-   If your application frequently initiates queries for which a large number of results are returned, we recommend that you aggregate all results of such a query into a result set. For example, if the number of results that are returned for a query reaches 100, we recommend that you aggregate the 100 results of the query into a result set. In addition, if your application frequently accesses the results in the result set by ID, we recommend that you aggregate the results by ID on a regular basis. A small number of results returned indicates shorter response time.
    

## Instance management

-   We recommend that you enable the SQL Explorer and Audit feature for your RDS instance. This feature allows you to query and export the information about the SQL statements that are executed on your RDS instance. The information includes the databases on which the SQL statements are executed, the status of the SQL statements, and the execution durations of the SQL statements. You can use this feature to diagnose the health status of the SQL statements, troubleshoot performance issues, and analyze business traffic. For more information, see [Use the SQL Explorer and Audit feature on an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/sql-insight-or-audit#task-2170152).
    
-   If you want to monitor and record the activities within your Alibaba Cloud account, we recommend that you use ActionTrail. The activities that you can monitor and record include access to and use of cloud products and services by using the Alibaba Cloud Management Console, API, and developer tools. ActionTrail records these actions as events. You can download the events from the ActionTrail console or configure ActionTrail to deliver the events to Log Service Logstores or Object Storage Service (OSS) buckets. Then, you can perform operations, such as action analysis, security analysis, resource change tracking, or compliance audit based on the events. For more information, see [What is ActionTrail?](/help/en/actiontrail/product-overview/what-is-actiontrail#concept-28804-zh)
    
-   DDL operations must be reviewed before they are performed. Make sure that you execute DDL operations during off-peak hours.
    
-   Before you commit the transactions that are run to delete or modify data, we recommend that you execute the `SELECT` statement to confirm the transactions. This way, you can prevent accidental operations. If you want to update only one row based on your business logic, add `LIMIT 1`.
    
-   If you want to perform DDL operations or other similar operations that may acquire locks on specific objects, we recommend that you configure a lock wait mechanism to prevent these operations from blocking queries on the locked objects. Such operations include `VACUUM FULL` and `CREATE INDEX`.
    
    ```
    begin;  
    SET local lock_timeout = '10s';  
    -- DDL query;  
    end;
    ```
    
-   You can execute the EXPLAIN ANALYZE statement to view the execution plan of a query. The EXPLAIN ANALYZE statement and the EXPLAIN statement work in a similar way. However, the EXPLAIN ANALYZE statement may involve data changes. If the execution plan of a query involves operations such as DML UPDATE, INSERT, or DELETE operations that cause data changes, you must execute the EXPLAIN ANALYZE statement in the transaction, and roll the transaction back after the statement is executed.
    
    ```
    begin;  
    EXPLAIN (ANALYZE) <DML(UPDATE/INSERT/DELETE) SQL>; 
    rollback;
    ```
    
-   If you want to delete or update a large amount of data, we recommend that you divide the data into batches and delete or update each batch of data in an independent transaction. We recommend that you do not delete or update all data in one transaction. If you delete or update all data in one transaction, a large amount of junk data is generated.
