Answers to common questions about connectors in Realtime Compute for Apache Flink, organized by connector type.

## Quick symptom index

Use this table to find the right FAQ entry when you know the symptom but not which connector is causing it.

**Symptom**

**Relevant entries**

No data output

[Kafka: event time window produces no output](#h3-3e325046) / [Hudi: No data in storage](#h3-63543204) / [Tablestore: dimension join returns no data](#h3-b4f1cf3e)

Duplicate data

[MaxCompute: Duplicate data writes](#h3-8367ea50) / [Hudi: duplicate data](#h3-1c4ed63b)

Out of memory (OOM)

[Paimon: TaskManager heartbeat timeout](#h3-b0f3621a) / [Simple Log Service: OOM on restore](#h3-1d599956)

Checkpoint issues

[Hologres: checkpoint vs. data visibility](#h3-7bc1ba04) / [Paimon: checkpoint and data visibility](#h3-d0b1820e)

Slow startup or reads

[MaxCompute: job stays in starting status](#h3-23fe74c6)/ [MaxCompute: incremental source slow to start reading](#h3-e5d68c81)

Permission errors

[MaxCompute: Authorization Failed 4019](#h3-1925ede1) / [Hologres: permission denied for database](#060b06e6874ok)

Disk space

[Paimon: no space left on device](#h3-44f5c603) / [Paimon: large files in OSS](#h3-15d9f84e)

Connection errors

[Kafka: connected but cannot read/write](#h3-88144d13) / [Hologres: remaining connection slots](#h3-b7a8dbd8)

* * *

## Kafka

### Parse JSON data from Kafka

For standard JSON, use the [JSON format](https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/connectors/formats/json.html) in your DDL.

For nested JSON, map JSON objects to `ROW` types and JSON arrays to `ARRAY` types. Example with this input:

```
{
    "a": "abc",
    "b": 1,
    "c": {
        "e": ["1", "2", "3", "4"],
        "f": {"m": "567"}
    }
}
```

Source table DDL:

```
CREATE TEMPORARY TABLE kafka_table (
  `a` VARCHAR,
  b INT,
  `c` ROW<e ARRAY<VARCHAR>, f ROW<m VARCHAR>>  -- JSON object = ROW, JSON array = ARRAY
) WITH (
  'connector' = 'kafka',
  'topic' = '<your-topic>',
  'properties.bootstrap.servers' = '<broker-list>',
  'properties.group.id' = '<group-id>',
  'format' = 'json',
  'scan.startup.mode' = '<startup-mode>'
);
```

Sink table DDL:

```
CREATE TEMPORARY TABLE sink (
  `a` VARCHAR,
  b INT,
  e VARCHAR,
  `m` VARCHAR
) WITH (
  'connector' = 'print',
  'logger' = 'true'
);
```

DML to extract nested fields:

```
INSERT INTO sink
  SELECT
    `a`,
    b,
    c.e[1],   -- Array indexing starts at 1 in Flink
    c.f.m
  FROM kafka_table;
```

### Connected to Kafka but cannot read or write data

**Cause**

When a proxy or port mapping sits between Realtime Compute for Apache Flink and Kafka, the Kafka client retrieves broker endpoints from Kafka metadata rather than using the proxy address. Even though the initial connection succeeds, subsequent data operations fail because Flink tries to reach the brokers directly.

**Troubleshooting**

1.  Connect to the ZooKeeper service of your Kafka cluster using `zkCli.sh` or `zookeeper-shell.sh`.
    
2.  Run `get /brokers/ids/0` to retrieve the broker metadata. Note the `endpoints` field.
    
3.  From the Flink environment, run `ping` or `telnet` against the endpoint. If the connectivity test fails, a proxy or port mapping is in use.
    

**Solution**

-   Set up a direct network connection between Flink and Kafka, bypassing the proxy.
    
-   Alternatively, configure `advertised.listeners` on the Kafka brokers to use the proxy address so that broker metadata returns the reachable address.
    

> `advertised.listeners` is available in Kafka 0.10.2.0 and later. For details, see [KIP-103: Separation of Internal and External traffic](https://cwiki.apache.org/confluence/display/KAFKA/KIP-103%3A+Separation+of+Internal+and+External+traffic) and [Kafka network connection issues](https://www.confluent.io/blog/kafka-client-cannot-connect-to-broker-on-aws-on-docker-etc/).

### Why does an event time window produce no output from a Kafka source table?

An idle partition with no incoming data blocks watermark advancement, which prevents event time windows from triggering.

**Solution**

1.  Make sure all partitions of the Kafka source table contain data.
    
2.  Enable idle source detection by adding the following parameter to the **Other Configuration** field on the **Configuration** tab: For parameter details, see [Flink Configuration](https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/config.html).
    
    ```
       table.exec.source.idle-timeout: 5
    ```
    

### Commit offset in Kafka

Realtime Compute for Apache Flink commits the consumer read offset to Kafka at each checkpoint. This records the position of processed data and prevents duplication or loss on recovery.

If checkpointing is disabled or the checkpoint interval is too large, offsets may not be committed, leading to data duplication or loss after a failure.

### Parse nested JSON with a UDTF

When the Kafka connector reads data like `{"data":[{"cola":"test1","colb":"test2"}, ...]}`, the nested array is parsed as `ARRAY<ROW<cola VARCHAR, colb VARCHAR>>`. Process the array elements using a [user-defined table-valued function (UDTF)](/help/en/flink/realtime-flink/developer-reference/udtfs).

### Connect to a secured Kafka cluster

Add security properties to the `WITH` clause of your Kafka table DDL. Prefix each Kafka security property with `properties.`.

**Important**

The JAAS login module uses a shaded class path (`org.apache.flink.kafka.shaded.org.apache.kafka...`) in Realtime Compute for Apache Flink, which differs from the standard Apache Kafka class path.

**SASL/PLAIN example:**

```
CREATE TABLE KafkaTable (
  `user_id` BIGINT,
  `item_id` BIGINT,
  `behavior` STRING,
  `ts` TIMESTAMP(3) METADATA FROM 'timestamp'
) WITH (
  'connector' = 'kafka',
  ...
  'properties.security.protocol' = 'SASL_PLAINTEXT',
  'properties.sasl.mechanism' = 'PLAIN',
  'properties.sasl.jaas.config' = 'org.apache.flink.kafka.shaded.org.apache.kafka.common.security.plain.PlainLoginModule required username=\"<username>\" password=\"<password>\";'
);
```

**SASL\_SSL with SCRAM-SHA-256 example:**

```
CREATE TABLE KafkaTable (
  `user_id` BIGINT,
  `item_id` BIGINT,
  `behavior` STRING,
  `ts` TIMESTAMP(3) METADATA FROM 'timestamp'
) WITH (
  'connector' = 'kafka',
  ...
  'properties.security.protocol' = 'SASL_SSL',
  /* SSL configuration */
  'properties.ssl.truststore.location' = '/flink/usrlib/kafka.client.truststore.jks',
  'properties.ssl.truststore.password' = '<truststore-password>',
  'properties.ssl.keystore.location' = '/flink/usrlib/kafka.client.keystore.jks',
  'properties.ssl.keystore.password' = '<keystore-password>',
  /* SASL configuration */
  'properties.sasl.mechanism' = 'SCRAM-SHA-256',
  'properties.sasl.jaas.config' = 'org.apache.flink.kafka.shaded.org.apache.kafka.common.security.scram.ScramLoginModule required username=\"<username>\" password=\"<password>\";'
);
```

> Match the JAAS login module class to your SASL mechanism:

Upload all required files (certificates, keystores) through **Additional Dependencies** in the deployment. Uploaded files are stored at `/flink/usrlib/`. For instructions, see [Deploy a job](/help/en/flink/realtime-flink/user-guide/create-a-deployment).

**Important**

If the Kafka broker uses SASL\_SSL but the client is configured with SASL\_PLAINTEXT, an OutOfMemory error occurs during SQL validation. Update the client security protocol to match the broker.

### Resolve field name conflicts between key and value

When a Kafka message's key and value both contain a field with the same name (for example, `id`), use the `key.fields-prefix` property to distinguish them:

```
CREATE TABLE kafka_table (
  key_id INT,
  value_id INT,
  name STRING
) WITH (
  'connector' = 'kafka',
  'topic' = 'test_topic',
  'properties.bootstrap.servers' = 'localhost:9092',
  'format' = 'json',
  'json.ignore-parse-errors' = 'true',
  'key.format' = 'json',
  'key.fields' = 'id',
  'value.format' = 'json',
  'value.fields' = 'id, name',
  'key.fields-prefix' = 'key_'
);
```

Query result:

```
key_id: 1,
value_id: 100,
name: flink
```

The prefix `key_` is prepended to key field names, so the key field `id` becomes `key_id` in the Flink table, avoiding the conflict with the value field `id` (accessed as `value_id`).

### Unexpected 50-year latency when reading from Kafka

The `currentEmitEventTimeLag` metric shows over 50 years of latency when the timestamp on a Kafka message is `0` or `null`. The metric is calculated as `current_time - message_timestamp`, so a zero timestamp results in an apparent latency since the Unix epoch.

**Troubleshooting steps:**

1.  For JAR deployments, verify that the Kafka dependency in the POM file is the built-in dependency of Realtime Compute for Apache Flink. A third-party Kafka dependency may not report latency metrics.
    
2.  Confirm that all partitions of the upstream Kafka topic receive data.
    
3.  Check whether message timestamps are `0` or `null`:
    
    -   For SQL deployments, define a metadata column to extract the message timestamp: \`\``sql CREATE TEMPORARY TABLE kafka_source (` timestamp `BIGINT,` ts\_meta `TIMESTAMP METADATA FROM 'timestamp', ts AS TO_TIMESTAMP( FROM_UNIXTIME(`timestamp`, 'yyyy-MM-dd HH:mm:ss') ), WATERMARK FOR ts AS ts - INTERVAL '5' SECOND ) WITH ( 'connector' = 'kafka', 'topic' = '<your-topic>', 'properties.bootstrap.servers' = '<broker-list>', 'properties.group.id' = '<group-id>', 'format' = 'json', 'scan.startup.mode' = 'latest-offset', 'json.fail-on-missing-field' = 'false', 'json.ignore-parse-errors' = 'true' );` \`\`
        
    -   For JAR deployments, write a simple Java program using `KafkaConsumer` to inspect message timestamps.
        

### Fix "upsert-kafka tables require to define a PRIMARY KEY constraint"

The Upsert Kafka connector requires a primary key to partition changelog events (INSERT, UPDATE\_AFTER, DELETE) so that messages with the same key land in the same partition and are processed in order.

Add a `PRIMARY KEY ... NOT ENFORCED` declaration to the sink table DDL:

```
CREATE TABLE upsert_kafka_sink (
  id INT,
  name STRING,
  PRIMARY KEY (id) NOT ENFORCED
) WITH (
  'connector' = 'upsert-kafka',
  ...
);
```

* * *

## DataHub

### Resume a deployment after a DataHub topic split or scale-in

A deployment fails and cannot resume after the DataHub topic it reads from is split or scaled in. Cancel the deployment and start it again.

### Can a consumed DataHub topic be deleted?

No. A DataHub topic that is being consumed cannot be deleted or recreated.

* * *

## MaxCompute

### `endPoint` vs. `tunnelEndpoint`

For endpoint details, see [Endpoint](/help/en/maxcompute/user-guide/endpoints#concept-m2j-h1y-5db). Incorrect configuration in a Virtual Private Cloud (VPC) causes these issues:

**Parameter**

**Symptom**

`endPoint` incorrect

Task stops at 91% progress

`tunnelEndpoint` incorrect

Task fails to run

### How MaxCompute source tables read data

Both full and incremental MaxCompute source tables read data through MaxCompute Tunnel. Read speed is limited by the Tunnel bandwidth.

### Appended data not readable after deployment start

After a deployment starts, data appended to a partition or table already being read cannot be read and may trigger a failover.

Full and incremental MaxCompute source tables use `ODPS DOWNLOAD SESSION` to read data. When a download session is created, MaxCompute generates an index file based on the data at that moment. Subsequent reads use this index. Data appended after the session is created is not included.

If new data is written after the session starts:

-   Tunnel reads may fail with: `ErrorCode=TableModified, ErrorMessage=The specified table has been modified since the download initiated.`
    
-   If the deployment recovers from a failover, data accuracy cannot be guaranteed: existing data may be re-read while new data may be incomplete.
    

### Change parallelism after suspending a MaxCompute deployment

For streaming deployments with `useNewApi=true` (the default), parallelism can be changed after suspension. Data in the next partition is distributed using the new parallelism, while the current partition keeps its original distribution. Increasing parallelism while reading a large partition may mean only some operators process that partition's data.

Parallelism changes are **not supported** for batch deployments or deployments with `useNewApi=false`.

### Start offset does not apply to MaxCompute

The start offset only works for message queue sources (for example, DataHub), not MaxCompute. After starting a deployment:

-   For partitioned tables, Flink reads all existing partitions.
    
-   For non-partitioned tables, Flink reads all existing data.
    

### Incomplete partition data in incremental MaxCompute source

No mechanism checks partition data completeness. When a new partition is detected, the source immediately begins reading.

Use `INSERT OVERWRITE` so the partition and its data become available simultaneously:

```
INSERT OVERWRITE TABLE T PARTITION (ds='20191010') ...
```

**Important**

Do not create a partition first and then write data into it. The incremental source starts reading as soon as it detects the partition, potentially reading incomplete data.

### Authorization Failed \[4019\] for MaxCompute

The user identity in the MaxCompute DDL lacks access permissions. Authenticate using an Alibaba Cloud account, a RAM user, or a RAM role. For details, see [User authentication](/help/en/maxcompute/user-guide/user-authentication#concept-zql-zj4-vdb).

### Configure `startPartition` for incremental MaxCompute source

Build the `startPartition` value as follows:

**Step**

**Action**

**Example**

1

Join each partition key column and value with `=`.

`dt=20220901`

2

Sort by partition level (ascending) and separate with commas. No spaces.

`dt=20220901,hh=08,mm=10`

Specify all partition levels or only the first few.

**Partition comparison:** The source compares all partitions alphabetically against `startPartition` and reads those with an equal or greater value.

Example partitions:

-   `ds=20191201,type=a`
    
-   `ds=20191201,type=b`
    
-   `ds=20191202,type=a`
    
-   `ds=20191202,type=b`
    
-   `ds=20191202,type=c`
    
-   `ds=20191203,type=a`
    

`**startPartition**` **value**

**Partitions read**

`ds=20191202`

`ds=20191202,type=a`, `type=b`, `type=c`, `ds=20191203,type=a`

`ds=20191202,type=b`

`ds=20191202,type=b`, `type=c`, `ds=20191203,type=a`

> The partition specified by `startPartition` does not need to exist.

### Incremental MaxCompute source slow to start reading

Too many partitions matching the `startPartition` condition, or too many small files in those partitions, delays startup because the source must sort partition metadata before reading.

-   Avoid reading excessive historical data. Use a batch deployment for historical data processing.
    
-   Reduce the number of small files in historical partitions.
    

### Configure the `partition` parameter for reads and writes

#### Read from static partitions

**Step**

**Action**

**Example**

1

Join partition key and value with `=`. Dimension tables require fixed values. Source tables support wildcards (`*`).

`dt=20220901`, `dt=202209*`, `dt=2022*01`, `dt=*`

2

Sort by partition level, separate with commas.

`dt=20220901,hh=08,mm=10`

For more flexible filtering, use the `WHERE` clause with partition pushdown. Declare partition columns using `PARTITIONED BY` to enable the SQL optimizer:

```
CREATE TABLE maxcompute_table (
  content VARCHAR,
  dt VARCHAR,
  hh VARCHAR
) PARTITIONED BY (dt, hh) WITH (
  'connector' = 'odps',
  ...
);

SELECT content, dt, hh FROM maxcompute_table
WHERE dt >= '20220901' AND dt <= '20220903' AND hh >= '09' AND hh <= '17';
```

#### Read the latest partition

**Function**

**Behavior**

`max_pt()`

Returns the partition ranked first in alphabetical order (typically the latest).

`max_two_pt()`

Returns the first two partitions in alphabetical order.

`max_pt_with_done()`

Returns the first partition that has a corresponding `.done` partner partition.

> For source tables, `max_pt()` reads data from the matching partition once and stops. It does not monitor for new partitions. Use an incremental source table for continuous reads. For dimension tables, each refresh checks for the latest partition.

Use `max_pt_with_done()` when the latest partition may still be loading. Create an empty `.done` partition (for example, `dt=20220901.done`) after data preparation completes. The dimension table reads only from partitions with a `.done` counterpart.

#### Write to static partitions

Configure the `partition` parameter the same way as for reading, but wildcards (`*`) are **not supported** in sink tables.

#### Write to dynamic partitions

List partition key column names in ascending order by partition level, separated by commas:

```
'partition' = 'dt,hh,mm'
```

### `max_pt()` vs. `max_pt_with_done()`

Given these partitions:

-   `ds=20190101`
    
-   `ds=20190101.done`
    
-   `ds=20190102`
    
-   `ds=20190102.done`
    
-   `ds=20190103`
    

**Function**

**Returns**

`max_pt()`

`ds=20190103` (alphabetically first)

`max_pt_with_done()`

`ds=20190102` (first with a `.done` counterpart)

### MaxCompute deployment stays in starting status or slow data generation

Possible causes:

-   **Small files:** Too many small files in the MaxCompute source table.
    
-   **Cross-region access:** The MaxCompute storage cluster and Flink computing cluster are in different regions, causing network latency. Deploy them in the same region.
    
-   **Invalid permissions:** The MaxCompute source table requires Download permission.
    

### Choose a data tunnel: Batch Tunnel vs. Streaming Tunnel

**Consideration**

**Batch Tunnel**

**Streaming Tunnel**

**Consistency**

at-least-once. Duplicates only occur if a checkpoint error happens **and** data is written to multiple partitions simultaneously.

at-least-once. Duplicates may occur on any exception.

**Throughput**

Lower. Data is committed during checkpoints, creating files on the server.

Higher. No checkpoint-time commits. With `numFlushThreads > 1`, flushes data while receiving upstream data.

> If Batch Tunnel checkpoints are slow or timing out and downstream storage tolerates duplicates, switch to Streaming Tunnel.

### Duplicate data written to MaxCompute

Check the following in order:

1.  **SQL logic:** MaxCompute non-transactional tables do not enforce primary key uniqueness, even if a primary key is declared in the DDL. If your SQL produces duplicates, they are written as-is.
    
2.  **Multiple deployments:** Multiple deployments writing to the same MaxCompute table produce duplicate rows.
    
3.  **Batch Tunnel + checkpoint failure:** If a deployment fails during checkpointing, committed data may be written again when the deployment resumes from the previous checkpoint.
    
4.  **Streaming Tunnel + failover:** Data between checkpoints is committed immediately. After a failover, data from the last checkpoint to the failure point may be re-written. Consider switching to Batch Tunnel for stricter deduplication.
    
5.  **Batch Tunnel + cancel/restart (VVR < vvr-6.0.7-flink-1.15):** Data is committed before the connector shuts down during cancellation (for example, by Autopilot optimization). Upgrade to VVR vvr-6.0.7-flink-1.15 or later to fix this.
    

### "Invalid partition spec" error in MaxCompute sink

Partition key values in the data are invalid. Invalid values include empty strings, null, and values containing `=`, `,`, or `/`. Inspect the data for these invalid values.

### "No more available blockId" error in MaxCompute sink

The number of blocks written exceeds the limit, meaning each flush writes too little data too frequently. Increase `batchSize` and `flushIntervalMs` to reduce flush frequency.

### Use `SHUFFLE_HASH` hint for dimension tables

By default, each subtask caches the entire dimension table. For large dimension tables, use `SHUFFLE_HASH` to distribute data across subtasks, reducing JVM heap memory consumption:

```
-- Source table and dimension tables
CREATE TABLE source_table (k VARCHAR, v VARCHAR) WITH ( ... );
CREATE TABLE dim_1 (k VARCHAR, v VARCHAR) WITH ('connector' = 'odps', 'cache' = 'ALL', ... );
CREATE TABLE dim_2 (k VARCHAR, v VARCHAR) WITH ('connector' = 'odps', 'cache' = 'ALL', ... );
CREATE TABLE dim_3 (k VARCHAR, v VARCHAR) WITH ('connector' = 'odps', 'cache' = 'ALL', ... );

-- Apply SHUFFLE_HASH to dim_1 and dim_3; dim_2 remains fully cached per subtask
SELECT /*+ SHUFFLE_HASH(dim_1), SHUFFLE_HASH(dim_3) */
  k, s.v, d1.v, d2.v, d3.v
FROM source_table AS s
INNER JOIN dim_1 FOR SYSTEM_TIME AS OF PROCTIME() AS d1 ON s.k = d1.k
LEFT JOIN dim_2 FOR SYSTEM_TIME AS OF PROCTIME() AS d2 ON s.k = d2.k
LEFT JOIN dim_3 FOR SYSTEM_TIME AS OF PROCTIME() AS d3 ON s.k = d3.k;
```

### Configure `CacheReloadTimeBlackList`

This parameter blocks dimension table cache reloads during specified time periods.

-   **Data type:** String
    
-   **Format:** `start_time -> end_time`, separated by commas for multiple periods.
    
-   **Time format:** `YYYY-MM-DD HH:mm`. Omit the date for daily recurring intervals.
    

Example:

```
'cacheReloadTimeBlackList' = '14:00 -> 15:00,23:00 -> 01:00'
```

**Scenario**

**Value**

Daily interval

`14:00 -> 15:00`

Multiple daily intervals

`14:00 -> 15:00,23:00 -> 01:00`

Specific date interval

`14:00 -> 15:00,23:00 -> 01:00,2025-10-01 22:00 -> 2025-10-01 23:00`

* * *

## MySQL / ApsaraDB RDS for MySQL

### "SSL peer shut down incorrectly" error

This occurs when SSL is enabled on the MySQL server but the client does not use SSL. Append `characterEncoding=utf-8&useSSL=false` to the JDBC URL:

```
'url' = 'jdbc:mysql://<host>:<port>/<database>?characterEncoding=utf-8&useSSL=false'
```

### BIGINT UNSIGNED converted to DECIMAL, then to TEXT in Hologres

Flink does not support `BIGINT UNSIGNED`, so it converts the type to `DECIMAL` based on value range constraints. When synchronizing to Hologres through `CREATE TABLE AS`, the primary key is further converted to `TEXT` because Hologres does not support `DECIMAL` as a primary key.

Adjust the primary key data type during development. To keep the `DECIMAL` column, manually create the Hologres table and either configure a different primary key or omit the primary key entirely. Without a proper primary key, handle deduplication at the application level.

### Upsert vs. insert behavior for ApsaraDB RDS sink tables

**DDL has primary key?**

**Write behavior**

Yes

`INSERT ... ON DUPLICATE KEY UPDATE` -- inserts if the key is new, updates if it exists

No

`INSERT INTO` -- always inserts a new row

### GROUP BY with unique index in ApsaraDB RDS sink

-   Declare the unique index in the `GROUP BY` clause.
    
-   An auto-increment primary key cannot be declared as a primary key in the SQL.
    

### INT UNSIGNED type mapping in Flink SQL

The MySQL JDBC driver converts data types before they reach Flink:

**MySQL physical type**

**JDBC driver type**

**Flink SQL type**

`INT UNSIGNED`

`LONG`

`BIGINT`

`BIGINT UNSIGNED`

`BIGINTEGER`

`DECIMAL(20, 0)`

### "Incorrect string value" error

The data contains characters that the database encoding cannot parse. Add `characterEncoding=UTF-8` to the JDBC URL:

```
'url' = 'jdbc:mysql://<host>:<port>/<database>?characterEncoding=UTF-8'
```

### Deadlock when writing to MySQL through ApsaraDB RDS or TDDL connector

InnoDB row locks operate on indexes rather than individual records. When multiple transactions access overlapping index ranges, deadlocks can occur.

**Example:** Transaction T1 holds a range lock on `(-inf, 2]` and tries to acquire `(-inf, 1]`. Transaction T2 is waiting for `(-inf, 2]`. Both transactions block each other.

**RDS/TDDL vs. Tablestore:**

**Storage**

**Lock granularity**

**Impact**

RDS/TDDL (InnoDB)

Index range lock

Conflicts affect the entire range

Tablestore

Single-row lock

No impact on other rows

**Solution:** For high-QPS or high-concurrency scenarios, use Tablestore as the sink table.

If a relational database is required:

-   Isolate the deployment from other systems' read/write operations.
    
-   Use single-concurrent writes for small data volumes.
    
-   Avoid unique keys if possible. When required, order unique keys by differentiation (highest first).
    
-   Shard databases and tables to avoid single-table bottlenecks.
    

### Schema changes not propagated to downstream table

Schema synchronization is triggered by schema differences between consecutive data records, not by DDL statements alone. If no data is written after a DDL change, downstream schema updates are not triggered. For details, see the "Synchronization policies of table schema changes" section of [CREATE TABLE AS (CTAS)](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement).

### "finish split response timeout" in MySQL CDC source

High CPU utilization prevents the source from responding to coordinator RPC requests. Increase TaskManager CPU cores on the **Resources** tab.

### Schema change during full data reading of MySQL CDC table

A schema change during full data reading may cause errors or prevent schema synchronization. Cancel the deployment, delete the downstream table, and restart without states.

### Unsupported schema changes during CTAS/CDAS synchronization

Cancel the deployment, delete the downstream table, and restart without states. Avoid incompatible schema modifications. For supported changes, see [CREATE TABLE AS statement](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement).

* * *

## ClickHouse

### Retract updated data from a ClickHouse sink table

Retraction is possible when a primary key is declared and `ignoreDelete` is set to `false`, but performance drops significantly. ClickHouse is an OLAP system; `ALTER TABLE UPDATE` and `ALTER TABLE DELETE` operations are inherently slow.

### Data visibility in ClickHouse sink tables

**exactly-once enabled?**

**Data becomes visible when...**

No (default)

The write buffer reaches `batchSize` or the wait time exceeds `flushIntervalMs`

Yes

A checkpoint completes

* * *

## Print

### View print connector output

**Method 1: Realtime Compute for Apache Flink console**

1.  Go to **O&M** > **Deployments** and click the deployment name.
    
2.  Click the **Logs** tab.
    
3.  Select a running job from the **Job** drop-down list.
    
4.  Click the **Running Task Managers** tab, then click the value in the **Path, ID** column.
    
5.  Click the **Logs** tab to view print results.
    

**Method 2: Flink UI**

1.  Go to **O&M** > **Deployments** and click the deployment name.
    
2.  On the **Status** tab, click **Flink UI** in the Actions field.
    
3.  In Apache Flink Dashboard, click **Task Managers**.
    
4.  Click the value in the **Path, ID** column.
    
5.  Click the **Logs** tab to view print results.
    

* * *

## Tablestore

### Dimension join returns no data (Tablestore)

Verify that the column types and names in the DDL match the physical table schema exactly.

* * *

## ApsaraMQ for RocketMQ

### "IllegalArgumentException: timeout value is negative"

The default value of `pullIntervalMs` is `-1`. When no messages arrive for a while, the consumer thread sleeps for this duration, causing the error. Set `pullIntervalMs` to a non-negative value (for example, `0`).

### Partition discovery behavior

**VVR version**

**Detection interval**

**Behavior**

**Delay**

Before 6.0.2

5--10 min

Triggers failover after 3 consecutive detections

10--30 min

6.0.2 or later

5 min

Source operator reads new partitions directly, no failover

1--5 min

* * *

## Hologres

### "BackPressure Exceed reject Limit" error (Hologres)

The Hologres instance is under high write load. Contact Hologres technical support to upgrade the instance.

### "remaining connection slots" error (Hologres)

The number of connections exceeds the Hologres instance limit.

1.  Check `app_name` for each frontend node and count flink-connector connections.
    
2.  Verify whether other deployments are connecting to the same instance.
    
3.  Release idle connections. For details, see [Manage connections](/help/en/hologres/user-guide/manage-connections).
    

### "no table is defined in publication" after table recreation (Hologres)

The publication associated with the dropped table was not cleaned up.

1.  Query orphaned publications:
    
    ```
       SELECT * FROM pg_publication
       WHERE pubname NOT IN (SELECT pubname FROM pg_publication_tables);
    ```
    
2.  Drop the orphaned publication:
    
    ```
       DROP PUBLICATION <publication_name>;
    ```
    
3.  Restart the deployment.
    

### Checkpoint interval and Hologres data visibility

The checkpoint interval is **not** directly tied to data visibility. The Hologres connector periodically flushes data to Hologres independent of checkpoints. If the buffer meets flush conditions, data becomes visible before the next checkpoint.

However, the connector does not provide transactional consistency. Checkpoints force a flush for fault tolerance and recovery, but data may already be partially visible between checkpoints.

### "permission denied for database" (Hologres)

Starting with VVR 8.0.4, Flink uses JDBC mode to consume binary logs from Hologres V2.0 and later, which requires specific permissions for non-superuser accounts.

**Standard PostgreSQL authorization model:**

```
GRANT CREATE ON DATABASE <db_name> TO <user_name>;
ALTER ROLE <user_name> REPLICATION;
```

**Simple Permission Model (SPM):**

```
CALL spm_grant('<db_name>_admin', '<user_name>');
ALTER ROLE <user_name> REPLICATION;
```

Replace `<user_name>` with your Alibaba Cloud account ID or RAM username. For details, see [Account overview](/help/en/hologres/security-and-compliance/overview-16#concept-1597881).

### "table id parsed from checkpoint is different from the current table id"

In VVR 8.0.5 to 8.0.8, Flink verifies table ID consistency during checkpoint recovery for Hologres binary log jobs. This exception indicates the Hologres table was rebuilt (for example, through `TRUNCATE`).

**Solution:**

-   Upgrade to VVR 8.0.9 or later to disable table ID verification.
    
-   Avoid rebuilding the source table. Rebuilding removes historical binary logs, and reading from the new table with the old offset causes data inconsistency.
    

### Decimal precision mismatch in Hologres binary log JDBC mode

In VVR 8.0.10 or earlier, mismatched decimal precision between the Flink source table and the Hologres table causes errors.

**Solution:**

-   Upgrade to VVR 8.0.11 or later.
    
-   Make sure decimal field precision is consistent between the Flink DDL and the Hologres table to prevent data loss from precision truncation.
    

### "no table is defined in publication" or "The table xxx has no slot named xxx" on recreated table (Hologres)

The publication from the dropped table was not deleted.

**Solution 1:**

1.  Query the orphaned publication:
    
    ```
       SELECT * FROM pg_publication
       WHERE pubname NOT IN (SELECT pubname FROM pg_publication_tables);
    ```
    
2.  Drop the publication:
    
    ```
       DROP PUBLICATION <publication_name>;
    ```
    
3.  Restart the job.
    

**Solution 2:**

Upgrade to VVR 8.0.5 or later. The connector automatically cleans up orphaned publications.

* * *

## Simple Log Service

### LogSizeTooLargeException (Simple Log Service)

A single log row exceeds 8 MB (`MAX_BATCH_SIZE_IN_BYTES = 8388608`). Change the deployment start offset to skip the oversized data. For instructions, see [Start a job deployment](/help/en/flink/realtime-flink/user-guide/start-a-deployment).

### OOM on restore from Simple Log Service source

The Simple Log Service connector fetches data in batches controlled by `batchGetSize` (default: `100`). After a failover, a large backlog accumulates. If `single_log_group_size * 100` exceeds available JVM heap memory, an OOM error occurs.

Reduce the `batchGetSize` value.

* * *

## Paimon

### Specify consumer offset for a Paimon source table

Configure `scan.mode` to control the starting position:

**Scan mode**

**Batch read**

**Streaming read**

`default`

Determined by other parameters: `scan.timestamp-millis` triggers `from-timestamp` behavior; `scan.snapshot-id` triggers `from-snapshot` behavior; otherwise behaves as `latest-full`.

Same logic as batch for initial snapshot, then continuous incremental reads.

`latest-full`

Reads the latest snapshot.

Reads the latest snapshot at startup, then produces incremental data.

`compacted-full`

Reads the snapshot after the most recent full compaction.

Reads the post-compaction snapshot at startup, then produces incremental data.

`latest`

Same as `latest-full`.

Produces only incremental data, no initial snapshot.

`from-timestamp`

Reads the latest snapshot at or before `scan.timestamp-millis`.

Produces incremental data from `scan.timestamp-millis`, no initial snapshot.

`from-snapshot`

Reads the snapshot specified by `scan.snapshot-id`.

Produces incremental data from `scan.snapshot-id`, no initial snapshot.

`from-snapshot-full`

Same as `from-snapshot`.

Reads the specified snapshot at startup, then produces incremental data.

### Configure automatic partition expiration (Paimon)

Paimon can automatically delete expired partitions based on the elapsed time since the partition timestamp.

**Parameters:**

**Parameter**

**Purpose**

**Example**

`partition.timestamp-pattern`

Converts partition values to a time string. Use `$column_name` for each partition key.

`$year-$month-$day $hour:00:00`

`partition.timestamp-formatter`

Pattern to parse the time string into a timestamp. Defaults to `yyyy-MM-dd HH:mm:ss` or `yyyy-MM-dd`. Accepts any Java `DateTimeFormatter` pattern.

`yyyy-MM-dd HH:mm:ss`

`partition.expiration-time`

Maximum age before a partition is deleted.

`7d`

**Example:** For partition `year=2023,month=04,day=21,hour=17` with pattern `$year-$month-$day $hour:00:00`, the resolved timestamp is `2023-04-21 17:00:00`.

### TaskManager heartbeat timeout when writing to Paimon

This typically indicates insufficient TaskManager heap memory. Paimon uses heap memory for:

1.  **Write buffer per concurrent task:** Each writer operator has a buffer sized by `write-buffer-size` (default: 256 MB).
    
2.  **ORC format buffer:** Converts in-memory data to columnar format. Sized by `orc.write.batch-size` (default: 1024 rows). Large records amplify memory consumption (for example, a 4 MB JSON field per row uses 4 MB x 1024 = 4 GB).
    
3.  **Per-bucket writers:** Each modified bucket gets a dedicated writer object.
    

**Solutions by cause:**

-   **Large** `**write-buffer-size**`**:** Reduce the value. A value that is too small causes frequent disk writes and compaction, degrading write performance.
    
-   **Large individual records:** Reduce `orc.write.batch-size`, or switch to Avro format with statistics disabled: > **Note:** `file.format` and `metadata.stats-mode` can only be set at table creation time and cannot be changed later through `ALTER TABLE` or SQL hints.
    
    ```
      'file.format' = 'avro',
      'metadata.stats-mode' = 'none'
    ```
    
-   **Too many partitions/buckets:** Verify partition key configuration and bucket count. Target 2--5 GB per bucket. For bucket adjustment, see [Primary key tables and append-only tables](/help/en/flink/realtime-flink/use-cases/basic-concepts).
    

### "Sink materializer must not be used with Paimon sink"

The sink materializer operator (designed to fix out-of-order data from cascaded JOINs) causes incorrect aggregation results and unnecessary overhead with Paimon.

Disable it:

```
SET 'table.exec.sink.upsert-materialize' = 'false';
```

For out-of-order handling alternatives, see [Primary key tables and append-only tables](/help/en/flink/realtime-flink/use-cases/basic-concepts).

### "File deletion conflicts detected" or "LSM conflicts detected" (Paimon)

Possible causes:

1.  **Multiple deployments writing to the same partition:** Restart the failed deployment. Occasional occurrences are normal.
    
2.  **Resumed from outdated state:** The error repeats continuously. Resume from the latest state or restart without states.
    
3.  **Multiple INSERT statements in one deployment:** Paimon does not support this. Use `UNION ALL` to merge data streams before writing.
    
4.  **Global Committer or Compaction Coordinator parallelism > 1:** Both must be set to 1 for data consistency.
    

### "File xxx not found" when reading from Paimon source

Snapshot files have expired. The consumption efficiency is too low or the snapshot expiration time is too short.

-   [Adjust snapshot expiration time](/help/en/flink/realtime-flink/use-cases/clean-up-expired-data)
    
-   [Specify a consumer ID](/help/en/flink/realtime-flink/use-cases/write-and-consume-paimon-table-data) for offset tracking
    
-   [Optimize consumption](/help/en/flink/realtime-flink/use-cases/paimon-performance-optimization)
    

To check available snapshots, see the "Snapshots table" section of [System tables](/help/en/flink/realtime-flink/use-cases/paimon-system-table).

### "No space left on device" (Paimon)

**For lookup joins or** `**changelog-producer=lookup**`**:** Configure these parameters through [SQL hints](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs#c4d92b2f0fl6k):

**Parameter**

**Purpose**

**Recommended values**

`lookup.cache-max-disk-size`

Limit disk usage for lookup cache

256 MB, 512 MB, or 1 GB

`lookup.cache-file-retention`

Cache file retention period

15 min or 30 min

**For general writes:** Configure `write-buffer-spill.max-disk-size` through SQL hints to limit temporary file size.

### Large number of Paimon files in OSS

1.  **Adjust retention policy:** Paimon retains historical files for time-travel access. Reduce the retention period. For details, see [Clean up expired data](/help/en/flink/realtime-flink/use-cases/clean-up-expired-data).
    
2.  **Review partition and bucket configuration:** Target 2--5 GB per bucket. For bucketing guidance, see [Primary key tables and append-only tables](/help/en/flink/realtime-flink/use-cases/basic-concepts).
    
3.  **Enable compression:** Add `'file.compression' = 'zstd'` at table creation to use Zstandard compression. > **Note:** `file.compression` can only be set at table creation time and cannot be changed later through `ALTER TABLE` or SQL hints.
    

### Does the checkpoint interval affect Paimon data visibility?

Yes. Paimon commits data and makes it visible to downstream consumers only at checkpoints. Before a checkpoint, data is flushed to the remote file system but downstream systems are not notified.

### Memory leak in long-running Paimon jobs

Two possible causes:

1.  **Expected behavior:** Memory usage rises proportionally with increasing request rate (RPS).
    
2.  **Known issue:** A memory leak occurs in long-running jobs using a Paimon catalog with `filesystem` metastore type. To resolve this when reading from or writing to OSS, configure these parameters:
    
    -   `fs.oss.endpoint`
        
    -   `fs.oss.accessKeyId`
        
    -   `fs.oss.accessKeySecret`
        

* * *

## Hudi

### No data in storage (Hudi)

Data is flushed to storage when:

-   A bucket reaches 64 MB in memory.
    
-   The total buffer reaches 1 GB.
    
-   A checkpoint is triggered.
    

For streaming writes, make sure checkpointing is enabled.

### Duplicate data (Hudi)

**Within a partition (COW):** Set `write.insert.drop.duplicates` to `true` to enable deduplication. For merge-on-read (MOR), deduplication is automatic when a primary key is defined.

> In Hudi 0.10.0 and later, `write.insert.drop.duplicates` is renamed to `write.precombined` and defaults to `true`.

**Across partitions:** Set `index.global.enabled` to `true`.

**Old data (beyond index TTL):** Increase `index.state.ttl` (unit: days, default: 1.5). Setting it to less than 0 stores the index permanently.

> In Hudi 0.10.0 and later, `index.state.ttl` defaults to `0` (permanent).

### Only log files generated in MOR mode (Hudi)

Hudi generates Parquet files only after compaction. In MOR mode, asynchronous compaction runs at 5-commit intervals by default. Reduce `compaction.delta_commits` to trigger compaction sooner.

* * *

## AnalyticDB for MySQL 3.0

### "multi-statement be found" error

A compatibility issue between MySQL JDBC 8.x and `ALLOW_MULTI_QUERIES=true` in AnalyticDB for MySQL.

**Solution:**

1.  Contact technical support for a custom AnalyticDB for MySQL V3.0 connector built with MySQL JDBC 5.1.46. For usage, see [Manage custom connectors](/help/en/flink/realtime-flink/user-guide/manage-custom-connectors).
    
2.  Add `allowMultiQueries=true` to the JDBC URL:
    
    ```
       jdbc:mysql://<host>.ads.aliyuncs.com:3306/<database>?allowMultiQueries=true
    ```
    

* * *

## Custom connectors

### "No suitable driver found for..."

The custom connector cannot locate its JDBC driver.

**Solution (choose one):**

-   Load the driver in your factory class using `Class.forName("<driver-class>")`.
    
-   Add the driver JAR to **Additional Dependencies** and set the parameter: For instructions, see [How do I configure custom parameters for deployment running?](/help/en/flink/realtime-flink/support/reference)
    
    ```
      kubernetes.application-mode.classpath.include-user-jar: true
    ```
