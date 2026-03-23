This topic describes how to use the ClickHouse connector.

## Background information

ClickHouse is a column-oriented database management system that is used for Online Analytical Processing (OLAP). For more information, see [What Is ClickHouse?](https://clickhouse.tech/docs/en/)

The following table describes the capabilities supported by the ClickHouse connector.

**Item**

**Description**

Table type

Result table

Running mode

Batch mode and streaming mode

Data format

N/A

Metric

-   numRecordsOut
    
-   numRecordsOutPerSecond
    
-   currentSendTime
    

**Note**

For more information about the metrics, see [Metrics](/help/en/flink/realtime-flink/user-guide/metrics).

API type

SQL API

Data update or deletion in a result table

If a primary key is specified in the DDL statement that is used to create a Flink result table and the ignoreDelete parameter is set to false, data in the result table can be updated or deleted. However, the data processing performance is significantly reduced.

## Features

-   For a ClickHouse distributed table, data is directly written to a ClickHouse local table that corresponds to the ClickHouse distributed table.
    
-   For a ClickHouse cluster that is deployed in Alibaba Cloud E-MapReduce (EMR), you can use the exactly-once semantics.
    

## Prerequisites

-   A ClickHouse table is created. For more information, see [Create a New table](https://clickhouse.com/docs/getting-started/quick-start#create-a-table).
    
-   A whitelist is configured for a ClickHouse cluster.
    
    -   If you use an Alibaba Cloud ApsaraDB for ClickHouse cluster, configure a whitelist by following the instructions provided in [Configure the whitelist](/help/en/clickhouse/configure-the-whitelist#task-2173712).
        
    -   If you use a ClickHouse cluster that is deployed in Alibaba Cloud EMR, configure a whitelist by following the instructions provided in [Manage security groups](/help/en/emr/manage-security-groups#concept-ass-5yn-y2b).
        
    -   If you use a self-managed ClickHouse cluster that is hosted on Elastic Compute Service (ECS) instances, configure a whitelist by following the instructions provided in [Overview](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb).
        
    -   In other cases, configure the whitelist of the machines where the ClickHouse cluster is deployed to ensure that the ClickHouse cluster can be accessed by the machine where Realtime Compute for Apache Flink is deployed.
        
    
    **Note**
    
    For more information about how to view the CIDR blocks of the vSwitch to which Realtime Compute for Apache Flink belongs, see [FAQ about workspace and namespace management and operations](/help/en/flink/realtime-flink/support/reference#section-cq0-7e4-lvk)
    

## Limits

-   The ClickHouse connector does not support the sink.parallelism parameter.
    
-   ClickHouse result tables support the at-least-once semantics.
    
-   Only Realtime Compute for Apache Flink that uses Ververica Runtime (VVR) 3.0.2 or later supports the ClickHouse connector.
    
-   Only Realtime Compute for Apache Flink that uses VVR 3.0.3 or VVR 4.0.7, or their later minor versions supports the ignoreDelete parameter in the WITH clause.
    
-   Only Realtime Compute for Apache Flink that uses VVR 4.0.10 or later supports the NESTED data type of ClickHouse.
    
-   Only Realtime Compute for Apache Flink that uses VVR 4.0.11 or later allows you to write data to a ClickHouse local table that corresponds to a ClickHouse distributed table.
    
-   Only Realtime Compute for Apache Flink that uses VVR 4.0.11 or later provides the exactly-once semantics to write data to a table of a ClickHouse cluster that is deployed in Alibaba Cloud EMR. The exactly-once semantics can no longer be used to write data to a table of a ClickHouse cluster of EMR V3.45.1, or a minor version later than EMR V5.11.1 due to the capability change of EMR ClickHouse.
    
-   You can set the writeMode parameter to balance to evenly write data to a ClickHouse local table only in Realtime Compute for Apache Flink that uses VVR 8.0.7 or later.
    
-   Only an ApsaraDB for ClickHouse Community-compatible Edition cluster allows you to write data to a ClickHouse local table.
    

## Syntax

```
CREATE TABLE clickhouse_sink (
  id INT,
  name VARCHAR,
  age BIGINT,
  rate FLOAT
) WITH (
  'connector' = 'clickhouse',
  'url' = '<yourUrl>',
  'userName' = '<yourUsername>',
  'password' = '<yourPassword>',
  'tableName' = '<yourTablename>',
  'maxRetryTimes' = '3',
  'batchSize' = '8000',
  'flushIntervalMs' = '1000'
  'ignoreDelete' = 'true',
  'shardWrite' = 'false',
  'writeMode' = 'partition',
  'shardingKey' = 'id'
);
```

## Parameters in the WITH clause

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Remarks**

connector

The type of the result table.

STRING

Yes

No default value

Set the value to clickhouse.

url

The Java Database Connectivity (JDBC) URL of ClickHouse.

STRING

Yes

No default value

You must specify a URL in the `jdbc:clickhouse://<yourNetworAddress>:<PortId>/<yourDatabaseName>` format. If you want to directly write data to a ClickHouse local table, you can execute the `select * from system.clusters` statement to obtain the IP address of the node on which data is written to the ClickHouse local table. If you do not specify the database name, the database named default is used.

**Note**

If you want to write data to a ClickHouse distributed table, you must specify the URL to the JDBC URL of the node to which the ClickHouse distributed table belongs.

userName

The username that is used to access ClickHouse.

STRING

Yes

No default value

N/A.

password

The password that is used to access ClickHouse.

STRING

Yes

No default value

N/A.

tableName

The name of the ClickHouse table.

STRING

Yes

No default value

N/A.

maxRetryTimes

The maximum number of retries for writing data to the result table.

INT

No

3

N/A.

batchSize

The number of data records that can be written at a time.

INT

No

100

If the number of data records in the cache reaches the value of the batchSize parameter or the interval at which the cache is cleared is greater than the value of the flushIntervalMs parameter, the system automatically writes the cached data to the ClickHouse table.

flushIntervalMs

The interval at which the cache is cleared.

LONG

No

1000

Unit: milliseconds.

ignoreDelete

Specifies whether to ignore the delete messages.

BOOLEAN

No

true

Valid values:

-   true: The delete messages are ignored. This is the default value.
    
-   false: The delete messages are not ignored.
    
    If you set this parameter to false and specify a primary key in the DDL statement, the system executes the ALTER statement to delete data from the ClickHouse table.
    

**Note**

If you set the ignoreDelete parameter to false, data cannot be written to a ClickHouse local table that corresponds to the ClickHouse distributed table in partition write mode. In this case, you cannot set the writeMode parameter to partition.

shardWrite

Specifies whether to directly write data to a ClickHouse local table if the current table is a ClickHouse distributed table.

BOOLEAN

No

false

Valid values:

-   false: The system writes data to the ClickHouse distributed table and then to a ClickHouse local table that corresponds to the ClickHouse distributed table. This is the default value. In this case, if you set the shardWrite parameter to false, you must set the tableName parameter to the name of the ClickHouse distributed table.
    
-   true: The system skips the ClickHouse distributed table and directly writes data to a ClickHouse local table that corresponds to the ClickHouse distributed table.
    
    If you want to increase the throughput for writing data to the ClickHouse distributed table, we recommend that you set this parameter to true.
    
    -   If you want to manually specify the nodes on which data is written to the ClickHouse local tables in the url parameter, you must set the tableName parameter to the names of the ClickHouse local tables. Example:
        
        ```
        'url' = 'jdbc:clickhouse://192.XX.XX.1:3002,192.XX.XX.2:3002/default'
        'tableName' = 'local_table'
        ```
        
    -   If you do not want to manually specify the nodes on which data is written to the ClickHouse local tables in the url parameter, you can configure the inferLocalTable parameter together with the shardWrite parameter to allow Realtime Compute for Apache Flink to automatically infer the nodes of the ClickHouse local tables. In this case, you must set the tableName parameter to the name of the ClickHouse distributed table and the url parameter to the JDBC URL of the node to which the ClickHouse distributed table belongs. Example:
        
        ```
        'url' = 'jdbc:clickhouse://192.XX.XX.1:3002/default' // Set the url parameter to the JDBC URL of the node to which the ClickHouse distributed table belongs.
        'tableName' = 'distribute_table'
        ```
        

inferLocalTable

Specifies whether to automatically infer the information about the ClickHouse local tables that correspond to a ClickHouse distributed table if you want to write data to the ClickHouse distributed table and directly write data to the ClickHouse local tables.

BOOLEAN

No

false

Valid values:

-   false: If you want to write data to a ClickHouse distributed table and specify only one node in the url parameter, the system does not automatically infer the information about the ClickHouse local tables that correspond to the ClickHouse distributed table. The system writes data to the ClickHouse distributed table and then to the ClickHouse local tables. This is the default value.
    
-   true: The system automatically infers the information about the ClickHouse local tables that correspond to the ClickHouse distributed table and directly writes data to the ClickHouse local tables. In this case, if you set the inferLocalTable parameter to true, you must set the shardWrite parameter to true, the tableName parameter to the name of the ClickHouse distributed table, and the url parameter to the JDBC URL of the node to which the ClickHouse distributed table belongs.
    

**Note**

If you want to write data to a ClickHouse non-distributed table, you do not need to configure this parameter.

writeMode

The policy based on which data is written to a ClickHouse local table.

ENUM

No

default

Valid values:

-   default: Data is written to the ClickHouse local table on the first node of the ClickHouse cluster. This is the default value.
    
-   partition: Data with the same key is written to the same ClickHouse local table on a specific node.
    
-   random: Data is randomly written to the ClickHouse local table on a node.
    
-   balance: The round-robin algorithm is used to evenly write data to the ClickHouse local table on a node.
    

**Note**

If you set the writeMode parameter to partition, make sure that the ignoreDelete parameter is set to true.

shardingKey

The key based on which data is written to the same ClickHouse local table on a specific node.

default

No

No default value

If you set the writeMode parameter to partition, you must configure the shardingKey parameter. The value of the shardingKey parameter can contain multiple fields. Separate multiple fields with commas (,).

exactlyOnce

Specifies whether to use the exactly-once semantics.

BOOLEAN

No

false

Valid values:

-   true: The exactly-once semantics is used.
    
-   false: The exactly-once semantics is not used. This is the default value.
    

**Note**

-   You can use the exactly-once semantics to write data only to a ClickHouse cluster that is deployed in Alibaba Cloud EMR. Therefore, you can set this parameter to true only if you want to write data to a ClickHouse cluster that is deployed in Alibaba Cloud EMR.
    
-   If you set the writeMode parameter to partition and you want to write data to a ClickHouse local table, you cannot use the exactly-once semantics. Therefore, if you set the exactlyOnce parameter to true, you cannot set the writeMode parameter to partition.
    

## Data type mappings

**Data type of Realtime Compute for Apache Flink**

**Data type of ClickHouse**

BOOLEAN

UInt8 / Boolean

**Note**

ClickHouse V21.12 and later support the BOOLEAN data type. If the version of ClickHouse that you use is earlier than V21.12, the BOOLEAN data type of Realtime Compute for Apache Flink corresponds to the UINT8 data type of ClickHouse.

TINYINT

Int8

SMALLINT

Int16

INTEGER

Int32

BIGINT

Int64

BIGINT

UInt32

FLOAT

Float32

DOUBLE

Float64

CHAR

FixedString

VARCHAR

STRING

BINARY

FixedString

VARBINARY

STRING

DATE

Date

TIMESTAMP(0)

DateTime

TIMESTAMP(x)

Datetime64(x)

DECIMAL

DECIMAL

ARRAY

ARRAY

Nested

**Note**

ClickHouse does not support the following data types of Realtime Compute for Apache Flink: TIME, MAP, MULTISET, and ROW.

To use the NESTED data type of ClickHouse, you must map this data type to the ARRAY data type of Realtime Compute for Apache Flink. Sample code:

```
-- ClickHouse
CREATE TABLE visits (
  StartDate Date,
  Goals Nested
  (
    ID UInt32,
    OrderID String
  )
  ...
);
```

Map the NESTED data type of ClickHouse to the ARRAY data type of Realtime Compute for Apache Flink.

```
-- Flink
CREATE TABLE visits (
  StartDate DATE,
  `Goals.ID` ARRAY<LONG>,
  `Goals.OrderID` ARRAY<STRING>
);
```

**Note**

The DATETIME data type of ClickHouse can be accurate to the second, and the DATETIME64 data type can be accurate to the nanosecond. For Realtime Compute for Apache Flink that uses VVR of a version earlier than 6.0.6, when the JDBC driver provided by ClickHouse writes data of the DATETIME64 data type, a precision loss occurs and the data can be accurate only to the second. Therefore, Realtime Compute for Apache Flink can write data of the TIMESTAMP data type only in seconds. The value is displayed in the TIMESTAMP(0) format. For Realtime Compute for Apache Flink that uses VVR 6.0.6 or later, the precision loss issue is resolved. Realtime Compute for Apache Flink can write data of the DATETIME64 data type as expected.

## Examples

-   Example 1: Data is written to a ClickHouse local table on a node.
    
    ```
    CREATE TEMPORARY TABLE clickhouse_source (
      id INT,
      name VARCHAR,
      age BIGINT,
      rate FLOAT
    ) WITH (
      'connector' = 'datagen',
      'rows-per-second' = '50'
    );
    
    CREATE TEMPORARY TABLE clickhouse_output (
      id INT,
      name VARCHAR,
      age BIGINT,
      rate FLOAT
    ) WITH (
      'connector' = 'clickhouse',
      'url' = '<yourUrl>',
      'userName' = '<yourUsername>',
      'password' = '<yourPassword>',
      'tableName' = '<yourTablename>'
    );
    
    INSERT INTO clickhouse_output
    SELECT
      id,
      name,
      age,
      rate
    FROM clickhouse_source;
    ```
    
-   Example 2: Data is written to the ClickHouse distributed table.
    
    Three ClickHouse local tables named local\_table\_test exist on the 192.XX.XX.1, 192.XX.XX.2, and 192.XX.XX.3 nodes. A ClickHouse distributed table named distributed\_table\_test is created based on the ClickHouse local tables.
    
    -   If you want to directly write data that has the same key to the same ClickHouse local table on a specific node, execute the following statements:
        
        ```
        CREATE TEMPORARY TABLE clickhouse_source (
          id INT,
          name VARCHAR,
          age BIGINT,
          rate FLOAT
        ) WITH (
          'connector' = 'datagen',
          'rows-per-second' = '50'
        );
        
        CREATE TEMPORARY TABLE clickhouse_output (
          id INT,
          name VARCHAR,
          age BIGINT,
          rate FLOAT
        ) WITH (
          'connector' = 'clickhouse',
          'url' = 'jdbc:clickhouse://192.XX.XX.1:3002,192.XX.XX.2:3002,192.XX.XX.3:3002/default',
          'userName' = '<yourUsername>',
          'password' = '<yourPassword>',
          'tableName' = 'local_table_test',
          'shardWrite' = 'true',
          'writeMode' = 'partition',
          'shardingKey' = 'name'
        );
        
        INSERT INTO clickhouse_output
        SELECT
          id,
          name,
          age,
          rate
        FROM clickhouse_source;
        ```
        
    -   If you do not want to manually specify the nodes on which data is written to the ClickHouse local tables in the url parameter, execute the following statements to allow the system to automatically infer the nodes of the ClickHouse local tables:
        
        ```
        CREATE TEMPORARY TABLE clickhouse_source (
          id INT,
          name VARCHAR,
          age BIGINT,
          rate FLOAT
        ) WITH (
          'connector' = 'datagen',
          'rows-per-second' = '50'
        );
        
        CREATE TEMPORARY TABLE clickhouse_output (
          id INT,
          name VARCHAR,
          age BIGINT,
          rate FLOAT
        ) WITH (
          'connector' = 'clickhouse',
          'url' = 'jdbc:clickhouse://192.XX.XX.1:3002/default', -- Set the url parameter to the JDBC URL of the node to which the ClickHouse distributed table belongs. 
          'userName' = '<yourUsername>',
          'password' = '<yourPassword>',
          'tableName' = 'distributed_table_test', -- Set the tableName parameter to the name of the ClickHouse distributed table. 
          'shardWrite' = 'true',
          'inferLocalTable' = 'true', -- Set the inferLocalTable parameter to true. 
          'writeMode' = 'partition',
          'shardingKey' = 'name'
        );
        
        INSERT INTO clickhouse_output
        SELECT
          id,
          name,
          age,
          rate
        FROM clickhouse_source;
        ```
        

## FAQ

-   [Can I retract the updated data from an ApsaraDB for ClickHouse result table?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-y9z-xyr-xby)
    
-   [When can I view the data that is written to a ClickHouse sink table in the ClickHouse console?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-j29-g8y-flk)
