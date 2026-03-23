This topic describes how to use the Java Database Connectivity (JDBC) connector.

## Background information

This connector is the open source Flink JDBC connector. It lets you read data from and write data to common databases, such as MySQL, PostgreSQL, and Oracle. The following table describes the capabilities of the JDBC connector.

**Category**

**Description**

Supported types

Source table, dimension table, and sink table

Running mode

Streaming mode and batch mode

Data format

Not applicable

Specific monitoring metrics

None

API type

SQL

Support for updating or deleting data in sink tables

Yes

## Prerequisites

The database and table that you want to connect to must be created.

## Limits

-   A JDBC source table is a bounded data source. After all data is read, the task automatically ends. To capture real-time changes, use a Change Data Capture (CDC) connector. For more information, see [MySQL CDC source tables](/help/en/flink/realtime-flink/developer-reference/mysql-connector/) and [PostgreSQL CDC source tables (public preview)](/help/en/doc-detail/184861.html#concept-2476949).
    
-   When you write data to a PostgreSQL sink table, the database version must be 9.5 or later. Write operations will fail on earlier versions because they do not support the ON CONFLICT syntax.
    
-   Flink does not include a built-in database driver. You must manually upload the JAR package for your database driver as an additional dependency. The following table lists the supported drivers:
    
    **Driver**
    
    **Group ID**
    
    **Artifact ID**
    
    MySQL
    
    mysql
    
    [mysql-connector-java](https://repo.maven.apache.org/maven2/mysql/mysql-connector-java/)
    
    Oracle
    
    com.oracle.database.jdbc
    
    [ojdbc8](https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8)
    
    PostgreSQL
    
    org.postgresql
    
    [postgresql](https://jdbc.postgresql.org/download/)
    
    > If you use a JDBC driver that is not listed in the table, you must test its validity and availability before use.
    

-   When the JDBC connector writes data to a MySQL sink table, it concatenates each received record into an SQL statement and executes it. For a MySQL sink table that contains a primary key, the following statement is executed: `INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...) ON DUPLICATE KEY UPDATE column1 = VALUES(column1), column2 = VALUES(column2), ...;`.
    
    **Warning**
    
    If a table has a unique index that is not the primary key, inserting a record with a different primary key but an identical unique index value causes a conflict. This conflict results in data being overwritten and leads to data loss.
    

## Syntax

```
CREATE TABLE jdbc_table (
  `id` BIGINT,
  `name` VARCHAR,
   PRIMARY KEY (id) NOT ENFORCED
) WITH (
  'connector' = 'jdbc',
  'url' = 'jdbc:xxx',
  'table-name' = '<yourTable>',
  'username' = '<yourUsername>',
  'password' = '<yourPassword>'
);
```

## Parameters

-   General
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Notes**
    
    connector
    
    The type of the table.
    
    String
    
    Yes
    
    None
    
    The value must be \`jdbc\`.
    
    url
    
    The URL of the database.
    
    String
    
    Yes
    
    None
    
    None.
    
    table-name
    
    The name of the JDBC table.
    
    String
    
    Yes
    
    None
    
    None.
    
    username
    
    The username for the JDBC connection.
    
    String
    
    No
    
    None
    
    If you specify either the \`username\` or \`password\` parameter, you must specify both.
    
    password
    
    The password for the JDBC connection.
    
    String
    
    No
    
    None
    
-   Source table specific
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Notes**
    
    scan.partition.column
    
    The name of the column used to partition the input.
    
    String
    
    No
    
    None
    
    This column must be of a numeric or timestamp type. The type must also support comparison with numeric types in the database. For more information about partitioned scans, see [Partitioned Scan](https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/jdbc/#%e5%88%86%e5%8c%ba%e6%89%ab%e6%8f%8f).
    
    scan.partition.num
    
    The number of partitions.
    
    Integer
    
    No
    
    None
    
    None.
    
    scan.partition.lower-bound
    
    The minimum value of the first partition.
    
    Long
    
    No
    
    None
    
    None.
    
    scan.partition.upper-bound
    
    The maximum value of the last partition.
    
    Long
    
    No
    
    None
    
    None.
    
    scan.fetch-size
    
    The number of rows to fetch from the database per read loop.
    
    Integer
    
    No
    
    0
    
    If you set this parameter to 0, it is ignored.
    
    scan.auto-commit
    
    Specifies whether to enable [auto-commit](https://docs.oracle.com/javase/tutorial/jdbc/basics/transactions.html#commit_transactions).
    
    Boolean
    
    No
    
    true
    
    None.
    
-   Sink table specific
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Notes**
    
    sink.buffer-flush.max-rows
    
    The maximum number of records to cache before flushing.
    
    Integer
    
    No
    
    100
    
    Set this parameter to 0 to disable caching. Records are then flushed immediately.
    
    sink.buffer-flush.interval
    
    The flush interval. If data is cached in Flink for longer than this interval, an asynchronous thread flushes the data to the database.
    
    Duration
    
    No
    
    1000
    
    Unit: milliseconds (ms).
    
    Set this parameter to 0 to disable caching. Records are then flushed immediately.
    
    **Note**
    
    To handle cached flush events completely asynchronously, set sink.buffer-flush.max-rows to 0 and configure an appropriate flush interval.
    
    sink.max-retries
    
    The maximum number of retries when writing a record to the database fails.
    
    Integer
    
    No
    
    3
    
    None.
    
    sink.ignore-delete
    
    Specifies whether to ignore delete messages.
    
    Boolean
    
    No
    
    false
    
    This parameter is supported in V11.4 and later. By default, delete messages are not ignored.
    
    sink.ignore-delete-mode
    
    The policy for handling ignored delete messages.
    
    String
    
    No
    
    ALL
    
    This parameter takes effect only when \`sink.ignore-delete\` is set to \`true\`.
    
    Valid values:
    
    -   ALL (default): Ignores -D and -U messages.
        
    -   REAL\_DELETE: Ignores only -D messages.
        
    -   UPDATE\_BEFORE: Ignores only -U messages.
        
    
    This parameter is supported in V11.4 and later.
    
-   Dimension table specific
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Notes**
    
    lookup.cache.max-rows
    
    The maximum number of rows to cache. If this value is exceeded, the oldest row expires and is replaced by a new record.
    
    Integer
    
    No
    
    None
    
    By default, the dimension table cache is disabled. Set the lookup.cache.max-rows and lookup.cache.ttl parameters to enable the dimension table cache. When caching is enabled, a Least Recently Used (LRU) policy is used.
    
    lookup.cache.ttl
    
    The maximum time to live (TTL) for each record in the cache. If a record exceeds this time, it expires.
    
    Duration
    
    No
    
    None
    
    lookup.cache.caching-missing-key
    
    Specifies whether to cache empty query results.
    
    Boolean
    
    No
    
    true
    
    Valid values:
    
    -   true (default): Caches empty query results.
        
    -   false: Does not cache empty query results.
        
    
    lookup.max-retries
    
    The maximum number of retries when a database query fails.
    
    Integer
    
    No
    
    3
    
    None.
    
-   PostgreSQL specific
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Notes**
    
    source.extend-type.enabled
    
    When used as a source or dimension table, specifies whether to allow reading extended types such as JSONB and UUID and mapping them to Flink-supported types.
    
    Boolean
    
    No
    
    false
    
    Valid values:
    
    -   true: Supports reading and mapping extended types.
        
    -   false (default): Does not support reading and mapping extended types.
        
    
    **Note**
    
    If the foreign key field for a dimension table query is of the UUID type, you must also set [stringtype](https://www.postgresql.org/docs/current/datatype-character.html)\=unspecified in the URL. The PostgreSQL server then automatically queries based on the actual data type.
    

## Data type mapping

**MySQL type**

**Oracle type**

**PostgreSQL type**

**Flink SQL type**

TINYINT

N/A

N/A

TINYINT

-   SMALLINT
    
-   TINYINT UNSIGNED
    

N/A

-   SMALLINT
    
-   INT2
    
-   SMALLSERIAL
    
-   SERIAL2
    

SMALLINT

-   INT
    
-   MEDIUMINT
    
-   SMALLINT UNSIGNED
    

N/A

-   INTEGER
    
-   SERIAL
    

INT

-   BIGINT
    
-   INT UNSIGNED
    

N/A

-   BIGINT
    
-   BIGSERIAL
    

BIGINT

BIGINT UNSIGNED

N/A

N/A

DECIMAL(20, 0)

BIGINT

N/A

BIGINT

BIGINT

FLOAT

BINARY\_FLOAT

-   REAL
    
-   FLOAT4
    

FLOAT

-   DOUBLE
    
-   DOUBLE PRECISION
    

BINARY\_DOUBLE

-   FLOAT8
    
-   DOUBLE PRECISION
    

DOUBLE

-   NUMERIC(p, s)
    
-   DECIMAL(p, s)
    

-   SMALLINT
    
-   FLOAT(s)
    
-   DOUBLE PRECISION
    
-   REAL
    
-   NUMBER(p, s)
    

-   NUMERIC(p, s)
    
-   DECIMAL(p, s)
    

DECIMAL(p, s)

-   BOOLEAN
    
-   TINYINT(1)
    

N/A

BOOLEAN can

BOOLEAN

DATE

DATE

DATE

DATE

TIME \[(p)\]

DATE

TIME \[(p)\] \[WITHOUT TIMEZONE\]

TIME \[(p)\] \[WITHOUT TIMEZONE\]

DATETIME \[(p)\]

TIMESTAMP \[(p)\] \[WITHOUT TIMEZONE\]

TIMESTAMP \[(p)\] \[WITHOUT TIMEZONE\]

TIMESTAMP \[(p)\] \[WITHOUT TIMEZONE\]

-   CHAR(n)
    
-   VARCHAR(n)
    
-   TEXT
    

-   CHAR(n)
    
-   VARCHAR(n)
    
-   CLOB
    

-   CHAR(n)
    
-   CHARACTER(n)
    
-   VARCHAR(n)
    
-   CHARACTER VARYING(n)
    
-   TEXT
    
-   JSONB
    
-   UUID
    

STRING

-   BINARY
    
-   VARBINARY
    
-   BLOB
    

-   RAW(s)
    
-   BLOB
    

BYTEA

BYTES

N/A

N/A

ARRAY

ARRAY

## Examples

-   Source table
    
    ```
    CREATE TEMPORARY TABLE jdbc_source (
      `id` INT,
      `name` VARCHAR
    ) WITH (
      'connector' = 'jdbc',
      'url' = 'jdbc:xxx',
      'table-name' = '<yourTable>',
      'username' = '<yourUsername>',
      'password' = '<yourPassword>'
    );
    
    CREATE TEMPORARY TABLE blackhole_sink(
      `id` INT,
      `name` VARCHAR
    ) WITH (
      'connector' = 'blackhole'
    );
    
    INSERT INTO blackhole_sink SELECT * FROM jdbc_source ;
    ```
    
-   Sink table
    
    ```
    CREATE TEMPORARY TABLE datagen_source (
      `name` VARCHAR,
      `age` INT
    ) WITH (
      'connector' = 'datagen'
    );
    
    CREATE TEMPORARY TABLE jdbc_sink (
      `name` VARCHAR,
      `age` INT
    ) WITH (
      'connector' = 'jdbc',
      'url' = 'jdbc:xxxx',
      'table-name' = '<yourTable>',
      'username' = '<yourUsername>',
      'password' = '<yourPassword>'
    );
    
    INSERT INTO jdbc_sink
    SELECT * FROM datagen_source;
    ```
    
-   Dimension table
    
    ```
    CREATE TEMPORARY TABLE datagen_source(
     `id` INT,
     `data` BIGINT,
     `proctime` AS PROCTIME()
    ) WITH (
      'connector' = 'datagen'
    );
    
    CREATE TEMPORARY TABLE jdbc_dim (
      `id` INT,
      `name` VARCHAR
    ) WITH (
      'connector' = 'jdbc',
      'url' = 'jdbc:xxx',
      'table-name' = '<yourTable>',
      'username' = '<yourUsername>',
      'password' = '<yourPassword>'
    );
    
    CREATE TEMPORARY TABLE blackhole_sink(
      `id` INT,
      `data` BIGINT,
      `name` VARCHAR
    ) WITH (
      'connector' = 'blackhole'
    );
    
    INSERT INTO blackhole_sink
    SELECT T.`id`,T.`data`, H.`name`
    FROM datagen_source AS T
    JOIN jdbc_dim FOR SYSTEM_TIME AS OF T.proctime AS H ON T.id = H.id;
    ```
