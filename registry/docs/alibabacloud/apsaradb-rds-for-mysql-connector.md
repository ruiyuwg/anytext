This topic describes how to use the ApsaraDB RDS for MySQL connector.

ApsaraDB RDS for MySQL is developed based on a branch of MySQL and provides excellent performance. ApsaraDB RDS for MySQL is a tried and tested solution that handled the high-volume concurrent traffic during Double 11. ApsaraDB RDS for MySQL provides basic features such as whitelist configuration, backup and restoration, Transparent Data Encryption (TDE), data migration, and management of instances, accounts, and databases. For more information about ApsaraDB RDS for MySQL, see [ApsaraDB RDS for MySQL database](/help/en/rds/apsaradb-rds-for-mysql/overview-3#concept-gws-2dh-wdb).

**Important**

The ApsaraDB RDS for MySQL connector will not be supported in the future. We recommend that you use the MySQL connector instead of the ApsaraDB RDS for MySQL connector. For more information about how to use the MySQL connector, see [MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/#concept-2476949).

The following table describes the capabilities supported by the ApsaraDB RDS for MySQL connector.

**Item**

**Description**

Table type

Sink table and dimension table

Running mode

Batch mode and streaming mode

Data format

N/A

Metric

-   Metrics for dimension tables: none
    
-   Metrics for sink tables:
    
    -   numRecordsOut
        
    -   numRecordsOutPerSecond
        
    -   numBytesOut
        
    -   numBytesOutPerSecond
        
    -   currentSendTime
        
    -   numRecordsOutErrors
        

**Note**

For more information about the metrics, see [Metrics](/help/en/flink/realtime-flink/user-guide/metrics).

API type

SQL

Data update or deletion in a sink table

Supported

## Prerequisites

-   An ApsaraDB RDS for MySQL database and an ApsaraDB RDS for MySQL table are created. For more information, see [Create databases and accounts for an ApsaraDB RDS for MySQL](/help/en/rds/create-databases-and-accounts-for-an-apsaradb-rds-for-mysql-instance#concept-jyq-tc5-q2b).
    
-   An IP address whitelist is configured for the ApsaraDB RDS for MySQL database. For more information, see [Use a database client or the CLI to connect to an ApsaraDB RDS for MySQL instance](/help/en/rds/use-a-database-client-or-the-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance-2#concept-pdr-k2f-vdb).
    

## Limits

-   Only Realtime Compute for Apache Flink that uses Ververica Runtime (VVR) 2.0.0 or later supports the ApsaraDB RDS for MySQL connector.
    
-   The ApsaraDB RDS for MySQL connector supports only [ApsaraDB RDS for MySQL databases](/help/en/rds/apsaradb-rds-for-mysql/overview-3#concept-gws-2dh-wdb).
    
-   The at-least-once semantics can be used. If an ApsaraDB RDS for MySQL sink table contains a primary key, idempotence can be used to ensure data correctness.
    
-   We recommend that you use the latest version of Realtime Compute for Apache Flink to ensure high performance and stability. For example, you can use Realtime Compute for Apache Flink that uses VVR 6.X or later.
    

## Precautions

The ApsaraDB RDS for MySQL connector will be phased out in the future. We recommend that you use the MySQL connector if the MySQL connector can meet your business requirements. For more information, see [MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/#concept-2476949).

## Syntax

-   Statement for creating an ApsaraDB RDS for MySQL sink table
    
    ```
    CREATE TABLE rds_sink(
      id INT,
      num BIGINT,
      PRIMARY KEY(id) NOT ENFORCED
    ) WITH (
      'connector'='rds',
      'tableName'='your-table-name',
      'userName'='your-user-name',
      'password'='your-password',
      'url'='your-url'
    );
    ```
    
    **Note**
    
    -   The ApsaraDB RDS for MySQL connector converts each row of output data into an SQL statement and then executes the statement to write data into the sink table. If the sink table does not contain a primary key, the ApsaraDB RDS for MySQL connector executes `INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);` statement. If the sink table contains a primary key, the ApsaraDB RDS for MySQL connector executes the `INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...) ON DUPLICATE KEY UPDATE column1 = VALUES(column1), column2 = VALUES(column2), ...;` statement. If a physical table contains a unique index constraint besides a primary key constraint and two records with different primary keys but the same unique index are inserted into the physical table, downstream data is overwritten due to a conflict between the unique indexes. This causes data loss.
        
    -   If an auto-increment primary key is specified in an ApsaraDB RDS for MySQL database, you cannot declare the auto-increment field in the Flink DDL statement. During data writing, the database automatically configures the auto-increment field. The ApsaraDB RDS for MySQL connector can only be used to write or delete data that contains auto-increment fields but cannot be used to update the data.
        
    
-   Statement for creating an ApsaraDB RDS for MySQL dimension table
    
    ```
    CREATE TABLE rds_dim(
     id1 INT,
     id2 VARCHAR
    ) WITH (
      'connector'='rds',
      'tableName'='your-table-name',
      'userName'='your-user-name',
      'password'='your-password',
      'url'='your-url'
      'cache'='NONE'
    );
    ```
    

## Parameters in the WITH clause

-   Common parameters
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    connector
    
    The type of the table.
    
    STRING
    
    Yes
    
    No default value
    
    Set the value to rds.
    
    tableName
    
    The name of the metatable.
    
    STRING
    
    Yes
    
    No default value
    
    N/A.
    
    userName
    
    The username that is used to access the database.
    
    STRING
    
    Yes
    
    No default value
    
    N/A.
    
    password
    
    The password that is used to access the database.
    
    STRING
    
    Yes
    
    No default value
    
    N/A.
    
    url
    
    The URL that is used to access the table.
    
    STRING
    
    Yes
    
    No default value
    
    The virtual private cloud (VPC) endpoint of the ApsaraDB RDS for MySQL database. The value is an internal endpoint. For more information, see [View and change the internal and public endpoints and port numbers of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance#concept-fbd-ypv-ydb).
    
    The URL is in the `jdbc:mysql://<Internal endpoint >:< Port number>/<Database name>` format.
    
    **Note**
    
    If you create a sink table, you must append ?rewriteBatchedStatements=true to the end of the URL to improve system performance.
    
    maxRetryTimes
    
    The maximum number of retries that can be performed when you fail to query data in a dimension table or write data to a sink table.
    
    INTEGER
    
    No
    
    -   For Realtime Compute for Apache Flink that uses VVR 4.0.7 or later, the default value of this parameter is 10.
        
    -   For Realtime Compute for Apache Flink that uses VVR 4.0.6 or earlier, the default value of this parameter is 3.
        
    
    N/A.
    
-   Parameters only for sink tables
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    batchSize
    
    The number of data records that can be written at a time.
    
    INTEGER
    
    No
    
    -   For Realtime Compute for Apache Flink that uses VVR 4.0.7 or later, the default value of this parameter is 4096.
        
    -   For Realtime Compute for Apache Flink that uses VVR of a version ranging from 4.0.0 to 4.0.6, the default value of this parameter is 5000.
        
    -   For Realtime Compute for Apache Flink that uses VVR 3.X or earlier, the default value of this parameter is 100.
        
    
    N/A.
    
    bufferSize
    
    The maximum number of data records that can be cached in the memory. Write operations are triggered if the threshold specified by the batchSize or bufferSize parameter is reached.
    
    INTEGER
    
    No
    
    10000
    
    -   Only Realtime Compute for Apache Flink that uses VVR 4.0.7 or later supports this parameter.
        
    -   This parameter takes effect only after you specify the primary key.
        
    
    flushIntervalMs
    
    The interval at which you want to flush the memory buffer. If the number of cached data records does not reach the upper limit that is specified by the batchSize or bufferSize parameter within the specified period of time, the system automatically writes all cached data to the sink table.
    
    INTEGER
    
    No
    
    -   For Realtime Compute for Apache Flink that uses VVR 4.0.7 or later, the default value is 2000.
        
    -   For Realtime Compute for Apache Flink that uses VVR of a version ranging from 4.0.0 to 4.0.6, the default value is 0.
        
    -   For Realtime Compute for Apache Flink that uses VVR 3.X or earlier, the default value is 1000.
        
    
    If you do not configure this parameter in a version for which the default value of this parameter is 0, a small amount of data may never be written to the sink table. To resolve this issue, we recommend that you use a later version of Realtime Compute for Apache Flink.
    
    ignoreDelete
    
    Specifies whether to ignore delete operations.
    
    BOOLEAN
    
    No
    
    false
    
    Delete operations may occur when you use Flink SQL. If multiple output operators update different fields in the same sink table based on the primary key, the data result may be incorrect.
    
    For example, a data record is deleted in a task and then only some fields of the data record are updated in another task. In this case, the values of the fields that are not updated become null or default values because the fields are deleted. To avoid delete operations, you can set the ignoreDelete parameter to true.
    
    connectionMaxActive
    
    The size of the database connection pool.
    
    INTEGER
    
    No
    
    40
    
    -   Only Realtime Compute for Apache Flink that uses VVR 4.0.7 or later supports this parameter.
        
    -   If access to a database connection pool times out, the number of database connections in the pool may be insufficient. You can increase the size of the database connection pool.
        
    -   If the maximum number of parallel connections supported by the database is small, you can reduce the size of the connection pool or reduce the parallelism of operators.
        
    
-   Parameters only for dimension tables
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    cache
    
    The cache policy for the dimension table.
    
    STRING
    
    No
    
    -   For Realtime Compute for Apache Flink that uses VVR of a version earlier than 4.0.6, the default value of this parameter is NONE.
        
    -   For Realtime Compute for Apache Flink that uses VVR 4.0.6 or later, the default value of this parameter is ALL.
        
    
    The ApsaraDB RDS for MySQL connector supports the following cache policies for dimension tables: None, LRU, and ALL. For more information about the cache policies, see [Background information](/help/en/flink/realtime-flink/developer-reference/join-statements-for-dimension-tables#846dfb8077v4g).
    
    cacheSize
    
    The maximum number of rows of data records that can be cached.
    
    INTEGER
    
    No
    
    100000
    
    -   If you set the cache parameter to LRU, you must configure the cacheSize parameter.
        
    -   If you set the cache parameter to NONE or ALL, you do not need to configure the cacheSize parameter.
        
    
    cacheTTLMs
    
    The cache timeout period.
    
    LONG
    
    No
    
    -   If you set the cache parameter to NONE, you do not need to configure the cacheTTLMs parameter. This indicates that cache entries do not expire.
        
    -   If you set the cache parameter to LRU, the cacheTTLMs parameter specifies the cache timeout period. By default, cache entries do not expire.
        
    -   If you set the cache parameter to ALL, the cacheTTLMs parameter specifies the interval at which the system reloads the cache. By default, the cache is not reloaded.
        
    
    Unit: milliseconds.
    
    maxJoinRows
    
    The maximum number of results returned after each data record in the primary table is mapped to the data in the dimension table.
    
    INTEGER
    
    No
    
    1024
    
    When you join the primary table and a dimension table, the number of results returned after an input data record in the primary table is mapped to the data records in the dimension table is limited by this parameter.
    
    If you can estimate that a data record in the primary table corresponds to a maximum of n data records in the dimension table, you can set the `maxJoinRows` parameter to n to ensure efficient matching of Realtime Compute for Apache Flink.
    

## Data type mappings

**Data type of Flink**

**Data type of ApsaraDB RDS for MySQL**

BOOLEAN

BOOLEAN

TINYINT

TINYINT

TINYINT(1)

**Note**

Only dimension tables support this mapping.

BOOLEAN

SMALLINT

SMALLINT

SMALLINT

TINYINT UNSIGNED

INT

INT

INT

SMALLINT UNSIGNED

BIGINT

BIGINT

BIGINT

INT UNSIGNED

DECIMAL(20,0)

BIGINT UNSIGNED

FLOAT

FLOAT

DECIMAL

DECIMAL

DOUBLE

DOUBLE

DATE

DATE

TIME

TIME

TIMESTAMP

TIMESTAMP

VARCHAR

VARCHAR

VARBINARY

VARBINARY

## Sample code

-   Sample code for a sink table
    
    ```
    CREATE TEMPORARY TABLE datagen_source(
     `name` VARCHAR,
     `age` INT
    ) WITH (
      'connector'='datagen'
    );
    
    CREATE TEMPORARY TABLE rds_sink(
     `name` VARCHAR,
     `age` INT
    ) WITH (
      'connector'='rds',
      'password'='your-password',
      'tableName'='your-tablename',
      'url'='your-url',
      'userName'='your-username'
    );
    
    INSERT INTO rds_sink
    SELECT * FROM datagen_source;
    ```
    
-   Sample code for a dimension table
    
    ```
    CREATE TEMPORARY TABLE datagen_source(
     a INT,
     b BIGINT,
     c STRING,
     `proctime` AS PROCTIME()
    ) WITH (
      'connector'='datagen'
    );
    
    CREATE TEMPORARY TABLE rds_dim(
     a INT,
     b VARCHAR,
     c VARCHAR
    ) WITH (
     'connector'='rds',
     'password'='<yourPassword>',
     'tableName'='<yourTablename>',
     'url'='jdbc:mysql://xxx',
     'userName'='<yourUsername>'
    );
    
    CREATE TEMPORARY TABLE blackhole_sink(
     a INT,
     b STRING
    ) WITH (
     'connector'='blackhole'
    );
    
    INSERT INTO blackhole_sink
    SELECT T.a, H.b FROM datagen_source AS T JOIN rds_dim FOR SYSTEM_TIME AS OF T.`proctime` AS H ON T.a=H.a;
    ```
    

## FAQ

-   [When output data is written to an ApsaraDB RDS sink table, is a new data record inserted into the table, or is the sink table updated based on the primary key value?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-bk2-s1b-xaj)
    
-   [How do I perform GROUP BY operations by using the unique index of an ApsaraDB RDS sink table?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-2o1-y9h-n5k)
    
-   [Why is the INT UNSIGNED data type that is supported by MySQL physical tables, such as ApsaraDB RDS for MySQL physical tables or AnalyticDB for MySQL physical tables, declared as another data type in Flink SQL?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-73o-czk-7f0)
    
-   [What do I do if the error message "Incorrect string value: '\\xF0\\x9F\\x98\\x80\\xF0\\x9F...' for column 'test' at row 1" appears?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-078-26n-l9s)
