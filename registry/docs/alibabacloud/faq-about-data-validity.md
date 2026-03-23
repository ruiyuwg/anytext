This topic provides answers to some frequently asked questions about data validity.

-   [Why do I get no output in the sink table?](#section-vob-c0t-yr7)
    
-   [How do I troubleshoot Flink source reading issues?](#a8c6606b6ck0i)
    
-   [How do I troubleshoot no output in the downstream system?](#2ff8d3ef5aakp)
    
-   [How do I troubleshoot data losses?](#8e978d5953tcf)
    
-   [Why do I get inaccurate results when using ROW\_NUMBER to deduplicate data ingested from Hologres in CDC mode?](#bab417b7c3ri9)
    
-   [How do I troubleshoot inaccurate results?](#f11539db8be7i)
    
-   [How do I fix the "doesn't support consuming update and delete changes which is produced by node TableSourceScan" error?](#0597be9356uhb)
    
-   [How do I fix unexpected data overwrites or deletions when using the Lindorm connector?](#897f08d55by39)
    

## Why do I get no output in the sink table?

-   **Description**
    
    After a job is started, no data is displayed in the sink table.
    
-   **Troubleshoot the problem**
    
    ![作业排错流程图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6641498471/p86782.png)
    
    1.  **Check whether a failover occurs.**
        
        -   Troubleshooting
            
            Analyze the cause of the failover according to the error message.
            
        -   Solution
            
            Solve the cause to ensure that the job runs as expected.
            
    2.  **Verify that data has entered Realtime Compute for Apache Flink.**
        
        -   Troubleshooting
            
            If no failover occurs but the data latency is excessively high, view the value of the numRecordsInOfSource metric on the monitoring and alerts page to check whether each source has input data.
            
        -   Solution
            
            Check the source table to ensure that data of the source table is sent to Realtime Compute for Apache Flink.
            
    3.  **Check whether data has been filtered out by an operator.**
        
        Add `pipeline.operator-chaining: 'false'` to the **Other Configuration** field. For detailed instructions, see [How do I configure custom running parameters for a job?](/help/en/flink/realtime-flink/support/reference#124381f0300jp) Split operators and observe the input (Bytes Received) and output (Bytes Sent) of each operator to determine the problematic one. If an operator has input but no output, data is filtered out on this operator. This problem is often caused by any of these operators: JOIN, WINDOW, and WHERE.
        
    4.  **Check whether data in the downstream database is cached based on the default caching mechanism.**
        
        Solution: Adjust the batch size of the downstream storage.
        
        **Important**
        
        Using an excessively small batch size may overload the downstream database and cause a performance bottleneck. For example, a batch size of 1 means Flink sends a request for every record processed, which puts strain on the database, especially with high data volumes.
        
    5.  **Check whether the downstream ApsaraDB RDS database has a deadlock.**
        
        Solution: See [Deadlock when writing to MySQL through ApsaraDB RDS or TDDL connector](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-cjs-pvr-mc8)
        

**Note**

Troubleshoot the problem by printing the computing results to logs by using a print sink table. For more information, see [View print connector output](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-874-qcs-m1g)

## How do I troubleshoot Flink source reading issues?

If Realtime Compute for Apache Flink cannot read data from the source, do the following:

-   **Check the network connectivity.**
    
    By default, Realtime Compute for Apache Flink can access only services within its own region and virtual private cloud (VPC). To access resources in other ways, see the following topics:
    
    -   Cross-VPC communication: [How do I access other services across VPCs?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#7e4dbb2506gos)
        
    -   Communication over the Internet: [How do I access the Internet?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#ac35b98525siv)
        
-   **Check the upstream service's whitelist configuration.**
    
    To read data from services such as Kafka and Elasticsearch, add Flink to their whitelists as follows:
    
    1.  Obtain the CIDR block of the vSwitch of your Flink workspace.
        
        For more information about how to obtain the CIDR block, see [How do I configure a whitelist?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#8e4fef7fbbune)
        
    2.  Configure the whitelist for the upstream service.
        
        For more information, see the "Prerequisites" section of the respective connector document, such as [Kafka](/help/en/flink/realtime-flink/developer-reference/kafka-connector/).
        
    
-   **Check the consistency of field types, field order, and** **casing** **of field names between the Flink table and the physical table.**
    
    To ensure consistency between your Flink table and the physical one, follow these guidelines when writing the Flink table's DDL statement:
    
    -   Field order: Replicate the exact field order of the physical table.
        
    -   Field name casing: Use identical casing for field names as in the physical table.
        
    -   Field type: Flink and external services may support different data types. The Flink table's field types must be the mapped equivalent types of the physical table's fields. For details about type mappings between Flink and an external service, see the "Data type mappings" section of the respective connector document, such as [Simple Log Service](/help/en/flink/realtime-flink/developer-reference/log-service-connector#section-fwc-9zu-jmd).
        
-   **Check whether the Taskmanager.log file of the source table contains exception messages.**
    
    If exceptions are reported, troubleshoot the error based on the error message. To view the source table's Taskmanager.log file, perform the following steps:
    
    1.  In the left-side navigation pane of the development console, go to **O&M** > **Deployment**.
        
    2.  Click the name of the target deployment.
        
    3.  Click the **Status** tab and then click the vertex representing the source in the DAG.
        
    4.  In the panel on the right, click the **SubTasks** tab.
        
    5.  In the **More** column, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1589500571/p967584.png) icon and choose **Open TaskManager Log Page**.![TM日志](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9789824361/p320155.png)
        
    6.  On the **Logs** tab, view the log information.
        
        Look for the earliest message containing "Caused by". It usually points to the root cause of the exception. Then, you can troubleshoot the exception based on the message.
        
    
    ## How do I troubleshoot no output in the downstream system?
    
    Troubleshoot the issue by doing the following:
    
    -   **Check the network connectivity.**
        
        By default, Realtime Compute for Apache Flink can access only services within its own region and virtual private cloud (VPC). To access resources in other ways, see the following topics:
        
        -   Cross-VPC communication: [How do I access other services across VPCs?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#7e4dbb2506gos)
            
        -   Communication over the Internet: [How do I access the Internet?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#ac35b98525siv)
            
    -   **Check the downstream system's whitelist configuration.**
        
        To write data to services such as ApsaraDB RDS for MySQL, Kafka, Elasticsearch, AnalyticDB for MySQL 3.0, Apache HBase, Redis, and ClickHouse, you must add Flink to their whitelists:
        
        1.  Obtain the CIDR block of the vSwitch of your Flink workspace.
            
            For more information about how to obtain the CIDR block, see [How do I configure a whitelist?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#8e4fef7fbbune)
            
        2.  Configure the whitelist for the downstream service.
            
            For more information, see the "Prerequisites" section of the respective connector document, such as [ApsaraDB RDS for MySQL](/help/en/flink/realtime-flink/developer-reference/apsaradb-rds-for-mysql-connector).
            
        
    -   **Check the consistency of field types, field order, and** **casing** **of field names between the Flink table and the physical table.**
        
        To ensure consistency between your Flink table and the physical one, follow these guidelines when writing the Flink table's DDL statement:
        
        -   Field order: Replicate the exact field order of the physical table.
            
        -   Field name casing: Use identical casing for field names as in the physical table.
            
        -   Field type: Flink and external services may support different data types. The Flink table's field types must be the mapped equivalent types of the physical table's fields. For details about type mappings between Flink and an external service, see the "Data type mappings" section of the respective connector document, such as [Simple Log Service](/help/en/flink/realtime-flink/developer-reference/log-service-connector#section-fwc-9zu-jmd).
            
    -   **Check whether data is filtered out by intermediate operators, such as WHERE, JOIN, or WINDOW.**
        
        Examine the input and output of each vertex in the job's DAG. For example, if the WHERE vertex has an input of 5 and an output of 0, this indicates data is filtered out by the WHERE operator.
        
    -   Check whether the default values of sink-specific connector options for the downstream system are excessively large.
        
        When input volume is low, excessively high default values of certain sink options can prevent data being flushed to the downstream system. This is because the buffered data in the sink can never reach the default output threshold. To resolve this issue, configure relevant options listed below with smaller values as needed:
        
        **Option**
        
        **Description**
        
        **Relevant downstream service**
        
        batchSize
        
        The size of data written at a time.
        
        -   [DataHub](/help/en/flink/realtime-flink/developer-reference/datahub-connector)
            
        -   [Tablestore](/help/en/flink/realtime-flink/developer-reference/tablestore-connector)
            
        -   [MongoDB](/help/en/flink/realtime-flink/developer-reference/mongodb-connector)
            
        -   [ApsaraDB RDS for MySQL](/help/en/flink/realtime-flink/developer-reference/apsaradb-rds-for-mysql-connector)
            
        -   [AnalyticDB for MySQL V3.0](/help/en/flink/realtime-flink/developer-reference/analyticdb-for-mysql-v3-0-connector)
            
        -   [ClickHouse](/help/en/flink/realtime-flink/developer-reference/clickhouse-connector)
            
        -   [TSDB for InfluxDB](/help/en/flink/realtime-flink/developer-reference/tsdb-for-influxdb-connector)
            
        
        batchCount
        
        The maximum number of data records written at a time.
        
        [DataHub](/help/en/flink/realtime-flink/developer-reference/datahub-connector)
        
        flushIntervalMs
        
        The flush interval for the MaxCompute Tunnel Writer buffer.
        
        [MaxCompute](/help/en/flink/realtime-flink/developer-reference/maxcompute-connector)
        
        sink.buffer-flush.max-size
        
        The size of data to buffer in memory before writing to HBase, in bytes. A larger value improves the write performance of HBase but increases write latency and memory usage.
        
        [ApsaraDB for HBase](/help/en/flink/realtime-flink/developer-reference/apsaradb-for-hbase-connector)
        
        sink.buffer-flush.max-rows
        
        The number of data records to buffer in memory before writing to HBase. A larger value improves the write performance of HBase but increases write latency and memory usage.
        
        [ApsaraDB for HBase](/help/en/flink/realtime-flink/developer-reference/apsaradb-for-hbase-connector)
        
        sink.buffer-flush.interval
        
        The interval at which buffered data is periodically written to HBase. This parameter controls the write latency.
        
        [ApsaraDB for HBase](/help/en/flink/realtime-flink/developer-reference/apsaradb-for-hbase-connector)
        
        jdbcWriteBatchSize
        
        The maximum number of rows of data that can be processed by a Hologres streaming sink node at a time when a JDBC driver is used.
        
        [Hologres](/help/en/flink/realtime-flink/developer-reference/hologres-connector/)
        
    -   **Check whether data cannot be output because of out-of-order data in windowed operations.**
        
        Consider this scenario: The initial record's timestamp is 2100, and the watermark is also 2100. The system assumes that data before 2100 has been processed and it processes data only after this time. It discards subsequent records with timestamps such as 2021 because they are less than the watermark 2100. The current event-time window cannot be closed and no results are computed until a record with a timestamp older than 2100 arrives.
        
        To verify out-of-order data in the source, you can use a print sink table or examine the Log4j logs. For more information, see [Create a print sink table](/help/en/flink/print-sink-table#concept-2014354) and [Configure log output](/help/en/flink/realtime-flink/user-guide/configure-parameters-to-export-logs-of-a-deployment#task-2559244). If you confirm there are out-of-order records, filter them out or allow late records to be processed.
        
    -   **Verify all parallel source operators have input.**
        
        When a source subtask receives no input, its watermark remains at the default value: 1970-01-01T00:00:00Z. This becomes the source operator's overall watermark. As a result, windows fail to close, preventing data output.
        
        To troubleshoot, examine the job's DAG and ensure all source subtasks receive input. If any vertex receives no input, reduce the job parallelism to match the upstream table's shard count to ensure all subtasks receive input.
        
    -   **Confirm all Kafka partitions contain data.**
        
        An empty Kafka partition can prevent watermark generation. For more information and the solution, see [Why does an event time window produce no output from a Kafka source table?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-5gn-pjr-ti2)
        
    

## How do I troubleshoot data losses?

Data volume reductions often result from filtering operations such as where clauses, joins, or windowed operations. To investigate abnormal data losses, do the following:

-   **Check the cache policy for the dimension table.**
    
    Configure an appropriate cache policy for the dimension table to prevent lookup join failures and data losses. For more information, see cache-related, dimension table-specific options of the relevant connector document (such as the "[Specific to dimension tables (such as Cache parameters)](/help/en/flink/realtime-flink/developer-reference/apsaradb-for-hbase-connector#fefdd0f1ceta8)" section of the [ApsaraDB for HBase](/help/en/flink/realtime-flink/developer-reference/apsaradb-for-hbase-connector) topic).
    
-   **Verify functions are correctly used.**
    
    Incorrect use of functions like `to_timestamp_tz` and `date_format` can cause data conversion errors and data losses.
    
    Verify function usage through log analysis by using a print sink table or Log4j. For more information, see [Print](/help/en/flink/realtime-flink/developer-reference/print-connector) and [Configure log output](/help/en/flink/realtime-flink/user-guide/configure-parameters-to-export-logs-of-a-deployment#task-2559244).
    
-   **Check whether out-of-order data exists.**
    
    Late events outside the current window's timeframe are discarded. In the following figure, an event with timestamp 11s enters a 15-20s window. Because its watermark is 11, it is considered late and discarded.![乱序](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4018258361/p332292.png)
    
    Data is usually lost during a single window. You can use a print sink table or Log4j to detect out-of-order data. For more information, see [Print](/help/en/flink/realtime-flink/developer-reference/print-connector) and [Configure log output](/help/en/flink/realtime-flink/user-guide/configure-parameters-to-export-logs-of-a-deployment#task-2559244).
    
    To handle out-of-order data accurately, configure an appropriate watermark generation strategy (such as Watermark = Event time - 5s). Furthermore, we recommend aligning windows to exact day, hour, or minute intervals. This practice, along with an increased grace period, helps prevent highly out-of-order data from being lost.
    

## **Why do I get inaccurate results when using ROW\_NUMBER to deduplicate data ingested from Hologres in CDC mode?**

-   **Inaccurate results**
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6641498471/p912912.png)
    
-   **Cause**
    
    The downstream uses a retraction operator (such as ROW\_NUMBER OVER WINDOW for deduplication), but data is not ingested from Hologres in upsert mode.
    
-   **Solution**
    
    Add `'upsertSource' = 'true'` in the WITH clause of the source table's DDL statement for data deduplication.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6641498471/p912914.png)
    

## **How do I troubleshoot inaccurate results?**

1.  **Adjust the log level.**
    
    [Change the log level to INFO](/help/en/flink/realtime-flink/user-guide/change-the-log-level-for-a-running-deployment).
    
2.  **Enable** [operator profiling](/help/en/flink/realtime-flink/user-guide/operators-observing)**.**
    
    You can view the intermediate results without modifying the program logic.
    
3.  **Analyze runtime logs.**
    
    1.  Click the target deployment's name.
        
    2.  On the deployment details page, click the **Status** tab.
        
    3.  In the DAG graph, copy an operator name.
        
    4.  In the deployment's log list, for the **Log Name** column, click `inspect-taskmanager_0.out`, and search the operator name.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1589500571/p968167.png)
    
4.  **Perform optimization and verification.**
    
    After finding the cause in the logs, revise the problematic operator's logic, restart the job, and verify data accuracy.
    

## How do I fix the "`doesn't support consuming update and delete changes which is produced by node TableSourceScan`" error?

-   Error message
    
    ```
    Table sink 'vvp.default.***' doesn't support consuming update and delete changes which is produced by node TableSourceScan(table=[[vvp, default, ***]], fields=[id,b, content])
        at org.apache.flink.table.sqlserver.execution.DelegateOperationExecutor.wrapExecutor(DelegateOperationExecutor.java:286)
        at org.apache.flink.table.sqlserver.execution.DelegateOperationExecutor.validate(DelegateOperationExecutor.java:211)
        at org.apache.flink.table.sqlserver.FlinkSqlServiceImpl.validate(FlinkSqlServiceImpl.java:741)
        at org.apache.flink.table.sqlserver.proto.FlinkSqlServiceGrpc$MethodHandlers.invoke(FlinkSqlServiceGrpc.java:2522)
        at io.grpc.stub.ServerCalls$UnaryServerCallHandler$UnaryServerCallListener.onHalfClose(ServerCalls.java:172)
        at io.grpc.internal.ServerCallImpl$ServerStreamListenerImpl.halfClosed(ServerCallImpl.java:331)
        at io.grpc.internal.ServerImpl$JumpToApplicationThreadServerStreamListener$1HalfClosed.runInContext(ServerImpl.java:820)
        at io.grpc.internal.ContextRunnable.run(ContextRunnable.java:37)
        at io.grpc.internal.SerializingExecutor.run(SerializingExecutor.java:123)
        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1147)
        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:622)
        at java.lang.Thread.run(Thread.java:834)
    ```
    
-   Cause
    
    The sink table's write mode is append-only, so it can't consume data updates.
    
-   Solution
    
    Create a sink table that supports update events by using connectors such as [Upsert Kafka](/help/en/flink/realtime-flink/developer-reference/upsert-kafka-connector).
    

## **How do I fix unexpected data overwrites or deletions when using the Lindorm connector?**

### Description

By default, the Lindorm connector uses the `upsert materialize` operator (with its default value `AUTO`) for data writing. This operator generates a DELETE followed by an INSERT for the same primary key. Because Lindorm manages data versions with millisecond timestamps, if multiple events with the same primary key are written within a single millisecond, the system may struggle to establish their accurate order. This can lead to unexpected data overwrites or deletions.

### **Cause**

-   **Timestamp precision**: Lindorm manages data versions with millisecond timestamps. If multiple records with the same primary key are written within the same millisecond, the system may not be able to determine the correct order, causing version conflicts.
    
-   **Write semantic differences**: Lindorm only supports the UPSERT syntax (existing rows are updated with new values) and lacks native DELETE support, making deletions irreversible. Therefore, the order-maintenance logic of the `upsert materialize` operator is rendered meaningless in Lindorm scenarios and may cause data anomalies from the DELETE + INSERT operations.
    

### **Risks and impacts**

Concurrent writes within a single millisecond may result in unexpected DELETE and INSERT combinations, causing data loss or state incorrectness.

### **Solution**

Explicitly disable the `upsert materialize` operator.

**Applicable scenarios**: Ideal for use cases where data is written to Lindorm through Flink.

**Configuration:** Globally disable the operator in job runtime parameter configurations or SQL code by adding the following statement:

```
SET 'table.exec.sink.upsert-materialize' = 'NONE';
```

**Notes**: After disabling this operator, only eventual consistency is guaranteed. Make sure this is acceptable for your business application.
