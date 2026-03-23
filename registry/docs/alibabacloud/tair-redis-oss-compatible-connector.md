This topic describes how to use the Tair (Redis OSS-compatible) connector.

## Background

Tair (Redis OSS-compatible) is a database service compatible with open source Redis protocols and provides hybrid memory-and-disk storage. Tair uses a high availability (HA) active-active architecture and a scalable cluster architecture to meet business requirements for high throughput, low latency, and flexible scaling up or down. For more information, see [What is Tair (Redis OSS-compatible)?](/help/en/redis/product-overview/what-is-apsaradb-for-redis#concept-m3j-s5z-sdb).

The following table describes the features supported by the Redis connector.

**Category**

**Details**

Supported types

Dimension table and sink table

Supported modes

Streaming mode

Data format

String

Specific monitoring metrics

-   Dimension table: None
    
-   Sink table:
    
    -   numBytesOut
        
    -   numRecordsOutPerSecond
        
    -   numBytesOutPerSecond
        
    -   currentSendTime
        

**Note**

For more information about the metrics, see [Monitoring metrics](/help/en/flink/realtime-flink/user-guide/metrics).

API types

SQL

Supports data updates or deletions in sink tables

Yes

## Prerequisites

-   You have created a Tair (Redis OSS-compatible) instance. For more information, see [Step 1: Create an instance](/help/en/redis/getting-started/step-1-create-an-apsaradb-for-redis-instance#concept-kqh-vv5-tdb).
    
-   You have configured a whitelist. For more information, see [Step 2: Configure a whitelist](/help/en/redis/getting-started/step-2-configure-whitelists#concept-lmv-qhf-vdb).
    

## Limits

-   The Redis connector provides best-effort semantics and does not guarantee exactly-once delivery. You must ensure idempotence in your application.
    
-   The following limits apply to dimension tables:
    
    -   Only STRING and HASHMAP data types can be read from Redis.
        
    -   All fields in the dimension table must be of the STRING type. You must declare exactly one primary key.
        
    -   When you join a dimension table, the ON clause must include an equivalent condition for the primary key.
        

## **Known issues and solutions**

The cache feature in Ververica Runtime (VVR) 8.0.9 has an issue. To disable it, add sink.buffer-flush.max-rows = '0' to the WITH clause of the sink table.

## Syntax

```
CREATE TABLE redis_table (
  col1 STRING,
  col2 STRING,
  PRIMARY KEY (col1) NOT ENFORCED -- Required.
) WITH (
  'connector' = 'redis',
  'host' = '<yourHost>',
  'mode' = 'STRING'  -- Required for sink tables.
);
```

## WITH parameters

### **General**

**Parameter**

**Description**

**Data type**

**Required**

**Default**

**Remarks**

connector

The table type.

String

Yes

None

The value must be redis.

host

The connection address of the Redis server.

String

Yes

None

Use an internal network endpoint.

**Note**

Connections to public network endpoints may be unstable because of factors such as network latency and bandwidth limits.

port

The connection port of the Redis server.

Int

No

6379

None.

password

The password of the Redis database.

String

No

Empty string, which means no validation is performed.

None.

dbNum

The number of the database to operate on.

Int

No

0

None.

clusterMode

Specifies whether the Redis cluster is in cluster mode.

Boolean

No

false

None.

hostAndPorts

The hosts and port numbers of the Redis cluster.

**Note**

If cluster mode is enabled and HA is not required, you can configure only one host using the host and port parameters, or configure only this parameter. This parameter has a higher priority than the individual host and port parameters.

String

No

Empty

If `ClusterMode = true` and you require HA for the Jedis connection to a self-managed Redis cluster, you must configure this parameter. The format is a string: `"host1:port1,host2:port2"`.

key-prefix

The prefix for the table's primary key value.

String

No

None

After this parameter is configured, a prefix is automatically added to the primary key field's value when you query or write data. The prefix consists of the key prefix (key-prefix) and the prefix separator (key-prefix-delimiter).

**Note**

This parameter is supported only in VVR 8.0.7 and later.

key-prefix-delimiter

The separator between the primary key value and its prefix.

String

No

None

connection.pool.max-total

The maximum number of connections that the connection pool can allocate.

Int

No

8

**Note**

This parameter is supported only in VVR 8.0.9 and later.

connection.pool.max-idle

The maximum number of idle connections in the connection pool.

Int

No

8

connection.pool.min-idle

The minimum number of idle connections in the connection pool.

Int

No

0

connect.timeout

The timeout for establishing a connection.

Duration

No

3000 ms

socket.timeout

The timeout for receiving data from the Redis server (socket timeout).

Duration

No

3000 ms

cacert.filepath

The full path of the SSL/TLS certificate file. The file format must be jks.

String

No

None, which indicates that SSL/TLS encryption is disabled.

Download the CA certificate as described in [Enable TLS encryption](/help/en/redis/user-guide/enable-tls-encryption), and upload the certificate in the **Additional Dependency Files** section of the job. After the upload, the CA certificate is stored in the /flink/usrlib directory. For more information about how to upload a file in the Additional Dependency Files section, see [Deploy a job](/help/en/flink/realtime-flink/user-guide/create-a-deployment). Example: `'cacert.filepath' = '/flink/usrlib/ca.jks'`.

**Note**

This parameter is supported only in VVR 11.1 and later.

### **Sink-specific**

**Parameter**

**Description**

**Data type**

**Required**

**Default**

**Remarks**

mode

The Redis data type to use.

String

Yes

None

Tair sink tables support five Redis data types. The DDL must be defined in the specified format, and a primary key must be defined. For more information, see [Data type formats for Redis sink tables](#69dcab6034dam).

flattenHash

Specifies whether to write HASHMAP data in multi-value mode.

Boolean

No

false

Valid values:

-   true: Writes data in multi-value mode. In this case, declare multiple non-primary key fields in the DDL. The primary key field's value corresponds to the key. The name of each non-primary key field corresponds to a field, and its value corresponds to the field's value.
    
-   false: Writes data in single-value mode. In this case, declare three fields in the DDL. The value of the first primary key field corresponds to the key. The value of the second non-primary key field corresponds to the field. The value of the third non-primary key field corresponds to the value.
    

**Note**

-   This parameter takes effect only when the mode parameter is set to HASHMAP.
    
-   This parameter is supported only in VVR 8.0.7 and later.
    

ignoreDelete

Specifies whether to ignore retraction messages.

Boolean

No

false

Valid values:

-   true: Ignores retraction messages when they are received.
    
-   false: Deletes the data's corresponding key and the inserted data when a retraction message is received.
    

expiration

Sets a TTL for the key of the written data.

Long

No

0, which means no TTL is set.

If the value of this parameter is greater than 0, a corresponding TTL is set for the key of the written data. The unit is milliseconds.

sink.buffer-flush.max-rows

The maximum number of records that can be saved in the cache.

Int

No

200

Cached records include all append, update, and delete events. The cache is flushed when the maximum number of records is exceeded.

**Note**

-   This parameter is supported only in VVR 8.0.9 and later. It is effective only in non-cluster mode (`clusterMode = false`).
    
-   In VVR 11.4.0 and later, this parameter is also supported in Redis cluster mode (`clusterMode = true`).
    

sink.buffer-flush.interval

The cache flush interval.

Duration

No

1000 ms

The cache is flushed asynchronously.

**Note**

-   This parameter is supported only in VVR 8.0.9 and later. It is effective only in non-cluster mode (`clusterMode = false`).
    
-   In VVR 11.4.0 and later, this parameter is also supported in Redis cluster mode (`clusterMode = true`).
    

### **Dimension table-specific**

**Parameter**

**Description**

**Data type**

**Required**

**Default**

**Remarks**

mode

The Redis data type to read.

String

No

STRING

Valid values:

STRING: Reads data as the STRING type by default.

HASHMAP: Reads HASHMAP data in multi-value mode.

In this case, the DDL must declare multiple non-primary key fields.

-   Primary key field: The value of the primary key field is used as the key in the HASHMAP.
    
-   Non-primary key fields: The name of each non-primary key field is used as a field, and its value is used as the field's value.
    

**Note**

This parameter is supported only in VVR 8.0.7 and later.

To read HASHMAP data in single-value mode, configure the hashName parameter.

hashName

The key to use when reading HASHMAP data in single-value mode.

String

No

None

If you do not specify the mode parameter but want to read HASHMAP data in single-value mode, you must configure hashName.

In this case, the DDL only needs to declare two fields. The value of the first primary key field corresponds to the field, and the value of the second non-primary key field corresponds to the value.

cache

The cache policy.

String

No

None

Tair dimension tables support the following cache policies:

None (default): No cache.

LRU: Caches a portion of the dimension table data. For each record from the source table, the system first searches the cache. If the data is not found, the system queries the physical dimension table.

ALL: Caches all data from the dimension table. Before the job runs, the system loads all data from the dimension table into the cache. All subsequent lookups are performed against the cache. If the data is not found in the cache, the key does not exist. The full cache has an expiration time, after which it is reloaded.

**Important**

-   The ALL cache policy is supported only in VVR 8.0.3 and later.
    
-   For VVR versions from 8.0.3 to 11.0, the ALL cache policy supports reading HASHMAP data only in single-value mode. In the DDL, you must declare three fields. The first field is specified as the key using the hashName parameter in the WITH clause. The value of the second primary key field corresponds to the field. The value of the third non-primary key field corresponds to the value.
    
-   In VVR 11.1 and later, the ALL cache policy supports reading HASHMAP data in multi-value mode. In the DDL, declare multiple non-primary key fields. The primary key field's value corresponds to the key. The name of each non-primary key field corresponds to a field, and its value corresponds to the field's value. You must also set the mode parameter to HASHMAP in the WITH clause.
    
-   You must also configure the cache size (cacheSize) and cache update interval (cacheTTLMs) parameters.
    

cacheSize

The cache size.

Long

No

10000

When you select the LRU cache policy, you must set the cache size.

cacheTTLMs

The cache timeout duration, in milliseconds.

Long

No

None

The configuration of cacheTTLMs depends on the cache setting:

If cache is set to None, you do not need to configure cacheTTLMs. This means the cache does not time out.

If cache is set to LRU, cacheTTLMs is the cache timeout period. By default, the cache does not expire.

If cache is set to ALL, cacheTTLMs is the cache reload time. By default, the cache is not reloaded.

cacheEmpty

Specifies whether to cache empty results.

Boolean

No

true

None.

cacheReloadTimeBlackList

The disallowed cache refresh time. When the cache policy is set to ALL, you can enable a disallowed time to prevent the cache from being refreshed during this period, for example, during a Double 11 shopping festival.

String

No

None

The format is as follows:

-   Full date and time range: 2017-10-24 14:00 -> 2017-10-24 15:00.
    
-   Cross-day time period: 2017-11-10 23:30 -> 2017-11-11 08:00.
    
-   Daily fixed time period: 12:00 -> 14:00, 22:00 -> 2:00.
    
    **Note**
    
    In VVR 11.1 and later, time periods without a specified date apply to every day.
    

Use separators as follows:

-   Use a comma (,) to separate multiple disallowed time periods.
    
-   Use an arrow (->) to separate the start and end times of a disallowed period.
    

async

Specifies whether to return data asynchronously.

Boolean

No

false

-   true: Returns data asynchronously. Asynchronously returned data is unordered by default.
    
-   false (default): Does not return data asynchronously.
    

## **Data type formats for Redis sink tables**

**Type**

**Format**

**Redis insert command**

STRING type

Two-column DDL:

-   Column 1: key (STRING)
    
-   Column 2: value (STRING)
    

`set key value`

LIST type

Two-column DDL:

-   Column 1: key (STRING)
    
-   Column 2: value (STRING)
    

`lpush key value`

SET type

Two-column DDL:

-   Column 1: key (STRING)
    
-   Column 2: value (STRING)
    

`sadd key value`

HASHMAP type

By default, a three-column DDL:

-   Column 1: key (STRING)
    
-   Column 2: field (STRING)
    
-   Column 3: value (STRING)
    

`hmset key field value`

If flattenHash is set to true, the DDL supports multiple columns. The following example uses four columns:

-   Column 1: key (STRING)
    
-   Column 2: The column name (for example, col1) corresponds to a field, and the column value (for example, value1) corresponds to the field's value (STRING).
    
-   Column 3: The column name (for example, col2) corresponds to a field, and the column value (for example, value2) corresponds to the field's value (STRING).
    
-   Column 4: The column name (for example, col3) corresponds to a field, and the column value (for example, value3) corresponds to the field's value (STRING).
    

`hmset key col1 value1 col2 value2 col3 value3`

SORTEDSET type

Three-column DDL:

-   Column 1: key (STRING)
    
-   Column 2: score (DOUBLE)
    
-   Column 3: value (STRING)
    

`zadd key score value`

## **Type mappings**

**Type**

**Redis field type**

**Flink field type**

General

STRING

STRING

For sink tables only

SCORE

DOUBLE

**Note**

The Redis SCORE type applies to SORTEDSETs (sorted sets). You must manually assign a DOUBLE score to each value. The values are then sorted in ascending order based on their scores.

## Usage examples

-   Sink table
    
    -   Write STRING data: In the code example, the value from the `user_id` column in the `redis_sink` sink table is written to Redis as the key, and the value from the `login_time` column is written as the value.
        
        ```
        CREATE TEMPORARY TABLE kafka_source (
          user_id STRING,          -- User ID
          login_time STRING        -- Logon timestamp
        ) WITH (
          'connector' = 'kafka',
          'topic' = 'user_logins',      -- Kafka topic
          'properties.bootstrap.servers' = 'yourKafkaBroker', -- Kafka broker address
          'format' = 'json',            -- Data format is JSON
          'scan.startup.mode' = 'earliest-offset' -- Consume from the earliest offset
        );
        
        CREATE TEMPORARY TABLE redis_sink (
          user_id STRING,               -- Redis key
          login_time STRING,            -- Redis value
          PRIMARY KEY (user_id) NOT ENFORCED
        ) WITH (
          'connector' = 'redis',
          'mode' = 'STRING',   -- Use STRING mode
          'host' = 'yourHost',
          'port' = 'yourPort',
          'password' = 'yourPassword'
        );
        
        INSERT INTO redis_sink
        SELECT *
        FROM kafka_source;
        ```
        
    -   Write HASHMAP data in multi-value mode: In the code example, the value from the `order_id` column in the `redis_sink` sink table is written to Redis as the key. The values from the `product_name`, `quantity`, and `amount` columns are written to the product\_name, quantity, and amount fields, respectively.
        
        ```
        CREATE TEMPORARY TABLE kafka_source (
          order_id STRING,     -- Order ID
          product_name STRING, -- Product name
          quantity STRING,         -- Quantity
          amount STRING         -- Order amount
        ) WITH (
          'connector' = 'kafka',
          'topic' = 'orders_topic', -- Kafka topic
          'properties.bootstrap.servers' = 'yourKafkaBroker', -- Kafka broker address
          'format' = 'json',        -- Data format is JSON
          'scan.startup.mode' = 'earliest-offset' -- Consume from the earliest offset
        );
        
        CREATE TEMPORARY TABLE redis_sink (
          order_id STRING,        -- Order ID, used as the Redis key
          product_name STRING,    -- Product name, used as a Redis Hash field
          quantity STRING,        -- Quantity, used as a Redis Hash field
          amount STRING,          -- Order amount, used as a Redis Hash field
          PRIMARY KEY (order_id) NOT ENFORCED
        ) WITH (
          'connector' = 'redis',
          'mode' = 'HASHMAP',   -- Use HASHMAP mode
          'flattenHash' = 'true',
          'host' = 'yourHost',
          'port' = 'yourPort',
          'password' = 'yourPassword'
        );
        
        INSERT INTO redis_sink
        SELECT *
        FROM kafka_source;
        ```
        
    -   Write HASHMAP data in single-value mode: In the code example, the value from the `order_id` column in the `redis_sink` sink table is written to Redis as the key. The value from the `product_name` column is written as the field, and the value from the `quantity` column is written as the value.
        
        ```
        CREATE TEMPORARY TABLE kafka_source (
          order_id STRING,          -- Order ID
          product_name STRING,      -- Product name
          quantity STRING           -- Quantity
        ) WITH (
          'connector' = 'kafka',
          'topic' = 'orders_topic', -- Kafka topic
          'properties.bootstrap.servers' = 'yourKafkaBroker', -- Kafka broker address
          'format' = 'json',        -- Data format is JSON
          'scan.startup.mode' = 'earliest-offset' -- Consume from the earliest offset
        );
        
        CREATE TEMPORARY TABLE redis_sink (
          order_id STRING,          -- Redis key
          product_name STRING,      -- Redis field
          quantity STRING,          -- Redis value
          PRIMARY KEY (order_id) NOT ENFORCED
        ) WITH (
          'connector' = 'redis',
          'mode' = 'HASHMAP',
          'host' = 'yourHost',
          'port' = 'yourPort',
          'password' = 'yourPassword'
        );
        
        INSERT INTO redis_sink
        SELECT *
        FROM kafka_source;
        ```
        

-   Dimension table
    
    -   Read STRING data: In the code example, the value from the `user_id` column in the `redis_dim` dimension table corresponds to the key, and the value from the `user_name` column corresponds to the value.
        
        ```
        CREATE TEMPORARY TABLE kafka_source (
          user_id STRING,               -- User ID
          proctime AS PROCTIME()        -- Processing time
        ) WITH (
          'connector' = 'kafka',
          'topic' = 'user_clicks',      -- Kafka topic
          'properties.bootstrap.servers' = 'yourKafkaBroker', -- Kafka broker address
          'format' = 'json',            -- Data format is JSON
          'scan.startup.mode' = 'earliest-offset' -- Consume from the earliest offset
        );
        
        CREATE TEMPORARY TABLE redis_dim (
          user_id STRING,               -- User ID (Redis key)
          user_name STRING,             -- Username (Redis value)
          PRIMARY KEY (user_id) NOT ENFORCED
        ) WITH (
          'connector' = 'redis',
          'host' = 'yourHost',    -- Redis host address
          'port' = 'yourPort',    -- Redis port
          'password' = 'yourPassword',  -- Redis password
          'mode' = 'STRING'             -- Use STRING mode
        );
        
        CREATE TEMPORARY TABLE blackhole_sink (
          user_id STRING,               -- User ID
          redis_user_id STRING,         -- User ID from Redis
          user_name STRING              -- Username
        ) WITH (
          'connector' = 'blackhole'
        );
        
        INSERT INTO blackhole_sink
        SELECT 
          t1.user_id,                   -- User ID (from Kafka)
          t2.user_id,                   -- User ID (from Redis)
          t2.user_name                  -- Username (from Redis)
        FROM kafka_source AS t1
        JOIN redis_dim FOR SYSTEM_TIME AS OF t1.proctime AS t2
        ON t1.user_id = t2.user_id;
        ```
        
    -   Read HASHMAP data in multi-value mode: In the code example, the value from the `user_id` column in the `redis_dim` dimension table is the key. The value from the `user_name` column maps to the user\_name field. The value from the `email` column maps to the email field. The value from the `register_time` column maps to the register\_time field.
        
        ```
        CREATE TEMPORARY TABLE kafka_source (
          user_id STRING,               -- User ID
          click_time TIMESTAMP(3),      -- Click time
          proctime AS PROCTIME()        -- Processing time
        ) WITH (
          'connector' = 'kafka',
          'topic' = 'user_clicks',      -- Kafka topic
          'properties.bootstrap.servers' = 'yourKafkaBroker', -- Kafka broker address
          'format' = 'json',            -- Data format is JSON
          'scan.startup.mode' = 'earliest-offset'
        );
        
        CREATE TEMPORARY TABLE redis_dim (
          user_id STRING,     -- User ID (Redis key)
          user_name STRING,    -- Username (part of a Redis field-value pair)
          email STRING,        -- Email (part of a Redis field-value pair)
          register_time STRING, -- Registration time (part of a Redis field-value pair)
          PRIMARY KEY (user_id) NOT ENFORCED
        ) WITH (
          'connector' = 'redis',
          'host' = 'yourHost',
          'port' = 'yourPort',
          'password' = 'yourPassword',
          'mode' = 'HASHMAP'    -- Use HASHMAP mode
        );
        
        CREATE TEMPORARY TABLE blackhole_sink (
          user_id STRING,        -- User ID
          user_name STRING,      -- Username
          email STRING,          -- Email
          register_time STRING,   -- Registration time
          click_time TIMESTAMP(3) -- Click time
        ) WITH (
          'connector' = 'blackhole'
        );
        
        INSERT INTO blackhole_sink
        SELECT 
          t1.user_id,    -- User ID
          t2.user_name,  -- Username
          t2.email,      -- Email
          t2.register_time,  -- Registration time
          t1.click_time      -- Click time
        FROM kafka_source AS t1
        JOIN redis_dim FOR SYSTEM_TIME AS OF t1.proctime AS t2
        ON t1.user_id = t2.user_id;
        ```
        
    -   Read HASHMAP data in single-value mode: In the code example, the value of the `hashName` parameter is testKey, which is used as the key. The value from the `user_id` column in the `redis_dim` dimension table is the field, and the value from the `user_name` column is the value.
        
        ```
        CREATE TEMPORARY TABLE kafka_source (
          user_id STRING,            -- User ID
          proctime AS PROCTIME()     -- Processing time
        ) WITH (
          'connector' = 'kafka',
          'topic' = 'user_clicks',      -- Kafka topic
          'properties.bootstrap.servers' = 'yourKafkaBroker', -- Kafka broker address
          'format' = 'json',            -- Data format is JSON
          'scan.startup.mode' = 'earliest-offset' -- Consume from the earliest offset
        );
        
        CREATE TEMPORARY TABLE redis_dim (
          user_id STRING,               -- User ID (Redis hash field)
          user_name STRING,             -- Username (Redis hash value)
          PRIMARY KEY (user_id) NOT ENFORCED
        ) WITH (
          'connector' = 'redis',
          'host' = 'yourHost',        -- Redis host address
          'port' = 'yourPort',        -- Redis port
          'password' = 'yourPassword',-- Redis password
          'hashName' = 'testkey'      -- Fixed Redis hash name
        );
        
        CREATE TEMPORARY TABLE blackhole_sink (
          user_id STRING,               -- User ID
          redis_user_id STRING,         -- User ID from Redis
          user_name STRING              -- Username
        ) WITH (
          'connector' = 'blackhole'
        );
        
        INSERT INTO blackhole_sink
        SELECT 
           t1.user_id,     -- User ID (from Kafka)
           t2.user_id,     -- User ID (from Redis)
           t2.user_name    -- Username (from Redis)
        FROM kafka_source AS t1
        JOIN redis_dim FOR SYSTEM_TIME AS OF t1.proctime AS t2
        ON t1.user_id = t2.user_id;
        ```
