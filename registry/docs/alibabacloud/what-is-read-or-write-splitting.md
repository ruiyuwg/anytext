If your database system receives a large number of read requests but a small number of write requests, the performance of the primary ApsaraDB RDS for MySQL instance is affected. You can use read/write splitting of the database proxy feature for the database system. The database system can automatically forward the read and write requests by using database proxy endpoints. The database proxy endpoint forwards the read requests to the read-only RDS instances. This helps reduce the loads on the primary RDS instance. A database proxy endpoint is formerly named as a proxy terminal.

## Introduction

After read-only RDS instances are created, you can enable read/write splitting of [a database proxy](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#concept-2020985) to allow the system to forward write requests to the primary RDS instance and read requests to the read-only RDS instances based on the read weights of these instances. This helps reduce the loads on the primary RDS instance.

-   **RDS Basic Edition:** Read/write splitting is not supported.
    
-   **RDS High-availability Edition:** You must [create read-only RDS instances](/help/en/rds/apsaradb-rds-for-mysql/create-a-read-only-apsaradb-rds-for-mysql-instance) and then [enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance) to implement read/write splitting.
    
-   **RDS Cluster Edition:** You can directly [enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance) to implement read/write splitting.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0157784471/CAEQORiBgICOw9WsrhkiIDUzNTNlODVhNmExNDQyM2Y5ODgwMzBiNDc0MDFkOGEz3963382_20230830144006.372.svg)

## Benefits

-   Unified read/write splitting endpoint to facilitate maintenance Unified endpoint to facilitate maintenance
    
    If you disable read/write splitting, you can perform read/write splitting only after you add the endpoints of the primary RDS instance and read-only RDS instances to your application.
    
    If you enable read/write splitting, you need to only connect to a database proxy endpoint to process write requests and read requests that are automatically forwarded to the primary RDS instance and read-only RDS instances. This helps reduce maintenance costs.
    
    You can also create read-only RDS instances to increase the read capability of your database system without the need to modify the configuration data on your application.
    
-   Native link to improve performance and reduce maintenance costs
    
    If you build your own proxy layer in the cloud to implement read/write splitting, data must be parsed and forwarded by multiple components before the data reaches your database system. As a result, response latencies increase. The read/write splitting feature is embedded in the ApsaraDB RDS ecosystem to reduce response latencies, increase processing speeds, and reduce maintenance costs.
    
-   Configurable read weights and thresholds to ensure suitability in various scenarios
    
    You can specify the read weights of the primary RDS instance and read-only RDS instances for the system to forward read requests based on the specified weights. You can also specify the latency threshold for data replication to the read-only RDS instances.
    
-   Instance-level health check to improve service availability
    
    Read/write splitting automatically checks the health status of the primary RDS instance and its read-only RDS instances. If a read-only RDS instance unexpectedly goes down or its data replication latency exceeds the specified threshold, the system stops forwarding read requests to the read-only instance. The system redirects read requests that are destined for the faulty read-only RDS instance to healthy RDS instances in your database system. This ensures service availability even if an individual read-only RDS instance fails. After the faulty read-only RDS instance is recovered, ApsaraDB RDS resumes routing read requests to the instance.
    
    **Note**
    
    To mitigate the impacts of single points of failure (SPOFs), we recommend that you create at least two read-only RDS instances.
    

## Logic used to forward requests

## Primary RDS instance

-   Requests that are used to execute INSERT, UPDATE, DELETE, and SELECT FOR UPDATE statements.
    
-   All requests that are used to perform DDL operations, such as the DDL operations that are performed to create databases or tables, delete databases or tables, and change schemas or permissions.
    
-   All requests that are encapsulated in transactions. If you enable the transaction splitting feature for your RDS instance, the requests are forwarded based on the instructions provided in [Use the transaction splitting feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-transaction-splitting-feature-on-an-apsaradb-rds-for-mysql-instance).
    
-   Requests that are encapsulated in non-read-only transactions of the repeatable read (RR) isolation level and later.
    
-   Requests that are used to invoke user-defined functions.
    
-   Requests that are used to run stored procedures.
    
-   Requests that are used to run multi-statement queries. For more information, see [Multi-Statement](https://dev.mysql.com/doc/internals/en/multi-statement.html).
    
-   Requests that involve temporary tables that are explictly created.
    
-   Requests that are used to execute SELECT last\_insert\_id() statements.
    
-   All requests that are used to query or reconfigure user variables.
    
-   Requests that are used to execute KILL statements in SQL. These statements are different from the KILL commands.
    
-   Requests that are used to execute LOCK statements, including LOCK TABLE and UNLOCK TABLE.
    
-   Requests that are used to execute FLUSH statements, including FLUSH TABLES WITH READ LOCK (FTWRL).
    
-   Requests that are used to execute the SAVEPOINT statement.
    

## Primary RDS instance or read-only RDS instance

-   Requests used to execute SELECT statements that are not encapsulated in transactions
    
-   Requests that are used to execute the START TRANSACTION READ ONLY statement
    

## All RDS instances

-   All requests that are used to reconfigure system variables
    
-   Requests that are used to execute USE statements
    
-   Requests that are used to execute the SHOW PROCESSLIST statement
    
    **Note**
    
    After the SHOW PROCESSLIST statement is executed, the dedicated proxy returns all processes that run on the primary RDS instance and read-only RDS instances in your database system.
    
-   Requests that are used to execute the NAMED PREPARE statement
    
-   Requests that are used to execute the COM\_CHANGE\_USER, COM\_QUIT, and COM\_SET\_OPTION statements
    

## Enable read/write splitting

**The read/write splitting feature is supported for RDS instances that run RDS High-availability Edition and RDS Cluster Edition. If you want to use the feature on an RDS instance that runs RDS High-availability Edition, you must create read-only RDS instances.** After you enable the database proxy feature, the read/writing splitting feature is automatically enabled for your RDS instance. No manual operations are required.

-   **RDS High-availability Edition:** If your RDS instance runs RDS High-availability Edition, the secondary RDS instance cannot be accessed. If you want to implement read/write splitting, [create read-only RDS instances](/help/en/rds/apsaradb-rds-for-mysql/create-a-read-only-apsaradb-rds-for-mysql-instance) and then [enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance).
    
-   **RDS instances on RDS Cluster Edition:** If your RDS instance runs RDS Cluster Edition, the secondary node can be accessed and processes only read requests. You can directly [enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance) to implement read/write splitting.
    

To use the read/writing splitting feature, you must use the database proxy endpoint to connect to your RDS instance. You can click **Database Proxy** in the left-side navigation pane of the **instance details** page to obtain the **database proxy endpoint**. After you connect to your RDS instance by using the database proxy endpoint, the database proxy endpoint automatically forwards read and write requests based on the [logic used to forward requests](#38988c807f6t9). After you enable the read/writing splitting feature, you can perform the following operations:

-   [Configure the read and write attributes and read weights](/help/en/rds/apsaradb-rds-for-mysql/configure-read-write-attributes-and-read-weights): You can change the read and write attributes of the database proxy endpoint and the read weights of RDS instances to isolate requests and adjust the load on each instance.
    
-   **Query the distribution of SQL statements:** You can temporarily enable the [SQL Explorer and Audit feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-sql-explorer-and-audit-feature-on-an-apsaradb-rds-for-mysql-instance) to query the SQL statements that are executed on each RDS instance to understand the distribution of the read and write requests. You are charged for using the SQL Explorer and Audit feature. If you no longer require the feature, you can disable the feature.
    

After the database proxy feature is enabled and read/write splitting is implemented, you can configure read and write attributes and specify read weights. For more information, see [Configure the read and write attributes and the read weight](/help/en/rds/apsaradb-rds-for-mysql/configure-read-write-attributes-and-read-weights).

## Processing logic of the database proxy endpoint based on the read and write attributes

**Read and write attributes**

**Method to specify read weights**

**Weight of a primary RDS instance**

**Normal case**

**After the last read-only RDS instance is deleted**

**After all read-only RDS instances are faulty**

**Read-only**

Automatic or Custom

You cannot specify a read weight for your primary RDS instance.

Primary RDS instance: does not process read or write requests. In this case, no request forwarding is performed.

Database proxy endpoint: processes only read requests.

Primary RDS instance: does not process read or write requests. In this case, no request forwarding is performed.

Database proxy endpoint: does not process read or write requests. In this case, a connection error occurs.

Primary RDS instance: does not process read or write requests. In this case, no request forwarding is performed.

Database proxy endpoint: does not process read or write requests. In this case, a connection error occurs.

**Read and write**

Automatic

A weight equal to 0

For more information, see [Rules of read weight allocation by the system](/help/en/rds/apsaradb-rds-for-mysql/rules-of-weight-allocation-by-the-system#concept-oqf-j5p-wdb).

Primary RDS instance: processes only write requests.

Database proxy endpoint: processes read and write requests.

Primary RDS instance: processes read and write requests.

Database proxy endpoint: processes read and write requests.

Primary RDS instance: processes read and write requests.

Database proxy endpoint: processes read and write requests.

Custom

A weight greater than 0

Primary RDS instance: processes read and write requests.

Database proxy endpoint: processes read and write requests.

Primary RDS instance: processes read and write requests.

Database proxy endpoint: processes read and write requests.

Primary RDS instance: processes read and write requests.

Database proxy endpoint: processes read and write requests.

A weight equal to 0

Primary RDS instance: processes only write requests.

Database proxy endpoint: processes read and write requests.

Primary RDS instance: processes read and write requests.

Database proxy endpoint: processes read and write requests.

Primary RDS instance: processes read and write requests.

Database proxy endpoint: processes read and write requests.

**Note**

-   No request forwarding: indicates that the primary RDS instance is not involved in read-only request forwarding.
    
-   Connection error: indicates that a connection error is reported when the proxy terminal does not process read or write requests.
    
-   In read/write mode, when the weight of the primary RDS instance is set to 0, read requests are not forwarded to the primary RDS instance by default. However, if read-only RDS instances of the primary RDS instance are faulty, a forceful hint is specified, or transaction splitting is enabled, the read requests are forwarded to the primary RDS instance.
    
-   For more information, see [Configure the read/write attributes and the read weight of the database proxy](/help/en/rds/apsaradb-rds-for-mysql/configure-read-write-attributes-and-read-weights).
    

## **References**

-   [Usage notes for the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/usage-notes-for-database-proxies#concept-2021298) and [FAQ about the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/faq-about-database-proxies#reference-2020988)
    
-   [Verify read/write splitting](/help/en/rds/apsaradb-rds-for-mysql/verify-read-or-write-splitting-on-an-apsaradb-rds-for-mysql-instance#task-2276818)
    
-   [What are database proxies?](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies)
    
-   [Create a read-only MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-a-read-only-apsaradb-rds-for-mysql-instance)
