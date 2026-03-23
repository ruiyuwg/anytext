This topic describes how to use the MongoDB connector.

## **Background information**

MongoDB is a document-oriented database that stores unstructured data and simplifies application development and scaling. The MongoDB connector supports the following capabilities:

**Category**

**Description**

Supported types

Source, dimension, sink, and data ingestion tables

Running mode

Streaming mode only

Monitoring metrics

**Metrics**

-   Source tables
    
    -   numBytesIn
        
    -   numBytesInPerSecond
        
    -   numRecordsIn
        
    -   numRecordsInPerSecond
        
    -   numRecordsInErrors
        
    -   currentFetchEventTimeLag
        
    -   currentEmitEventTimeLag
        
    -   watermarkLag
        
    -   sourceIdleTime
        
-   Dimension and sink tables: none
    

**Note**

For more information about the metrics, see [Monitoring metrics](/help/en/flink/realtime-flink/user-guide/metrics).

API type

DataStream, SQL, and data ingestion YAML

Support for updating or deleting sink table data

Yes

## **Features**

A MongoDB Change Data Capture (CDC) source table captures full and incremental data using the Change Stream API. It **first reads historical data in a full snapshot and then seamlessly switches to reading incremental data from the oplog**. This process provides **exactly-once semantics**, which ensures that there are **no duplicate or omitted records** and guarantees data consistency during fault recovery.

-   **Based on the Change Stream API**
    
    The connector uses the [Change Stream API](https://www.mongodb.com/docs/manual/changeStreams/) introduced in MongoDB 3.6 to efficiently capture insert, update, replace, and delete events from databases and collections. These events are converted into changelog streams that Flink can process.
    
-   **Seamless full and incremental data capture**
    
    The connector automatically reads the initial snapshot and then transitions to incremental mode without manual intervention.
    
-   **Parallel snapshot reading**
    
    The connector reads historical data in parallel to improve performance. This requires MongoDB 4.0 or later.
    
-   **Multiple startup modes**
    
    -   `initial`: Performs a full snapshot when the job starts for the first time, and then reads the oplog for incremental changes.
        
    -   `latest-offset`: Starts reading from the latest position of the oplog and does not read historical data.
        
    -   `timestamp`: Reads oplog events starting from a specified timestamp, skipping the snapshot. This requires MongoDB 4.0 or later.
        
-   **Full Changelog support**
    
    Outputs complete changelog events that include the state of the data both before and after a change. This requires MongoDB 6.0 or later and the [preimage and postimage recording feature](#31f7aafb3d5eu).
    

#### **Flink integration enhancements**

-   **VVR 8.0.6 and later**
    
    You can synchronize MongoDB data and schema changes to downstream tables using the [CREATE TABLE AS (CTAS)](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement) or [CREATE DATABASE AS (CDAS)](/help/en/flink/realtime-flink/developer-reference/create-database-as-statement) statement. This requires the [preimage and postimage recording feature](#31f7aafb3d5eu).
    
-   **VVR 8.0.9 and later**
    
    The dimension table join capability is extended to support reading the built-in `_id` field of the ObjectId type.
    

## **Prerequisites**

-   **MongoDB instance requirements**
    
    -   The connector supports only Alibaba Cloud MongoDB (replica set or sharded cluster) or self-managed MongoDB version 3.6 or later.
        
    -   You must enable the replica set feature for the MongoDB database that you want to monitor. For more information, see [Replication](https://www.mongodb.com/docs/manual/replication/).
        
-   **MongoDB feature dependencies**
    
    -   To use the Full Changelog event stream feature, you must enable the [preimage and postimage recording feature](#31f7aafb3d5eu).
        
    -   If MongoDB authentication is enabled, your MongoDB user must have the following database permissions:
        
        **Required permissions**
        
        -   splitVector permission
            
        -   listDatabases permission
            
        -   listCollections permission
            
        -   collStats permission
            
        -   Find permissions
            
        -   changeStream Permissions
            
        -   Access to the config.collections and config.chunks collections
            
        
-   **MongoDB network and other preparations**
    
    -   An IP address whitelist has been configured to allow Flink to access MongoDB.
        
    -   You have created the target MongoDB database and table.
        

## **Limits**

-   CDC source tables
    
    -   Parallel reading during the initial snapshot phase is supported only for MongoDB 4.0 and later. To enable this feature, set the `scan.incremental.snapshot.enabled` configuration option to `true`.
        
    -   You cannot read data from the admin, local, or config databases, or from system collections. This is due to the subscription limits of MongoDB Change Streams. For more information, see the [MongoDB documentation](https://www.mongodb.com/docs/manual/changeStreams/#watch-a-collection--database--or-deployment).
        
-   Sink tables
    
    -   In Realtime Compute for Apache Flink that uses a VVR version earlier than 8.0.5, you can only insert data into sink tables.
        
    -   In Realtime Compute for Apache Flink that uses VVR 8.0.5 or later, you can insert, update, and delete data if you declare a primary key in the DDL statement used to create the sink table. If no primary key is declared, you can only insert data.
        
-   Dimension tables
    
    -   MongoDB dimension tables are supported in Realtime Compute for Apache Flink that uses VVR 8.0.5 or later.
        

## SQL

### **Syntax**

```
CREATE TABLE tableName(
  _id STRING,
  [columnName dataType,]*
  PRIMARY KEY(_id) NOT ENFORCED
) WITH (
  'connector' = 'mongodb',
  'hosts' = 'localhost:27017',
  'username' = 'mongouser',
  'password' = '${secret_values.password}',
  'database' = 'testdb',
  'collection' = 'testcoll'
)
```

**Note**

When you create a CDC source table, you must declare the `_id STRING` column and specify it as the primary key.

### **WITH Parameter**

#### **General**

**Parameter**

**Description**

**Type**

**Required?**

**Default value**

**Remarks**

connector

The name of the connector.

String

Yes

None

-   Source tables:
    
    -   VVR 8.0.4 or earlier: Set this option to mongodb-cdc.
        
    -   VVR 8.0.5 or later: Set this option to mongodb or mongodb-cdc.
        
-   Dimension or sink tables: Set this option to mongodb.
    

uri

The uniform resource identifier (URI) used to connect to the MongoDB database.

String

No

No default value

**Note**

You must specify either the `uri` or `hosts` option. If you specify the `uri` option, do not specify `scheme`, `hosts`, `username`, `password`, or `connector.options`. If you specify both options, the URI specified by `uri` is used.

hosts

The hostname of the MongoDB database server.

String

No

None

Separate multiple hostnames with commas (`,`).

scheme

The connection protocol used to access the MongoDB database.

String

No

mongodb

Valid values:

-   `mongodb`: Use the default MongoDB protocol.
    
-   `mongodb+srv`: Use DNS SRV record protocol.
    

username

The username used to connect to MongoDB.

String

No

No default value

This parameter is required if the identity verification feature is enabled.

password

The password used to connect to MongoDB.

String

No

No default value

You must configure this parameter if you enable the identity verification feature.

**Important**

To prevent password leaks, use [variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb) instead of hardcoding credentials.

database

The name of the MongoDB database.

String

No

No default value

-   For source tables, the database name supports regular expression matching.
    
-   If you do not specify this option, all databases are monitored.
    

**Important**

You cannot monitor data in the admin, local, and config databases.

collection

The name of the MongoDB collection.

String

No

No default value

-   For source tables, the collection name supports regular expression matching.
    
    **Important**
    
    If the collection name contains regular expression special characters, provide the fully qualified namespace (database name.collection name). Otherwise, changes to the collection cannot be captured.
    
-   If you do not specify this option, all collections are monitored.
    

**Important**

You cannot monitor data in system collections.

connection.options

Additional connection options for MongoDB.

String

No

No default value

Specify additional options as key-value pairs (`&`\-separated `key=value`). For example: connectTimeoutMS=12000&socketTimeoutMS=13000.

**Important**

By default, MongoDB CDC does not set socket connection timeout. This may cause long interruptions during network jitter.

We recommend setting socketTimeoutMS to a reasonable value here to avoid this issue.

#### **Source-specific**

**Parameters**

**Description**

**Type**

**Required?**

**Default value**

**Remarks**

scan.startup.mode

The startup mode of the MongoDB CDC connector.

String

No

initial

Valid values:

-   initial: Pulls all data from the initial offset.
    
-   latest-offset: Pulls change data from the current offset.
    
-   timestamp: Pulls change data from a specific timestamp.
    

For more information, see [Startup Properties](https://www.mongodb.com/docs/kafka-connector/current/source-connector/configuration-properties/startup/).

scan.startup.timestamp-millis

The start timestamp for consumption at the specified offset.

Long

Depends on the value of scan.startup.mode:

-   initial: No
    
-   latest-offset: No
    
-   timestamp: Yes
    

None

The value is the number of milliseconds since the UNIX epoch (00:00:00 UTC on January 1, 1970).

Applies only to the `timestamp` startup mode.

initial.snapshotting.queue.size

The maximum queue size for the initial snapshot phase.

Integer

No

10240

Takes effect only when `scan.startup.mode` is set to `initial`.

batch.size

The batch processing size of the cursor.

Integer

No

1024

N/A.

poll.max.batch.size

The maximum number of change documents processed in a single batch.

Integer

No

1024

This option controls the maximum number of change documents pulled at a time during stream processing. A larger value allocates a larger internal buffer in the connector.

poll.await.time.ms

The interval between data pulls.

Integer

No

1000

Unit: milliseconds.

heartbeat.interval.ms

The interval at which heartbeat packets are sent.

Integer

No

0

Unit: milliseconds.

The MongoDB CDC connector sends heartbeat packets to the database to ensure the latest backtracking status. Setting this to 0 disables heartbeat packets.

**Important**

We **strongly recommend** setting this option for infrequently updated collections.

scan.incremental.snapshot.enabled

Enables parallel reading during the initial snapshot phase.

Boolean

No

false

This is an experimental feature.

scan.incremental.snapshot.chunk.size.mb

The shard size when parallel snapshot reading is enabled.

Integer

No

64

This is an experimental feature.

Unit: MB.

Takes effect only when parallel snapshot reading is enabled.

scan.full-changelog

Generates a complete full changelog event stream.

Boolean

No

false

This is an experimental feature.

**Note**

Requires MongoDB 6.0 or later with preimage and postimage features enabled. For instructions, see [Document Preimages](https://www.mongodb.com/docs/atlas/app-services/mongodb/preimages/).

scan.flatten-nested-columns.enabled

Parses fields separated by `.` as nested BSON document fields.

Boolean

No

false

If enabled, the `col` field in the following BSON document is named `nested.col` in the schema.

```
{"nested":{"col":true}}
```

**Note**

Supported only in VVR 8.0.5 or later.

scan.primitive-as-string

Parses all primitive types in BSON documents as STRING.

Boolean

No

false

**Note**

Supported only in VVR 8.0.5 or later.

scan.ignore-delete.enabled

Whether to ignore delete (-D) messages.

Boolean

No

false

During archiving of MongoDB source data, many DELETE events may appear in the OpLog. Enable this option to ignore those events and prevent them from syncing downstream.

**Note**

-   Supported only in VVR 11.1 or later.
    
-   All DELETE events—not just those from archiving—are ignored.
    

scan.incremental.snapshot.backfill.skip

Skips watermark backfilling during incremental snapshot reading.

Boolean

No

false

Enabling this option provides only at-least-once semantics.

**Note**

Supported only in VVR 11.1 or later.

initial.snapshotting.pipeline

MongoDB pipeline operations pushed down to MongoDB during snapshot reading to filter only required data and improve efficiency.

String

No

None.

-   Specify as a JSON array of objects. For example: \[{"$match": {"closed": "false"}}\] copies only documents where the closed field equals "false".
    
-   This option takes effect only when scan.startup.mode is set to initial, and only works in Debezium mode to prevent semantic inconsistency.
    
    **Note**
    
    Supported only in VVR 11.1 or later.
    

initial.snapshotting.max.threads

The number of threads used for data replication.

Integer

No

None.

Takes effect only when scan.startup.mode is set to initial.

**Note**

Supported only in VVR 11.1 or later.

initial.snapshotting.queue.size

The queue size for the initial snapshot.

Integer

No

16000

Takes effect only when scan.startup.mode is set to initial.

**Note**

Supported only in VVR 11.1 or later.

scan.change-stream.reading.parallelism

The parallelism for subscribing to the Change Stream.

Integer

No

1

Takes effect only when scan.incremental.snapshot.enabled is enabled.

**Important**

To subscribe to the Change Stream with multiple concurrent readers, also set heartbeat.interval.ms.

**Note**

Supported only in VVR 11.2 or later.

scan.change-stream.reading.queue-size

The message queue size for concurrent Change Stream subscriptions.

Integer

No

16384

Takes effect only when scan.change-stream.reading.parallelism is enabled.

**Note**

Supported only in VVR 11.2 or later.

#### **Dimension table-specific**

**Parameters**

**Description**

**Data type**

**Required?**

**Default value**

**Remarks**

lookup.cache

The cache policy.

String

No

NONE

Supported policies:

-   None: No caching.
    
-   Partial: Cache only data looked up from external databases.
    

lookup.max-retries

The maximum number of retries allowed when querying the database fails.

Integer

No

3

N/A.

lookup.retry.interval

The interval between retries when querying the database fails.

Duration

No

1s

N/A.

lookup.partial-cache.expire-after-access

The maximum time records remain in the cache after being accessed.

Duration

No

None

Supported units: ms, s, min, h, d.

Requires `lookup.cache` to be set to `PARTIAL`.

lookup.partial-cache.expire-after-write

The maximum time records remain in the cache after being written.

Duration

No

None

Requires `lookup.cache` to be set to `PARTIAL`.

lookup.partial-cache.max-rows

The maximum number of rows cached. When exceeded, the oldest rows expire.

Long

No

None

Requires `lookup.cache` to be set to `PARTIAL`.

lookup.partial-cache.cache-missing-key

Caches empty records when no data is associated with the physical table.

Boolean

No

True

Requires `lookup.cache` to be set to `PARTIAL`.

#### **Sink-specific**

**Parameters**

**Description**

**Type**

**Required?**

**Default value**

**Remarks**

sink.buffer-flush.max-rows

The maximum number of records written per batch.

Integer

No

1000

N/A.

sink.buffer-flush.interval

The interval at which data is flushed.

Duration

No

1s

N/A.

sink.delivery-guarantee

Semantic guarantees for data writes.

String

No

at-least-once

Valid values:

-   none
    
-   at-least-once
    

**Note**

Exactly-once is not supported.

sink.max-retries

The maximum number of retries allowed when writing data to the database fails.

Integer

No

3

N/A.

sink.retry.interval

The interval between retries when writing data to the database fails.

Duration

No

1s

N/A.

sink.parallelism

The custom degree of parallelism for the sink.

Integer

No

empty

N/A.

sink.delete-strategy

Specifies how to handle -D and -U data events.

String

No

CHANGELOG\_STANDARD

Valid values:

-   CHANGELOG\_STANDARD: Standard mode. Applies -U and -D events normally downstream.
    
-   IGNORE\_DELETE: Ignores only -D events but overwrites entire rows on updates.
    
-   PARTIAL\_UPDATE: Ignores -U events to support partial column updates. Deletes entire rows on -D events.
    
-   IGNORE\_ALL: Ignores both -U and -D events.
    

### **Data type mappings**

#### **CDC source tables**

**BSON type**

**Flink SQL type**

Int32

INT

Int64

BIGINT

Double

DOUBLE

Decimal128

DECIMAL(p, s)

Boolean

BOOLEAN

Date Timestamp

DATE

Date Timestamp

TIME

DateTime

TIMESTAMP(3)

TIMESTAMP\_LTZ(3)

Timestamp

TIMESTAMP(0)

TIMESTAMP\_LTZ(0)

String

ObjectId

UUID

Symbol

MD5

JavaScript

Regex

STRING

Binary

BYTES

Object

ROW

Array

ARRAY

DBPointer

ROW<$ref STRING, $id STRING>

GeoJSON

Point: ROW<type STRING, coordinates ARRAY<DOUBLE>>

Line: ROW<type STRING, coordinates ARRAY<ARRAY< DOUBLE>>>

#### **Dimension and sink tables**

**BSON type**

**Flink SQL type**

Int32

INT

Int64

BIGINT

Double

DOUBLE

Decimal128

DECIMAL

Boolean

BOOLEAN

DateTime

TIMESTAMP\_LTZ(3)

Timestamp

TIMESTAMP\_LTZ(0)

String

ObjectId

STRING

Binary

BYTES

Object

ROW

Array

ARRAY

### **Usage Example**

### **CDC source table**

```
CREATE TEMPORARY TABLE mongo_source (
  `_id` STRING, --must be declared
  name STRING,
  weight DECIMAL,
  tags ARRAY<STRING>,
  price ROW<amount DECIMAL, currency STRING>,
  suppliers ARRAY<ROW<name STRING, address STRING>>,
  db_name STRING METADATA FROM 'database_name' VIRTUAL,
  collection_name STRING METADATA VIRTUAL,
  op_ts TIMESTAMP_LTZ(3) METADATA VIRTUAL,
  PRIMARY KEY(_id) NOT ENFORCED
) WITH (
  'connector' = 'mongodb',
  'hosts' = 'dds-bp169b982fc25****.mongodb.rds.aliyuncs.com:3717,dds-bp169b982fc25****.mongodb.rds.aliyuncs.com:3717,',
  'username' = 'root',
  'password' = '${secret_values.password}',
  'database' = 'flinktest',
  'collection' = 'flinkcollection',
  'scan.incremental.snapshot.enabled' = 'true',
  'scan.full-changelog' = 'true'
);
CREATE TEMPORARY TABLE  productssink (
  name STRING,
  weight DECIMAL,
  tags ARRAY<STRING>,
  price_amount DECIMAL,
  suppliers_name STRING,
  db_name STRING,
  collection_name STRING,
  op_ts TIMESTAMP_LTZ(3)
) WITH (
  'connector' = 'print',
  'logger' = 'true'
);
INSERT INTO productssink  
SELECT
  name,
  weight,
  tags,
  price.amount,
  suppliers[1].name,
  db_name,
  collection_name,
  op_ts
FROM
  mongo_source;
```

### **Dimension table**

```
CREATE TEMPORARY TABLE datagen_source (
  id STRING,
  a int,
  b BIGINT,
  `proctime` AS PROCTIME()
) WITH (
  'connector' = 'datagen'
);
CREATE TEMPORARY TABLE mongo_dim (
  `_id` STRING,
  name STRING,
  weight DECIMAL,
  tags ARRAY<STRING>,
  price ROW<amount DECIMAL, currency STRING>,
  suppliers ARRAY<ROW<name STRING, address STRING>>,
  PRIMARY KEY(_id) NOT ENFORCED
) WITH (
  'connector' = 'mongodb',
  'hosts' = 'dds-bp169b982fc25****.mongodb.rds.aliyuncs.com:3717,dds-bp169b982fc25****.mongodb.rds.aliyuncs.com:3717,',
  'username' = 'root',
  'password' = '${secret_values.password}',
  'database' = 'flinktest',
  'collection' = 'flinkcollection',
  'lookup.cache' = 'PARTIAL',
  'lookup.partial-cache.expire-after-access' = '10min',
  'lookup.partial-cache.expire-after-write' = '10min',
  'lookup.partial-cache.max-rows' = '100'
);
CREATE TEMPORARY TABLE print_sink (
  name STRING,
  weight DECIMAL,
  tags ARRAY<STRING>,
  price_amount DECIMAL,
  suppliers_name STRING
) WITH (
  'connector' = 'print',
  'logger' = 'true'
);
INSERT INTO print_sink
SELECT
  T.id,
  T.a,
  T.b,
  H.name
FROM
  datagen_source AS T JOIN mongo_dim FOR SYSTEM_TIME AS OF T.`proctime` AS H ON T.id = H._id;
```

### **Sink table**

```
CREATE TEMPORARY TABLE datagen_source (
  `_id` STRING,
  name STRING,
  weight DECIMAL,
  tags ARRAY<STRING>,
  price ROW<amount DECIMAL, currency STRING>,
  suppliers ARRAY<ROW<name STRING, address STRING>>
) WITH (
  'connector' = 'datagen'
);
CREATE TEMPORARY TABLE mongo_sink (
  `_id` STRING,
  name STRING,
  weight DECIMAL,
  tags ARRAY<STRING>,
  price ROW<amount DECIMAL, currency STRING>,
  suppliers ARRAY<ROW<name STRING, address STRING>>,
  PRIMARY KEY(_id) NOT ENFORCED
) WITH (
  'connector' = 'mongodb',
  'hosts' = 'dds-bp169b982fc25****.mongodb.rds.aliyuncs.com:3717,dds-bp169b982fc25****.mongodb.rds.aliyuncs.com:3717,',
  'username' = 'root',
  'password' = '${secret_values.password}',
  'database' = 'flinktest',
  'collection' = 'flinkcollection'
);
INSERT INTO mongo_sink
SELECT * FROM datagen_source;
```

## Data ingestion (public preview)

You can use the MongoDB connector as a data ingestion source.

### Limits

This feature is supported only in VVR 11.1 and later.

### **Syntax**

```
source:
   type: mongodb
   name: MongoDB Source
   hosts: localhost:33076
   username: ${mongo.username}
   password: ${mongo.password}
   database: foo_db
   collection: foo_col_.*

sink:
  type: ...
```

### **Configuration options**

**Parameters**

**Description**

**Required?**

**Data Types**

**Default value**

**Remarks**

type

The data source type.

Yes

STRING

None

Set this option to mongodb.

scheme

The protocol used to connect to the MongoDB server.

No

STRING

mongodb

Valid values:

-   mongodb
    
-   mongodb+srv
    

hosts

The hostname of the MongoDB server.

Yes

STRING

No default value

Separate multiple hostnames with commas (,).

username

The username used to connect to MongoDB.

No

STRING

No default value

N/A.

password

The password used to connect to MongoDB.

No

STRING

None

N/A.

database

The name of the MongoDB database to capture.

Yes

STRING

No default value

Regular expressions are supported.

collection

The name of the MongoDB collection to capture.

Yes

STRING

No default value

Regular expressions are supported. You must match the complete `database.collection` namespace.

connection.options

Additional connection options when connecting to the MongoDB server.

No

STRING

None

Specify key-value pairs (`&`\-separated `k=v`) such as `replicaSet=test&connectTimeoutMS=300000`.

schema.inference.strategy

The strategy for document type inference.

Valid values: `continuous` and `static`.

No

STRING

`continuous`

When set to `continuous`, MongoDB Source continuously performs type inference. When incoming data's schema differs from the current schema, it emits schema change events to widen the structure and accommodate new data.

When set to `static`, MongoDB Source performs schema inference only once during initialization.

scan.max.pre.fetch.records

The maximum number of records to sample in each captured collection during initial schema inference.

No

INT

50

N/A.

scan.startup.mode

The startup mode of the MongoDB data source.

Valid values: `initial`, `latest-offset`, `timestamp`, and `snapshot`.

No

STRING

initial

Valid values:

-   initial: Pulls all data from the initial offset and automatically switches to incremental reading.
    
-   latest-offset: Pulls change data from the latest OpLog offset.
    
-   timestamp: Pulls change data from a specific timestamp.
    
-   snapshot: Performs a one-time snapshot of the current database state.
    

scan.startup.timestamp-millis

When the startup mode is set to `timestamp`, captures change data from the specified timestamp.

No

LONG

None

N/A.

chunk-meta.group.size

The maximum metadata chunk size.

No

INT

1000

N/A.

scan.incremental.close-idle-reader.enabled

Specifies whether to close idle source readers after switching to incremental reading.

No

BOOLEAN

false

N/A.

scan.incremental.snapshot.backfill.skip

Specifies whether to skip the backfill watermark process in the incremental snapshot algorithm.

No

BOOLEAN

false

If your sink connector supports automatic primary-key deduplication, enabling this switch reduces the time needed to transition from snapshot reading to incremental reading.

scan.incremental.snapshot.unbounded-chunk-first.enabled

Specifies whether to read unbounded chunks first under the incremental snapshot framework.

No

BOOLEAN

false

If the collection to snapshot updates frequently, enabling this feature reduces the risk of out-of-memory errors when reading unbounded chunks.

batch.size

The batch size for the cursor when reading data from MongoDB.

No

INT

1024

N/A.

poll.max.batch.size

The maximum number of entries to request when pulling a change stream.

No

INT

1024

N/A.

poll.await.time.ms

The minimum wait time between two requests when pulling Change Stream changes.

No

INT

1000

Unit: milliseconds.

heartbeat.interval.ms

The interval at which heartbeat packets are sent.

No

INT

0

Unit: milliseconds.

The MongoDB CDC connector sends heartbeat packets to the MongoDB database to ensure the latest backtracking status. Setting this to 0 disables heartbeat packets.

**Note**

Configure this option for infrequently updated collections.

scan.incremental.snapshot.chunk.size.mb

The shard size during the snapshotting phase.

No

INT

64

Unit: MB.

scan.incremental.snapshot.chunk.samples

The number of samples to determine collection size during snapshotting.

No

INT

20

N/A.

scan.full-changelog

Specifies whether to generate a complete full changelog event stream based on MongoDB pre- and post-image records.

No

BOOLEAN

false

Requires MongoDB 6.0 or later with preimage and postimage features enabled. For instructions, see [Document Preimages](https://www.mongodb.com/docs/atlas/app-services/mongodb/preimages/).

scan.cursor.no-timeout

Specifies whether to disable cursor timeouts.

No

BOOLEAN

false

MongoDB servers typically close idle cursors after 10 minutes to prevent memory usage issues. Setting this option to true prevents that behavior.

scan.ignore-delete.enabled

Specifies whether to ignore delete events from MongoDB.

No

BOOLEAN

false

N/A.

scan.flatten.nested-documents.enabled

Whether to flatten the nested structure in the BSON document.

No

BOOLEAN

false

When enabled, a schema like `{"doc": {"foo": 1, "bar": "two"}}` becomes `doc.foo INT, doc.bar STRING`.

scan.all.primitives.as-string.enabled

Infers all primitive types as STRING.

No

BOOLEAN

false

Enabling this avoids frequent schema change events when upstream data types are inconsistent.

metadata.list

The list of metadata to pass downstream.

No

STRING

None.

Separate multiple metadata items with commas.

Supported metadata:

-   **ts\_ms**: The event timestamp recorded in the MongoDB OpLog.
    
-   **op\_ts**: An alias for ts\_ms. Use op\_ts when writing metadata to Kafka JSON.
    

### **Data type mappings**

**BSON type**

**CDC type**

**Notes**

STRING

VARCHAR

N/A.

INT32

INT

INT64

BIGINT

DECIMAL128

DECIMAL

DOUBLE

DOUBLE

BOOLEAN

BOOLEAN

TIMESTAMP

TIMESTAMP

DATETIME

LOCALZONEDTIMESTAMP

BINARY

VARBINARY

DOCUMENT

MAP

Key and value types are inferred.

ARRAY

ARRAY

Element types are inferred.

OBJECTID

VARCHAR

Represented as a HexString.

SYMBOL

REGULAREXPRESSION

JAVASCRIPT

JAVASCRIPTWITHSCOPE

VARCHAR

Represented as a string.

## Metadata

## SQL connectors

MongoDB CDC SQL source tables support metadata column syntax. You can access the following metadata columns:

**metadata key**

**Metadata type**

**Description**

database\_name

STRING NOT NULL

The name of the database containing the document.

collection\_name

STRING NOT NULL

The name of the collection containing the document.

op\_ts

TIMESTAMP\_LTZ(3) NOT NULL

The time when the document changed in the database. If the document comes from historical table data rather than the ChangeStream, this value is always 0.

row\_kind

STRING NOT NULL

The type of data change event. Valid values:

-   +I: INSERT
    
-   \-D: DELETE
    
-   \-U: UPDATE\_BEFORE
    
-   +U: UPDATE\_AFTER
    

**Note**

Supported only in VVR 11.1 or later.

## Data ingestion YAML

MongoDB CDC data ingestion YAML connectors support the following metadata columns:

**Metadata column**

**Metadata type**

**Description**

ts\_ms

BIGINT NOT NULL

The time when the document changed in the database. If the document comes from historical table data rather than the ChangeStream, this value is always 0.

You can also use generic metadata columns provided by the Transform module to access database name, collection name, and row\_kind information.

## Preimage and postimage features

By default, MongoDB versions earlier than 6.0 do not retain pre-change or deleted documents. Without the preimage and postimage features enabled, MongoDB supports only UPSERT semantics, which means that UPDATE\_BEFORE events are missing. However, many useful Flink operators require a complete changelog stream that includes INSERT, UPDATE\_BEFORE, UPDATE\_AFTER, and DELETE events.

To supplement missing UPDATE\_BEFORE events, the Flink SQL planner automatically generates a ChangelogNormalize operator for UPSERT-type data sources. This operator caches snapshots of the current version of all documents in deployment state data. When a document is updated or deleted, you can query the state data in ChangelogNormalize to obtain its pre-update state. However, this requires storing large amounts of state data.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5120873171/p781428.png)

MongoDB 6.0 supports the preimage and postimage features. For more information, see [Use MongoDB Change Streams to capture data changes in real time](/help/en/mongodb/use-cases/change-stream-introduction-and-best-practices). When you enable this feature, MongoDB records the complete state of a document before and after each change in a special collection. If you enable the `scan.full-changelog` option in your job, the MongoDB CDC connector uses these change document records to generate UPDATE\_BEFORE records. This allows the connector to generate a complete event stream and eliminates the dependency on the ChangelogNormalize operator.

## **MongoDB CDC DataStream API**

**Important**

When you read or write data using DataStream, use the corresponding DataStream connector to connect to Flink. For more information about how to set up the DataStream connector, see [DataStream connector usage](/help/en/flink/realtime-flink/developer-reference/settings-of-datastream-connectors#main-2309395).

You can create a DataStream API program and use MongoDBSource. The following code provides an example:

#### **Java**

```
MongoDBSource.builder()
  .hosts("mongo.example.com:27017")
  .username("mongouser")
  .password("mongopasswd")
  .databaseList("testdb")
  .collectionList("testcoll")
  .startupOptions(StartupOptions.initial())
  .deserializer(new JsonDebeziumDeserializationSchema())
  .build();
```

#### **XML**

The Maven Central Repository hosts [VVR MongoDB connectors](https://mvnrepository.com/artifact/com.alibaba.ververica/flink-connector-mongodb) that you can use directly in job development.

```
<dependency>
    <groupId>com.alibaba.ververica</groupId>
    <artifactId>flink-connector-mongodb</artifactId>
    <version>${vvr.version}</version>
</dependency>
```

**Note**

When you use the DataStream API, the package that you use to construct the MongoDBSource data source depends on whether you want to enable the incremental snapshot feature. To enable the incremental snapshot feature, use `MongoDBSource#builder()` from the `com.ververica.cdc.connectors.mongodb.source` package. Otherwise, use `MongoDBSource#builder()` from `com.ververica.cdc.connectors.mongodb`.

You can configure the following parameters when you construct MongoDBSource:

**Parameter**

**Description**

hosts

The hostname of the MongoDB database to connect to.

username

The username for the MongoDB database service.

**Note**

If authentication is not enabled on the MongoDB server, you do not need to configure this parameter.

password

The password for the MongoDB database service.

**Note**

If authentication is not enabled on the MongoDB server, you do not need to configure this parameter.

databaseList

The name of the MongoDB database to monitor.

**Note**

The database name supports regular expressions to read data from multiple databases. Use `.*` to match all databases.

collectionList

The name of the MongoDB collection to monitor.

**Note**

The collection name supports regular expressions to read data from multiple collections. Use `.*` to match all collections.

startupOptions

Select the startup mode for MongoDB CDC.

Valid values:

-   StartupOptions.initial()
    
    -   Pulls all data from the initial offset.
        
-   StartupOptions.latest-offset()
    
    -   Pulls change data from the current offset.
        
-   StartupOptions.timestamp()
    
    -   Pulls change data from a specific timestamp.
        

For more information, see [Startup Properties](https://www.mongodb.com/docs/kafka-connector/current/source-connector/configuration-properties/startup/).

deserializer

A deserializer that deserializes SourceRecord type records into a specified type. Valid values:

-   MongoDBConnectorDeserializationSchema: Converts SourceRecords generated in Upsert mode into the internal RowData data structure of the Flink Table API or SQL API.
    
-   MongoDBConnectorFullChangelogDeserializationSchema: Converts SourceRecords generated in Full Changelog mode into the internal RowData data structure of Flink Table or SQL.
    
-   JsonDebeziumDeserializationSchema: Converts SourceRecords into JSON formatted strings.
