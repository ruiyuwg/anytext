This topic describes how to use the Milvus connector.

## Overview

Milvus is a highly scalable vector database designed to handle large-scale unstructured data, such as images, text, and audio. It supports efficient similarity search, making it ideal for use cases such as recommendation systems, image retrieval, and semantic search. The Milvus connector supports the following capabilities:

**Category**

**Details**

Supported types

Sink table, vector table

Running mode

Streaming

Data format

None

Specific monitoring metrics

None

API type

SQL

Supports update/delete

Yes

## Features

The Milvus connector tightly integrates Apache Flink with the Milvus vector database to create a high-performance, reliable data pipeline for real-time vector search scenarios. Key features of the Milvus connector include:

-   **High-concurrency writes**: Supports configurable sink parallelism.
    
-   **Automatic retry**: Retries failed operations to improve stability.
    
-   **Batched buffering**: Improves write performance by batching records before they are flushed.
    
-   **At-least-once semantics**: Ensures eventual consistency through idempotent updates based on the primary key.
    
-   **Vector search:** Enables real-time vector similarity searches directly within Flink SQL.
    

## Prerequisites

-   You have created a Milvus cluster. For more information, see [Quickly Create a Milvus Instance](/help/en/milvus/getting-started/quickly-create-a-milvus-instance).
    
-   You have created a Milvus collection. If you plan to write to a specific partition, ensure that the Milvus partition already exists.
    

## Limitations

-   Writing to a sink table requires Ververica Runtime (VVR) 11.1 or later.
    
-   Querying a vector table requires VVR 11.3 or later.
    
-   Only [Milvus 2.4.x](https://milvus.io/docs/v2.4.x) is supported.
    
-   The Milvus connector only supports at-least-once semantics.
    

## **Syntax**

```
CREATE TEMPORARY TABLE milvus_sink (
  id BIGINT,
  f1 STRING,
  f2 BOOLEAN,
  f3 TINYINT,
  f4 SMALLINT,
  f5 INTEGER,
  f6 DATE,
  f7 TIME(3),
  f8 TIMESTAMP_LTZ(3),
  f9 TIMESTAMP(3),
  f10 FLOAT,
  f11 DOUBLE,
  f12 DECIMAL(10, 2),
  f13 ARRAY<FLOAT>,
  f14 ARRAY<DOUBLE>,
  f15 ARRAY<INTEGER>,
  f16 ARRAY<BIGINT>,
  PRIMARY KEY (id) NOT ENFORCED  -- Required. Milvus supports only BIGINT or STRING as the primary key.
) WITH (
  'connector'='milvus',
  'endpoint'='<yourEndpoint>',
  'port'='<yourPort>',
  'userName'='<yourUserName>',
  'password'='<yourPassword>',
  'databaseName'='<yourDatabaseName>',
  'collectionName'='<yourCollectionName>'
);
```

## **Connector options**

### **General**

**Option**

**Description**

**Data type**

**Required**

**Default value**

**Notes**

connector

The name of the connector.

String

Yes

Set it to `milvus`.

endpoint

The endpoint (IP address or domain name) of the Milvus database.

String

Yes

See [Network access and security settings](/help/en/milvus/user-guide/network-access-and-security-settings).

port

The port number of the Milvus database.

INTEGER

No

`19530`

username

The username for the Milvus database.

STRING

Yes

None.

password

The password for the Milvus database.

STRING

Yes

databaseName

The name of the Milvus database.

STRING

Yes

collectionName

The name of the Milvus collection.

STRING

Yes

partitionName

The name of the partition to write to.

STRING

No

`_default`

partitionKey.enabled

Specifies whether the collection uses a scalar field as the partition key.

BOOLEAN

No

`false`

maxRetries

The number of retries for failed operations.

INTEGER

No

`3`

None.

### **Sink-specific**

**Option**

**Description**

**Data type**

**Required**

**Default value**

**Notes**

sink.parallelism

The parallelism for the sink operator.

INTEGER

No

If not set, the parallelism is inherited from the upstream operator.

sink.maxRetries

The maximum number of retries upon a failed write.

INTEGER

No

`3`

In VVR 11.3 and later, this option is deprecated. Use `maxRetries` instead.

sink.buffer-flush.max-rows

The maximum number of records to buffer (including appends, upserts, and deletes). A flush is triggered when this count is reached.

INTEGER

No

`10000`

Set to `0` to disable this trigger.

sink.buffer-flush.interval

The time interval in milliseconds (ms) for flushing buffered records. A flush is triggered when this interval is exceeded.

INTEGER

No

`1000`

Set to `0` to disable time-based flushing.

sink.ignoreDelete

Specifies whether to ignore delete operations.

BOOLEAN

No

`false`

Valid values:

-   true: Ignores delete operations.
    
-   false: Processes delete operations.
    

### **Vector table-specific**

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Notes**

search.metric

The metric used to measure vector similarity.

String

No

`L2`

For information about supported similarity metrics, see the [Milvus documentation](https://milvus.io/docs/v2.4.x/metric.md?tab=floating). Milvus v2.4 currently supports the following metrics:

-   `L2`: Euclidean distance
    
-   `IP`: Inner product
    
-   `COSINE`: Cosine similarity
    

## **Type mapping**

**Flink SQL type**

**Milvus type**

STRING

VarChar(n)

BOOLEAN

Bool

TINYINT

Int8

SMALLINT

Int16

INTEGER

Int32

BIGINT

Int64

DATE

VarChar(n)

TIME(3)

VarChar(n)

TIMESTAMP\_LTZ(3)

Int64

**Note**

Stored as the epoch time in milliseconds.

TIMESTAMP(3)

VarChar(n)

FLOAT

Float

DOUBLE

Double

DECIMAL(10, 2)

VarChar(n)

ARRAY<FLOAT>

FloatVector

**Note**

After creating a Milvus collection, create an index for the vector field.

ARRAY<DOUBLE>

Array<Double>\[m\]

ARRAY<INTEGER>

Array<Int32>\[m\]

ARRAY<BIGINT>

Array<Int64>\[m\]

## Examples

-   Write streaming data to Milvus
    

```
-- Create a mock data source that generates 100 rows per second. simulated streaming data.
CREATE TEMPORARY TABLE mock_source (
    id STRING,
    vector ARRAY<FLOAT>,       -- Vector passed as a FLOAT array.
    event_time AS PROCTIME() -- Processing time attribute.
) WITH (
    'connector' = 'datagen',
    'rows-per-second' = '100',  -- Generates 100 rows per second.
    'fields.id.kind' = 'sequence',
    'fields.id.start' = '1',
    'fields.id.end' = '1000'
);

CREATE TEMPORARY TABLE milvus_sink (
  id STRING,               -- Unique identifier, such as a device ID.
  vector ARRAY<FLOAT>,     -- Vector data. The array length must be consistent with the source.
  timestamp BIGINT         -- Timestamp for stream processing.
  PRIMARY KEY (id) NOT ENFORCED  -- Required. Milvus supports only BIGINT or STRING as the primary key.
) WITH (
  'connector'='milvus',
  'endpoint'='xxx',
  'port'='19530',
  'userName'='xxx',
  'password'='xxx',
  'databaseName'='xxxx',
  'collectionName'='xxxx'
);

-- Transform data and write to Milvus.
INSERT INTO milvus_sink
SELECT 
    id,
    vector,
    UNIX_TIMESTAMP() * 1000 AS timestamp  -- Current timestamp in milliseconds.
FROM mock_source;
```

-   Perform a vector search
    

```
CREATE TEMPORARY TABLE milvus_table (
  id STRING,               -- Unique identifier.
  vector ARRAY<FLOAT>,     -- Vector data. The array length must be consistent with the source.
  PRIMARY KEY (id) NOT ENFORCED  -- Required. Milvus only supports BIGINT or STRING as the primary key.
) WITH (
  'connector'='milvus',
  'endpoint'='xxx',
  'port'='19530',
  'userName'='xxx',
  'password'='xxx',
  'databaseName'='xxxx',
  'collectionName'='xxxx'
);
-- Find the top 2 most similar items for the vector [1.1, 2.2, 3.3].
SELECT * FROM 
LATERAL TABLE(
  VECTOR_SEARCH(
    TABLE milvus_table, 
    DESCRIPTOR(vector), 
    ARRAY[1.1, 2.2, 3.3], 
    2));
```

Note: The Milvus collection must be loaded into memory before running the query. For more information, see the Milvus documentation on [Load a collection](https://milvus.io/docs/v2.4.x/manage-collections.md#Load--Release-Collection).
