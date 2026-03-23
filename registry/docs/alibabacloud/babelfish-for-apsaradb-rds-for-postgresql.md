If you want your ApsaraDB RDS for PostgreSQL instance to query and process data from both Microsoft SQL Server databases and PostgreSQL databases or plan to migrate the data of your application from a SQL Server instance to your RDS instance to reduce costs, you can enable Babelfish for your RDS instance. Babelfish supports Transact-SQL (T-SQL) statements and Tabular Data Stream (TDS). This topic describes the features, architecture, scenarios, and usage notes of Babelfish for ApsaraDB RDS for PostgreSQL instances.

## Definition

ApsaraDB RDS for PostgreSQL provides the Babelfish feature that is developed based on the Babelfish for PostgreSQL open source project. You can enable Babelfish when you create an ApsaraDB RDS for the PostgreSQL instance. After you enable Babelfish, your RDS instance can query and process data from both Microsoft SQL Server databases and PostgreSQL databases. This way, your RDS instance can parse and execute Transact-SQL (T-SQL) statements.

Babelfish supports **Tabular Data Stream (TDS), the SQL Server wire-protocol** and **T-SQL, the Microsoft SQL Server query language**. You can migrate the database of your application from an SQL Server instance to an RDS instance for which Babelfish is enabled by modifying only a few lines of code. You do not need to switch database drivers or rewrite SQL statements.

For more information, see [T-SQL built-in functions supported by Babelfish](/help/en/rds/apsaradb-rds-for-postgresql/t-sql-built-in-functions-supported-by-babelfish).

## Scenarios

-   You want to reduce the license costs of SQL Server.
    
-   You want to migrate an SQL Server database to a PostgreSQL database. However, you do not want to spend a long period of time or efforts in modifying the application code.
    
-   You want to use the open source extension libraries of PostgreSQL, such as the PostGIS extension for spatio-temporal data analysis and the TimescaleDB extension for time series data analysis.
    
-   You want to reduce the costs by using a single RDS instance to process data from both PostgreSQL databases and SQL Server databases.
    

## Architecture

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4957213371/CAEQLBiBgIDMn9inixkiIDQ0ZWVkODUxNWNiZDRhZjk4NWY2Zjk5ZTZkOTYxZTRh3963382_20230830144006.372.svg)

Architecture description:

-   An RDS instance for which Babelfish is enabled uses the following listeners to monitor requests from SQL Server clients and PostgreSQL clients over TCP ports:
    
    -   TDS listener: receives requests over the TDS port for SQL Server. The default port number is 1433.
        
        **Note**
        
        Babelfish supports TDS 7.1 or later. Microsoft SQL Server 2000 and later versions are supported.
        
    -   PostgreSQL listener: receives requests over the port for PostgreSQL. The default port number is 5432.
        
        **Note**
        
        RDS instances that run PostgreSQL 15 are supported.
        
-   When an RDS instance for which Babelfish is enabled receives a request from the TDS listener, the RDS instance forwards the request to the T-SQL parser. Then, the T-SQL parser converts the T-SQL statements of SQL Server to an execution plan that can be processed by PostgreSQL.
    
-   When an RDS instance for which Babelfish is enabled receives a request from the PostgreSQL listener, the RDS instance forwards the request to the PostgreSQL parser to generate an execution plan.
    
-   The SQL executor of PostgreSQL processes and executes all plans.
    

If you enable Babelfish for your RDS instance, the RDS instance incorporates the capabilities of both the PostgreSQL database engine and the SQL Server database engine. Your RDS instance can process requests from SQL Server clients and PostgreSQL clients. This helps reduce costs and enhance processing capabilities.

## Migration modes

A PostgreSQL database named `babelfish_db` is provisioned for an RDS instance for which Babelfish is enabled. All migrated SQL Server objects and schemas are stored in this PostgreSQL database.

**Note**

If you connect your application to your RDS instance over the TDS port, the `babelfish_db` database is invisible.

You can use the **Single-DB** mode or **Multi-DB** mode. The mode that you choose to use affects the names of schemas in SQL Server databases and those in the `babelfish_db` database.

### Single-DB mode

-   **Architecture** ![single-db](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0478944561/p439395.png)
    
-   **Description**: In this mode, the schema names of the user database in the babelfish\_db database are the same as the schema names in SQL Server databases.
    
    For example, you create a database named DB\_A over the TDS port and then create a schema named schema\_A in the DB\_A database.
    
    -   The schemas named dbo and schema\_A reside in the babelfish\_db database of PostgreSQL.
        
    -   The schemas named dbo and schema\_A reside in the DB\_A database of SQL Server.
        
    

### Multi-DB mode

-   **Architecture** ![Multi-DB](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0478944561/p439398.png)
    
-   **Description**: In this mode, the schema of the user database in PostgreSQL is named in the format of `dbname_schemaname`. In SQL Server, the schema names remain unchanged.
    
    For example, you create a database named DB\_A over the TDS port and then create a schema named schema\_A in the DB\_A database.
    
    -   The schemas named DB\_A\_dbo and DB\_A\_schema\_A reside in the babelfish\_db database of PostgreSQL.
        
    -   The schemas named dbo and schema\_A reside in the DB\_A database of SQL Server.
        
    

## Billing rules

The pricing of an RDS instance for which Babelfish is enabled is the same as the pricing of a regular RDS instance. No additional fees are charged. The price varies based on the instance configurations, such as the region, instance type, and storage type. For more information, visit the [ApsaraDB RDS buy page](https://rdsbuy.console.alibabacloud.com/create/rds/PostgreSQL).

## Usage notes

-   You can enable Babelfish for an ApsaraDB RDS for PostgreSQL instance only when you create the RDS instance. The RDS instance must use the following parameter settings:
    
    **Note**
    
    RDS instances that run RDS Cluster Edition are not supported.
    
    -   Database Engine: PostgreSQL 15.
        
    -   Product Type: Standard.
        
-   You cannot enable Babelfish for existing RDS instances.
    
-   You cannot disable Babelfish after it is enabled.
    
-   After the RDS instance is created, the babelfish\_db database is created. The babelfish\_db database is the key database of the RDS instance for which Babelfish is enabled. We recommend that you do not delete the database. If you delete the database, the RDS instance becomes unavailable.
    

## References

-   [Enable Babelfish for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/enable-babelfish-for-an-apsaradb-rds-for-postgresql-instance#task-2212682)
    
-   [Manage Babelfish accounts](/help/en/rds/apsaradb-rds-for-postgresql/manage-babelfish-accounts#task-2212683)
    
-   [Use clients to connect to an ApsaraDB RDS for PostgreSQL instance with Babelfish enabled](/help/en/rds/apsaradb-rds-for-postgresql/use-clients-to-connect-to-an-apsaradb-rds-for-postgresql-instance-with-babelfish-enabled#task-2212684)
    
-   [Use applications to connect to an ApsaraDB RDS for PostgreSQL instance with Babelfish enabled](/help/en/rds/apsaradb-rds-for-postgresql/use-applications-to-connect-to-an-apsaradb-rds-for-postgresql-instance-with-babelfish-enabled#task-2214058)
