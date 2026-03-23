This topic describes the best practices for the MySQL connector.

## Set the Server ID to avoid Binlog consumption conflicts

Each client that synchronizes database data has a unique server ID. If multiple MySQL CDC source tables share the same server ID, errors of server ID conflicts will occur, so we recommend assigning a different server ID for each client.

-   Server ID configuration
    
    A server ID can be set in the Flink table's DDL statement or via SQL hints.
    
    We recommend that you assign the server ID via SQL hints. For more information about SQL hints, see [SQL hints](https://ci.apache.org/projects/flink/flink-docs-release-1.11/dev/table/sql/hints.html).
    
-   Configuration of server IDs in different scenarios
    
    -   Scenario 1: Incremental snapshot is disabled or the parallelism is 1.
        
        You can specify a Server ID if the incremental snapshot frame is disabled or the degree of parallelism is 1.
        
        ```
        SELECT * FROM source_table /*+ OPTIONS('server-id'='123456') */ ;
        ```
        
    -   Scenario 2: Incremental snapshot is enabled and the parallelism is greater than 1.
        
        Specify a range of server IDs, and ensure that the number of available server IDs within the range is not less than the parallelism. For example, when the parallelism is 3, execute the following statement to set a server ID range:
        
        ```
        SELECT * FROM source_table /*+ OPTIONS('server-id'='123456-123458') */ ;
        ```
        
    -   Data synchronization using CTAS
        
        If you use the CTAS to synchronize data and multiple MySQL CDC sources share the same configurations, the source tables are automatically merged. In this case, you can specify the same server ID for multiple MySQL CDC source tables. For more information, see the "Example 4: execution of multiple CREATE TABLE AS statements" section of the [CREATE TABLE AS statement](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement#section-cnf-jio-mw2) topic.
        
    -   Scenario 4: A job contains multiple MySQL CDC source tables, and the CTAS statement is not used for data synchronization.
        
        If a job contains multiple MySQL CDC source tables, is not synchronized using a CTAS statement, and has Source reuse disabled, you must provide a unique Server ID for each CDC source table (for more information, see [Enable Source reuse to reduce Binlog data connections](#7ed0194377dve)). Similarly, if the incremental snapshot framework is enabled and the degree of parallelism is greater than 1, you must specify a Server ID range.
        
        ```
        select * from 
          source_table1 /*+ OPTIONS('server-id'='123456-123457') */
        left join 
          source_table2 /*+ OPTIONS('server-id'='123458-123459') */
        on source_table1.id=source_table2.id;
        ```
        

## Configure chunk options for memory optimization

When the MySQL CDC source connector is started, the connector scans the whole table whose data needs to be read, splits the table into multiple chunks based on the primary key, and then records the binary log file position at this time. Then, the MySQL CDC source connector implements the incremental snapshot mechanism to read data from each chunk. The Flink job periodically generates checkpoints to record the chunks whose data is read. If a failover occurs, the MySQL CDC connector needs to only continue reading data from the chunks whose data is not read. After the data of all chunks is read, incremental change records are read from the previous binary log file position. The Flink job continues periodically generating checkpoints to record the binary log file position. If a failover occurs, the MySQL CDC connector processes data from the previous binary log file position. This way, the exactly-once semantics is implemented.

For more information about the incremental savepoint algorithm, see [MySQL CDC connector](https://nightlies.apache.org/flink/flink-cdc-docs-release-3.1/docs/connectors/flink-sources/mysql-cdc/) in the Apache Flink documentation.

A table with a single-column primary key is split into chunks based on that key by default. A physical table with a composite primary key is chunked by the first column of the key by default. Realtime Compute for Apache Flink that uses Ververica Runtime (VVR) 6.0.7 or later supports reading data from a table without a primary key. Data in such a table is distributed into chunks based on the non-null column specified by scan.incremental.snapshot.chunk.key-column.

### **Sharding parameter optimization**

Both chunk data and metadata is stored in memory. In case out of memory (OOM) occurs, adjust chunk-related connector options based on specific situations:

-   JobManager
    
    An excessive number of chunks may result in the OOM of the JobManager, which stores data about all chunks. To avoid JobManager OOM, reduce the number of chunks by setting scan.incremental.snapshot.chunk.size to a greater value. You can also configure jobmanager.memory.heap.size to increase the JVM heap memory for the JobManager. For details, see [Memory configuration](https://nightlies.apache.org/flink/flink-docs-master/docs/deployment/config/#jobmanager-memory-heap-size) in the Apache Flink documentation.
    
-   TaskManager
    
    -   An excessive number of rows in a chunk may cause the OOM of the TaskManager, which reads data from each chunk. To avoid TaskManager OOM errors, reduce the number of rows in each chunk by setting scan.incremental.snapshot.chunk.size to a smaller value. You can also assign a greater value to taskmanager.memory.framework.heap.size to increase the JVM heap memory size for the TaskManager.
        
    -   In Realtime Compute for Apache Flink that uses VVR 8.0.8 or earlier, the size of data in the last chunk is usually large and thus is likely to cause TaskManager OOM errors. To resolve this issue, upgrade to VVR 8.0.9 or later.
        
    -   When the first column of the composite key has many duplicate values, the default chunking mechanism that relies on the first primary key column can increase the size of chunks and may cause TaskManager OOM errors. To avoid this, configure scan.incremental.snapshot.chunk.key-column to split the table by a different primary key column.
        

## Adjust job configurations to accelerate reads in the full phase

During the full read phase, the MySQL source table reads snapshot data through a Java Database Connectivity (JDBC) connection. You can accelerate reads in the full phase in the following ways:

1.  Increase the source concurrency to accelerate reads in the full phase.
    
2.  Increase the value of scan.incremental.snapshot.chunk.size to increase the data volume retrieved by a single chunk.
    
3.  If the downstream sink table has a primary key and supports idempotent writes, you can enable scan.incremental.snapshot.backfill.skip to skip reading the binary log for the backfill part. This accelerates processing in the full phase.
    

## **Enable Source Reuse to Reduce Binlog Data Connections**

Source merging is useful for a job with multiple MySQL CDC source tables. It enables Flink to access the binary log via minimum connections necessary to MySQL, reducing the load on the MySQL database. This feature is only supported by the Realtime Compute for Apache Flink connector of MySQL CDC. The Apache Flink connector of MySQL CDC does not support this.

You can use the SET command in an SQL job to enable the Source reuse feature:

```
SET 'table.optimizer.source-merge.enabled' = 'true';
```

We recommend that you enable the Source reuse feature for newly created jobs. If you enable this feature for an existing job, you must perform a stateless start. This is because Source reuse changes the job topology. Starting the job from its previous state may cause a startup failure or data loss.

After source merging is enabled, MySQL CDC source tables with the same configurations are merged. If all MySQL CDC source tables share the same configurations, the number of MySQL connections in the corresponding Flink job is as follows:

-   During snapshot reading, the number of connections equals the source parallelism.
    
-   During incremental reading, the number of connections is 1.
    

**Important**

-   In VVR 8.0.8 and 8.0.9, when you enable CDC source merging, you must also set `SET 'sql-gateway.exec-plan.enabled' = 'false';`.
    
-   After you enable CDC source merging, we do not recommend that you set the `pipeline.operator-chaining` job configuration item to false. If the operator chain is broken, the overhead of serializing and deserializing data sent from the source to downstream operators increases. The more sources that are merged, the greater the overhead.
    
-   In the VVR 8.0.7 real-time computing engine, if you set `pipeline.operator-chaining` to false, a serialization issue occurs.
    

## **Configure binlog parsing options to accelerate incremental reading**

If the MySQL CDC connector is used as a source table or a data ingestion source, the MySQL CDC connector parses binary log files to generate change messages. Binary log files record the change data of all tables. You can use the following methods to accelerate the parsing of binary log data:

-   Enable parallel parsing and parsing filter. This feature is supported only by the Realtime Compute for Apache Flink connector of MySQL CDC in VVR 8.0.7 or later. It is not supported by the Apache Flink connector of MySQL CDC.
    
    -   Enable the `scan.only.deserialize.captured.tables.changelog.enabled` configuration item. This item parses only the change events of specified tables.
        
    -   Enable the `scan.parallel-deserialize-changelog.enabled` configuration item. This item uses multiple threads to parse the binary log file and sequentially sends the parsed data to the consumption queue. When you enable this configuration, you may need to increase the Task Manager CPU.
        
-   Optimize Debezium-related options
    
    ```
    debezium.max.queue.size: 162580
    debezium.max.batch.size: 40960
    debezium.poll.interval.ms: 50
    ```
    
    -   `debezium.max.queue.size`: The maximum number of records that the blocking queue can hold. When Debezium reads an event stream from the database, it places the events in the blocking queue before it writes them downstream. The default value is 8192.
        
    -   `debezium.max.batch.size`: The maximum number of events that the connector can process in each iteration. The default value is 2048.
        
    -   `debezium.poll.interval.ms`: The number of milliseconds that the connector waits before it requests new change events. The default value is 1000 milliseconds, which is 1 second.
        

Example:

```
CREATE TABLE mysql_source (...) WITH (
    'connector' = 'mysql-cdc',
    -- Configure Debezium-related options.
    'debezium.max.queue.size' = '162580',
    'debezium.max.batch.size' = '40960',
    'debezium.poll.interval.ms' = '50',
    -- Enable parallel parsing and parsing filter configuration.
    'scan.only.deserialize.captured.tables.changelog.enabled' = 'true', -- Parses only the change events in the specified tables. 
    'scan.parallel-deserialize-changelog.enabled' = 'true' -- Uses multiple threads to parse events in binlog files. 
    ...
)
```

## Analyze Data Latency and Optimize Job Throughput

If data latency occurs during the incremental phase, you can follow these steps to analyze the issue:

1.  See the \`currentFetchEventTimeLag\` and \`currentEmitEventTimeLag\` metrics in the [Overview](/help/en/flink/realtime-flink/user-guide/metrics#72f400a015uo1). The \`currentFetchEventTimeLag\` metric represents the latency of reading data from the Binlog, while the \`currentEmitEventTimeLag\` metric represents the latency of this process for tables related to a job.
    
    **Scenario description**
    
    **Details**
    
    currentFetchEventTimeLag is relatively small while currentEmitEventTimeLag is relatively large and not updated frequently.
    
    A low currentFetchEventTimeLag indicates low latency for pulling binary logs from the database. However, if the binary logs contain little data for the tables that the job reads, currentEmitEventTimeLag is rarely updated. This is normal.
    
    Both currentFetchEventTimeLag and currentEmitEventTimeLag are large.
    
    This indicates that the pull performance of the Source table is poor. You can follow the steps in this section to optimize it.
    
2.  Check whether backpressure exists, which slows down the streaming of data to the downstream operator. If backpressure exists, the value of the sourceIdleTime metric may periodically increase and the values of the currentFetchEventTimeLag and currentEmitEventTimeLag metrics may continuously increase. To resolve this issue, identify the slow operator and increase its parallelism.
    
3.  Verify whether or not CPU or memory resources are exhausted by checking the [TM CPU Usage](/help/en/flink/realtime-flink/user-guide/metrics#6c6cf31400zv9) metric and the [TM GC Time](/help/en/flink/realtime-flink/user-guide/metrics#3bc7f91eed7lj) metric of JVM. If resource exhaustion does exist, consider scaling up resources to optimize read performance. You can also configure miniBatch options to increase read throughput. For more information, see [Optimize Flink SQL](/help/en/flink/realtime-flink/user-guide/optimize-flink-sql#section-ykq-5y6-xe5).
    
4.  When the SinkUpsertMaterializer operator exists in a job with a large state, read performance is degraded. In this case, increase the job parallelism or do not use the SinkUpsertMaterializer operator. For more information, see [Avoid using SinkUpsertMaterializer](/help/en/flink/realtime-flink/use-cases/processing-changelog-events-out-of-orderness-in-flink-sql#69a91db181gxd). After removing the SinkUpsertMaterializer operator, perform a stateless startup. This is necessary because the job graph has changed, which can cause a stateful startup to fail or result in data loss.
    

## **Enable reading of RDS binary logs to prevent expiration**

You can use ApsaraDB RDS for MySQL as a data source. This enables you to read log backups stored in OSS. When the requested binary log file (specified by a timestamp or position) is stored in OSS, Flink downloads the binary log to its cluster before processing it. When the requested binary log file is available locally, Flink automatically switches to the database connection to read the binary log. This feature is only supported by the Realtime Compute for Apache Flink connector of MySQL CDC. The Apache Flink connector of MySQL CDC does not support this.

To read binary logs from OSS, configure ApsaraDB RDS for MySQL connection options as follows:

```
CREATE TABLE mysql_source (...) WITH (
    'connector' = 'mysql-cdc',
    'rds.region-id' = 'cn-beijing',
    'rds.access-key-id' = 'your_access_key_id',
    'rds.access-key-secret' = 'your_access_key_secret',
    'rds.db-instance-id' = 'rm-xxxxxxxx',  -- The ApsaraDB RDS for MySQL instance ID. 
    'rds.main-db-id' = '12345678', -- The primary database ID. 
    'rds.endpoint' = 'rds.aliyuncs.com'
    ...
)
```

## Synchronize database data and schema changes

For data synchronization tasks, we recommend creating a data ingestion deployment, which is optimized for data integration scenarios. For more information, see [Getting started with a YAML deployment for data ingestion](/help/en/flink/realtime-flink/getting-started/quick-start-for-data-ingestion-yaml-jobs) and [Develop a Flink CDC job (Beta)](/help/en/flink/realtime-flink/user-guide/develop-a-yaml-draft).

The following code snippet shows how a data ingestion deployment synchronizes data and schema changes from the MySQL database named app\_db to Hologres:

```
source:
  type: mysql
  hostname: <hostname>
  port: 3306
  username: ${secret_values.mysqlusername}
  password: ${secret_values.mysqlpassword}
  tables: app_db.\.*
  server-id: 5400-5404

sink:
  type: hologres
  name: Hologres Sink
  endpoint: <endpoint>
  dbname: <database-name>
  username: ${secret_values.holousername}
  password: ${secret_values.holopassword}

pipeline:
  name: Sync MySQL Database to Hologres
```

## Add table feature for data ingestion connectors

The MySQL data ingestion connector provides configuration items for supporting new tables in two scenarios.

**Configuration Item**

**Description**

**Notes**

`scan.newly-added-table.enabled`

Specifies whether to synchronize new tables (which were not discovered at the previous startup) when a deployment is restarted from a checkpoint. If the option is enabled, Flink reads snapshot and incremental data from the new tables.

This item is supported only when the `scan.startup.mode` configuration item is set to initial. This configuration item does not take effect in other startup modes.

`scan.binlog.newly-added-table.enabled`

Specifies whether to synchronize new tables during incremental reading.

-   To synchronize new tables during incremental reading, we recommend enabling this option for the first-time deployment startup. By doing so, the Flink job will automatically parse CREATE TABLE statements and synchronize data to the downstream system. If you restart the deployment with this option configured only after tables are created, data can be lost.
    
-   In the initial startup mode, DDL operations cannot be synchronized to the downstream system before the full phase is complete. If a table is created in the full phase, it cannot be automatically synchronized even if `scan.binlog.newly-added-table.enabled` is enabled.
    

**Important**

We do not recommend that you enable `scan.newly-added-table.enabled` and `scan.binlog.newly-added-table.enabled` at the same time. If you enable both configuration items, data duplication occurs.
