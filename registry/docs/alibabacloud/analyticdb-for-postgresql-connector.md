This topic describes how to use the AnalyticDB for PostgreSQL connector.

## Background information

[AnalyticDB for PostgreSQL](/help/en/analyticdb/analyticdb-for-postgresql/product-overview/overview-product-overview) is a data warehouse for massively parallel processing (MPP). It provides online analysis services for a large amount of data.

The following table describes the capabilities supported by the AnalyticDB for PostgreSQL connector.

**Item**

**Description**

Table type

Source (beta), dimension, and sink table

**Note**

Currently, to read from an AnalyticDB for PostgreSQL source, you need to configure a custom connector. For more information, see [Use Flink CDC to subscribe to full and incremental data in real time](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/subscribe-to-incremental-data-in-real-time-by-using-flink-cdc-being-tested).

Running mode

Streaming and batch mode.

Data format

N/A

Metric

-   Metrics for sink tables
    
    -   numRecordsOut
        
    -   numRecordsOutPerSecond
        
    -   numBytesOut
        
    -   numBytesOutPerSecond
        
    -   currentSendTime
        
-   Metrics for dimension tables: none
    

**Note**

For more information about the metrics, see [Metrics](/help/en/flink/realtime-flink/user-guide/metrics).

API type

SQL

Data update or deletion in a sink table

Supported

## Prerequisites

-   An AnalyticDB for PostgreSQL instance and an AnalyticDB for PostgreSQL table are created. For more information, see [Create an instance](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/create-an-instance-instance-management) and [CREATE TABLE](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/sql-syntax#section-hjr-cjh-thb).
    
-   An IP address whitelist is configured for the AnalyticDB for PostgreSQL instance. For more information, see [Configure an IP address whitelist](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/configure-an-ip-address-whitelist-user-guide#task-v4f-dmr-52b).
    

## Limitations

-   Only VVR 8.0.1 or later supports AnalyticDB for PostgreSQL V7.0.
    
-   Self-managed PostgreSQL databases are not supported.
    

## Syntax

```
CREATE TEMPORARY TABLE adbpg_table (
 id INT,
 len INT,
 content VARCHAR, 
 PRIMARY KEY(id)
) WITH (
 'connector'='adbpg',
 'url'='jdbc:postgresql://<yourAddress>:<yourPortId>/<yourDatabaseName>',
 'tableName'='<yourDatabaseTableName>',
 'userName'='<yourDatabaseUserName>',
 'password'='<yourDatabasePassword>'
);
```

## Connector options

### **General**

**Option**

**Description**

**Data type**

**Required**

**Default value**

**Remarks**

connector

The connector to use.

STRING

Yes

No default value

-   Source table: Set it to `adbpg-cdc`.
    
-   Dimension and sink table: Set it to `adbpg`.
    

url

The Java Database Connectivity (JDBC) URL of the database.

STRING

Yes

No default value

The URL is in the `jdbc:postgresql://<Address>:<PortId>/<DatabaseName>` format.

tableName

The name of the table in the database.

STRING

Yes

No default value

N/A.

userName

The username that is used to access the AnalyticDB for PostgreSQL database.

STRING

Yes

No default value

N/A.

password

The password that is used to access the AnalyticDB for PostgreSQL database.

STRING

Yes

No default value

N/A.

maxRetryTimes

The maximum number of retries that are allowed to write data to the table if a data writing attempt fails.

INTEGER

No

3

N/A.

targetSchema

The name of the schema.

STRING

No

public

N/A.

caseSensitive

Specifies whether to enable case sensitivity.

STRING

No

false

Valid values:

-   true: Case sensitivity is enabled.
    
-   false: Case sensitivity is disabled. This is the default value.
    

connectionMaxActive

The maximum number of connections in the connection pool.

INTEGER

No

5

The system automatically releases idle connections to the database service.

**Important**

If this option is set to an excessively large value, the number of server connections may be abnormal.

### **Source-specific (beta)**

**Option**

**Description**

**Data type**

**Required**

**Remarks**

schema-name

The schema name.

STRING

Yes

This option supports regular expressions. You can subscribe to multiple schemas at a time.

port

The port of the AnalyticDB for PostgreSQL instance.

INTEGER

Yes

Set it to `5432`.

decoding.plugin.name

The name of the PostgreSQL Logical Decoding plug-in.

STRING

Yes

Set it to `pgoutput`.

slot.name

The name of the logical decoding slot.

STRING

Yes

-   Within the same Flink job: Use a consistent `slot.name` value for all source tables.
    
-   Across different Flink jobs: Assign a unique `slot.name` value for each job to prevent errors like `PSQLException: ERROR: replication slot "debezium" is active for PID 974`.
    

debezium.\*

Controls the behavior of the Debezium client.

STRING

Yes

For example, set `'debezium.snapshot.mode' = 'never'` to disable snapshot. For more information, see [Connector properties](https://debezium.io/documentation/reference/2.6/connectors/postgresql.html#postgresql-connector-properties).

scan.incremental.snapshot.enabled

Specifies whether to enable incremental snapshot.

BOOLEAN

No

Valid values:

-   false (default)
    
-   true
    

scan.startup.mode

The startup mode for data consumption.

STRING

No

Valid values:

-   initial (default): When the connector starts for the first time, it performs a full historical data scan and then begins reading the latest Write-Ahead Logging (WAL) data.
    
-   latest-offset: The connector starts reading from the end of the WAL (latest log position) without scanning historical data.
    
-   snapshot: The connector performs a full historical data scan and reads new WAL data generated during this scan. The job stops after the full data scan is complete.
    

changelog-mode

Specifies how change events are encoded within the change stream.

STRING

No

Valid values:

-   ALL (default): Captures all historical change events, including `INSERT`, `DELETE`, `UPDATE_BEFORE`, and `UPDATE_AFTER`.
    
-   UPSERT: Captures `UPSERT` events, including `INSERT`, `DELETE`, and `UPDATE_AFTER`.
    

heartbeat.interval.ms

The interval of sending heartbeat packets, in milliseconds.

DURATION

No

Default value: 30 seconds.

The AnalyticDB for PostgreSQLCDC connector actively sends heartbeat packets to the database to ensure the slot offset continuously advances. If table data is not frequently changed, set this option to a proper value to regularly clear WAL logs and avoid disk wastage.

scan.incremental.snapshot.chunk.key-column

Specifies a chunk key column during snapshot reading.

STRING

No

Defaults to the first column of the primary key.

### **Sink-specific**

**Option**

**Description**

**Data type**

**Required**

**Default value**

**Remarks**

retryWaitTime

The interval between retries, in milliseconds.

INTEGER

No

100

batchSize

The number of data records that can be written to the table at a time.

INTEGER

No

500

N/A.

flushIntervalMs

The interval at which the cache is cleared.

INTEGER

No

N/A.

If the number of cached data records does not reach the upper limit within the specified period of time, all cached data is written to the sink table. Unit: milliseconds.

writeMode

The write mode in which the system attempts to write data to the table for the first time.

STRING

No

insert

Valid values:

-   insert: Data is directly inserted into the sink table. If a conflict occurs, the handling policy is determined by the conflictMode option. This is the default value.
    
-   upsert: Data in the table is automatically updated when a conflict occurs. This value is suitable only for tables that have a primary key.
    
-   copy: Data is inserted via the `COPY` command.
    
    **Note**
    
    Only VVR 11.1 or later supports copy.
    

conflictMode

The policy based on which a primary key conflict or index conflict is handled when data is inserted into a table.

STRING

No

strict

Valid values:

-   strict: If a conflict occurs, the system reports an error. This is the default value.
    
-   ignore: If a conflict occurs, the system ignores the conflict.
    
-   update: If a conflict occurs, the system automatically updates data. This value is suitable for tables that do not have a primary key. This policy reduces the data processing efficiency.
    
-   upsert: If a conflict occurs, the system automatically updates data in the table. This value is suitable only for tables that have a primary key.
    

### **Dimension table-specific**

**Option**

**Description**

**Data type**

**Required**

**Default value**

**Remarks**

maxJoinRows

The maximum number of rows to join in a row of data.

INTEGER

No

1024

N/A.

cache

The cache policy.

STRING

No

ALL

Valid values:

-   ALL: All data in the dimension table is cached. This is the default value. Before a deployment runs, the system loads all data in the dimension table to the cache. This way, the cache is searched for all subsequent queries in the dimension table. If the system does not find the data record in the cache, the join key does not exist. The system reloads all data in the cache after cache entries expire.
    
-   LRU: Partial data in the dimension table is cached. The system searches for data in the cache each time a data record is read from the source table. If the data is not found, the system searches for the data in the physical dimension table.
    
-   None: No data is cached.
    

cacheSize

The maximum number of rows of data that can be cached.

LONG

No

100000

The cacheSize option takes effect only when you set the cache option to LRU.

cacheTTLMs

The cache timeout period.

LONG

No

Long.MAX\_VALUE

The configuration of the cacheTTLMs option varies based on the cache option.

-   If the cache option is set to LRU, the cacheTTLMs option specifies the cache timeout period. By default, cache entries do not expire.
    
-   If you set the cache option to ALL, the cacheTTLMs option specifies the interval at which the system refreshes the cache. By default, the cache is not refreshed.
    

Unit: milliseconds.

## Data type mappings

**Data type of AnalyticDB for PostgreSQL**

**Data type of Realtime Compute for Apache Flink**

BOOLEAN

BOOLEAN

SMALLINT

INT

INT

INT

BIGINT

BIGINT

FLOAT

DOUBLE

VARCHAR

VARCHAR

TEXT

VARCHAR

TIMESTAMP

TIMESTAMP

DATE

DATE

## Sample code

-   **Source table (beta)**
    
    See [Use Flink CDC to subscribe to full and incremental data in real time](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/subscribe-to-incremental-data-in-real-time-by-using-flink-cdc-being-tested).
    
-   Sink table:
    
    ```
    CREATE TEMPORARY TABLE datagen_source (
     `name` VARCHAR,
     `age` INT
    )
    COMMENT 'datagen source table'
    WITH (
     'connector' = 'datagen'
    );
    
    CREATE TEMPORARY TABLE adbpg_sink (
     name VARCHAR,
     age INT
    ) WITH (
     'connector'='adbpg',
     'url'='jdbc:postgresql://<yourAddress>:<yourPortId>/<yourDatabaseName>',
     'tableName'='<yourDatabaseTableName>',
     'userName'='<yourDatabaseUserName>',
     'password'='<yourDatabasePassword>'
    );
    
    INSERT INTO adbpg_sink
    SELECT * FROM datagen_source;
    ```
    
-   Dimension table:
    
    ```
    CREATE TEMPORARY TABLE datagen_source(
     a INT,
     b BIGINT,
     c STRING,
     `proctime` AS PROCTIME()
    ) 
    COMMENT 'datagen source table'
    WITH (
     'connector' = 'datagen'
    };
    
    CREATE TEMPORARY TABLE adbpg_dim (
     a INT, 
     b VARCHAR, 
     c VARCHAR
    ) WITH (
     'connector'='adbpg',
     'url'='jdbc:postgresql://<yourAddress>:<yourPortId>/<yourDatabaseName>',
     'tableName'='<yourDatabaseTableName>',
     'userName'='<yourDatabaseUserName>',
     'password'='<yourDatabasePassword>'
    );
    
    CREATE TEMPORARY TABLE blackhole_sink(
     a INT,
     b STRING
    )
    COMMENT 'blackhole sink table'
    WITH (
     'connector' = 'blackhole'
    );
    
    INSERT INTO blackhole_sink SELECT T.a,H.b
    FROM datagen_source AS T JOIN adb_dim FOR SYSTEM_TIME AS OF T.proctime AS H ON T.a = H.a;
    ```
    

### **References**

-   [Use Realtime Compute for Apache Flink to read data from and write data to AnalyticDB for PostgreSQL](/help/en/flink/realtime-flink/use-cases/read-analyticdb-for-postgresql-data-by-using-realtime-compute-for-apache-flink)
    
-   [Use Realtime Compute for Apache Flink to import vector data](/help/en/analyticdb/analyticdb-for-postgresql/use-cases/use-realtime-compute-for-apache-flink-to-import-vector-data)
