This topic describes how to use the PolarDB for PostgreSQL (Compatible with Oracle) 1.0 connector.

**Important**

The PolarDB for PostgreSQL (Compatible with Oracle) 1.0 connector will be deprecated in a future release. The option for this connector will be removed from the console, and it will no longer be maintained or updated. For more information, see [Deprecation Announcement of the PolarDB for PostgreSQL (Compatible with Oracle) 1.0 Connector](/help/en/flink/realtime-flink/product-overview/eos-for-polardb-for-postgresql-compatible-with-oracle-1-0-connector). We recommend that you migrate your workloads as soon as possible to prevent service disruptions.

## Background information

[PolarDB for PostgreSQL (Compatible with Oracle)](/help/en/polardb/polardb-for-oracle/what-is-polardb-for-oracle) is a next-generation Cloud-Native Database developed by Alibaba Cloud. Built on a storage and compute separation architecture, it provides elastic, high-performance, and massively scalable, secure and reliable database services, and is highly compatible with Oracle.

The following table describes the capabilities of the PolarDB for PostgreSQL (Compatible with Oracle) 1.0 connector.

**Category**

**Description**

Supported type

Sink table

Running modes

Streaming mode and Batch mode

Data format

N/A

Connector metrics

-   For a sink table:
    
    -   numRecordsOut
        
    -   numRecordsOutPerSecond
        
    -   numBytesOut
        
    -   numBytesOutPerSecond
        
    -   currentSendTime
        

**Note**

For more information about these metrics, see [Monitoring metrics](/help/en/flink/realtime-flink/user-guide/metrics).

API type

SQL

Update and delete support

Supported

## Prerequisites

-   Create a PolarDB for PostgreSQL (Compatible with Oracle) 1.0 cluster and a table. For more information, see [Create a PolarDB for PostgreSQL (Compatible with Oracle) cluster](/help/en/polardb/polardb-for-oracle/create-a-polardb-for-oracle-cluster) and [Create a table](/help/en/polardb/polardb-for-oracle/create-a-table-2).
    
-   Configure a whitelist for the cluster. For more information, see [Configure a cluster whitelist](/help/en/polardb/polardb-for-oracle/configure-a-whitelist-for-a-cluster).
    

## Limitations

-   The PolarDB for PostgreSQL (Compatible with Oracle) 1.0 connector supports only PolarDB 1.0. It does not support PolarDB 2.0. For PolarDB 2.0, we recommend using the [JDBC](/help/en/flink/realtime-flink/developer-reference/jdbc-connector) connector.
    
-   This connector is supported only in Ververica Runtime (VVR) 8.0.5 and later.
    

## Syntax

```
CREATE TABLE polardbo_table (
 id INT,
 len INT,
 content VARCHAR,
 PRIMARY KEY(id)
) WITH (
 'connector'='polardbo',
 'url'='jdbc:postgresql://<Address>:<PortId>/<DatabaseName>',
 'tableName'='<yourDatabaseTableName>',
 'userName'='<yourDatabaseUserName>',
 'password'='<yourDatabasePassword>'
);
```

## Parameters

**Parameter**

**Description**

**Type**

**Required**

**Default**

**Remarks**

connector

The type of the connector.

String

Yes

N/A

Must be set to `polardbo`.

url

The JDBC URL of the database.

String

Yes

N/A

Format: `jdbc:postgresql://<Address>:<PortId>/<DatabaseName>`.

tableName

The name of the database table.

String

Yes

N/A

N/A

userName

The username for connecting to the database.

String

Yes

N/A

N/A

password

The password for connecting to the database.

String

Yes

N/A

To enhance security, use Project Variables instead of hardcoding credentials in plaintext. For more information, see [Variable management](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb).

maxRetryTimes

The maximum number of retries for a failed write operation.

Integer

No

3

N/A

targetSchema

The name of the schema.

String

No

public

N/A

caseSensitive

Specifies whether table and field names are case-sensitive.

String

No

false

Valid values:

-   `true`: Case-sensitive.
    
-   `false`: Case-insensitive.
    

connectionMaxActive

The maximum number of active connections in the connection pool.

Integer

No

5

The system automatically releases idle connections to the database service.

**Important**

Setting this parameter to an excessively large value may overload the server with connections.

retryWaitTime

The interval between retries.

Integer

No

100

Unit: milliseconds.

batchSize

The number of records to write in a single batch.

Integer

No

500

N/A

flushIntervalMs

The flush interval. If the number of cached records does not reach `batchSize` within this interval, the system flushes all data from the cache.

Integer

No

N/A

Unit: milliseconds.

writeMode

The write mode.

String

No

insert

Valid values:

-   `insert`: Directly inserts data. If a conflict occurs, the behavior is defined by the `conflictMode` parameter.
    
-   `upsert`: Performs an update if a conflict occurs. This mode is applicable only to tables with a Primary Key.
    

conflictMode

The policy for handling Primary Key or unique index conflicts during an `insert` operation.

String

No

strict

Valid values:

-   `strict`: Throws an error on conflict.
    
-   `ignore`: Ignores the conflicting record.
    
-   `update`: Updates the record on conflict. This can be used for a table without a Primary Key, but it has lower performance.
    

## Data type mapping

The following table maps Flink data types to PolarDB for PostgreSQL (Compatible with Oracle) 1.0 data types when the connector is used for a Sink table.

**PolarDB type**

**Flink type**

BOOLEAN

BOOLEAN

INT

INT

NUMBER

BIGINT

NUMBER

DOUBLE

VARCHAR

VARCHAR

TIMESTAMP

TIMESTAMP

VARCHAR

DATE

## Examples

-   Sink table
    
    ```
    CREATE TEMPORARY TABLE datagen_source (
     `name` VARCHAR,
     `age` INT
    )
    COMMENT 'datagen source table'
    WITH (
     'connector' = 'datagen'
    );
    
    CREATE TABLE polardbo_sink (
     name VARCHAR,
     age INT
    ) WITH (
     'connector'='polardbo',
     'url'='jdbc:postgresql://<Address>:<PortId>/<DatabaseName>',
     'tableName'='<yourDatabaseTableName>',
     'userName'='<yourDatabaseUserName>',
     'password'='<yourDatabasePassword>'
    );
    
    INSERT INTO polardbo_sink
    SELECT * FROM datagen_source;
    ```
