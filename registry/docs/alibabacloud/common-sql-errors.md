This topic provides answers to some frequently asked questions about job running errors.

-   [What do I do if a job cannot be started?](#3020084ff0zm8)
    
-   [How do I fix the database connection error?](#0d0ecc804b8ci)
    
-   [What do I do if data in tasks of a job is not consumed after the job is run?](#0fd442d2d5htw)
    
-   [What do I do if a job restarts unexpectedly?](#342cd0c2f3x16)
    
-   [Why is data output suspended on the LocalGroupAggregate operator?](#220359bc2f3es)
    
-   [What do I do if Kafka partition idleness delays window output?](#f7e29d13f0q90)
    
-   [How do I locate the error if the JobManager is not running?](#aef38f605b1lj)
    
-   [What do I do when the "INFO: org.apache.flink.fs.osshadoop.shaded.com.aliyun.oss" message appears?](#2b935787ddvgo)
    
-   [What do I do if the error message "akka.pattern.AskTimeoutException" appears?](#section-m2r-78k-tkc)
    
-   [What do I do if the error message "Task did not exit gracefully within 180 + seconds." appears?](#section-vl7-vql-dmh)
    
-   [What do I do when the error message "Can not retract a non-existent record. This should never happen." appears?](#section-cfe-s4j-eg8)
    
-   [How can I fix the error message "The GRPC call timed out in sqlserver"?](#18330ab5d15us)
    
-   [How can I resolve the error message "RESOURCE\_EXHAUSTED: gRPC message exceeds maximum size 41943040: 58384051"?](#cfbc041829rt4)
    
-   [What do I do if the error message "Caused by: java.lang.NoSuchMethodError" appears?](#36d0cc61e25e3)
    
-   [What do I do if the error message "java.lang.ClassCastException: org.codehaus.janino.CompilerFactory cannot be cast to org.codehaus.commons.compiler.ICompilerFactory" appears?](#cd0559b584oqa)
    

## **What do I do if a job cannot be started?**

-   **Problem description**
    
    When you click **Start** in the **Actions** column, the job status changes from **STARTING** to **FAILED**.
    
-   **Solutions**
    
    -   **Check the Events tab:** Navigate to the **Events** tab on the job details page. Locate the failure event that occurred when the job failed to start and review its details to identify the root cause.
        
    -   **Review startup logs:** Go to the **Logs** tab and select the **Startup Logs** sub-tab. Check the logs for specific error messages that explain why the job failed to start.
        
    -   **Inspect JobManager/TaskManager logs:** If the JobManager appears to start successfully but the job still fails, check the detailed logs for the JobManager and TaskManagers. These can be found on the Job Manager or Running Task Managers sub-tabs within the Logs tab.
        
-   **Common errors and solutions**
    
    **Problem description**
    
    **Cause**
    
    **Solution**
    
    `**ERROR:exceeded quota: resourcequota**`
    
    The current Resource Queue has insufficient resources to start the job.
    
    Increase resources in the current Resource Queue, or reduce the resources required to start the job.
    
    `**ERROR:the vswitch ip is not enough**`
    
    The current namespace has insufficient IP addresses for the TaskManagers required by the job.
    
    Reduce job parallelism, adjust slot configuration, or modify the vSwitch settings.
    
    `**ERROR: pooler: ***: authentication failed**`
    
    The AccessKey pair is invalid or lacks the required permissions to start the job.
    
    Verify that the AccessKey pair is valid and belongs to an account with the required permissions to execute and manage jobs.
    

## **How do I fix the database connection error?**

-   **Problem description**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1979792471/p917419.png)
    
-   **Cause**
    
    The registered catalog is invalid or unreachable.
    
-   **Solution**
    
    Go to the **Catalogs** page, delete any grayed-out catalogs, and re-register them.
    

## **What do I do if data in tasks of a job is not consumed after the job is run?**

-   **Check network connectivity**
    
    If data is not generated or consumed in upstream and downstream storage, check the **Startup Logs** tab for error messages. If you see timeout errors, troubleshoot network connectivity between storage systems.
    
-   **Check task execution status**
    
    On the **Configuration** tab, verify whether data is being read from the source and written to the sink to pinpoint where the error occurs.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1979792471/p913642.png)
    
-   **Check operator output**
    
    Add a print sink table to each **operator** to troubleshoot the issue.
    

## **What do I do if a job restarts unexpectedly?**

To troubleshoot the error, check the **Logs** tab.

-   View exception information.
    
    On the **JM Exceptions** sub-tab, review the reported error and identify the root cause.
    
-   View JobManager and TaskManager logs for the job.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1979792471/p913694.png)
    
-   View failed TaskManager logs for the job.
    
    Some exceptions may cause TaskManagers to fail, resulting in incomplete logs. View the last invalid TaskManager logs to troubleshoot the issue.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1979792471/p913693.png)
    
-   View historical job instance logs.
    
    Review historical job instance logs to identify the cause of the failure.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1979792471/p913692.png)
    

## **Why is data output suspended on the LocalGroupAggregate operator?**

-   **Code**
    
    ```
    CREATE TEMPORARY TABLE s1 (
      a INT,
      b INT,
      ts as PROCTIME(),
      PRIMARY KEY (a) NOT ENFORCED
    ) WITH (
      'connector'='datagen',
      'rows-per-second'='1',
      'fields.b.kind'='random',
      'fields.b.min'='0',
      'fields.b.max'='10'
    );
    
    CREATE TEMPORARY TABLE sink (
      a BIGINT,
      b BIGINT
    ) WITH (
      'connector'='print'
    );
    
    CREATE TEMPORARY VIEW window_view AS
    SELECT window_start, window_end, a, sum(b) as b_sum FROM TABLE(TUMBLE(TABLE s1, DESCRIPTOR(ts), INTERVAL '2' SECONDS)) GROUP BY window_start, window_end, a;
    
    INSERT INTO sink SELECT count(distinct a), b_sum FROM window_view GROUP BY b_sum;
    ```
    
-   **Problem description**
    
    Data output is suspended on the LocalGroupAggregate operator for an extended period, and the MiniBatchAssigner operator is missing from the job topology.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8411513171/p770115.png)
    
-   **Cause**
    
    The job includes both WindowAggregate and GroupAggregate operators. The WindowAggregate operator uses proctime as the time column. Managed memory is used to cache data in miniBatch processing mode if the `table.exec.mini-batch.size` parameter is not configured or is set to a negative value.
    
    The MiniBatchAssigner operator fails to generate and cannot send watermark messages to compute operators to trigger final calculation and data output. Final calculation and data output are triggered only when one of the following conditions is met: managed memory is full, a CHECKPOINT command is received and checkpointing has not been performed, or the job is canceled. For more information, see [table.exec.mini-batch.size](/help/en/flink/realtime-flink/developer-reference/configuration#bdfd0207785y7). If the checkpoint interval is set to an excessively large value, the LocalGroupAggregate operator does not trigger data output for an extended period.
    
-   **Solutions**
    
    -   Decrease the checkpoint interval so that the LocalGroupAggregate operator triggers data output before checkpointing. For more information about the setting of the checkpoint interval, see [Tuning Checkpointing](https://nightlies.apache.org/flink/flink-docs-release-1.16/docs/ops/state/large_state_tuning/#tuning-checkpointing).
        
    -   Use heap memory to cache data. Data output is triggered automatically when cached data reaches the table.exec.mini-batch.size parameter value. Set the `table.exec.mini-batch.size` parameter to a positive value N. For more information, see [How do I configure custom runtime parameters for a job?](/help/en/flink/realtime-flink/support/reference#124381f0300jp)
        

## What do I do if Kafka partition idleness delays window output?

For example, if the upstream Kafka connector has five partitions but only receives two new data entries per minute, not all partitions receive data. If a partition does not receive any elements within the timeout period, it is marked as temporarily idle. As a result, the watermark cannot move forward, the window cannot close promptly, and results cannot be generated in real time.

Configure a timeout period to mark partitions as idle when they have no data. This excludes idle partitions from watermark calculations. When a partition receives data again, it is included in watermark calculations. See [Configuration](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/dev/table/config/).

Add the following configuration to the **Other Configuration** field in the Parameters section on the Configuration tab. For more information, see [How do I configure custom runtime parameters for a job?](/help/en/flink/realtime-flink/support/reference#124381f0300jp)

```
table.exec.source.idle-timeout: 1s
```

## How do I locate the error if the JobManager is not running?

The **Flink UI** page does not appear because the JobManager is not running as expected. To identify the cause of the error, perform the following steps:

1.  In the left navigation menu of the Development Console, choose **O&M** > **Deployments**. On the **Deployments** page, find the target job deployment and click its name.
    
2.  Click the **Events** tab.
    
3.  To search for errors and obtain error information, use the shortcut keys of the operating system.
    
    -   Windows: Ctrl+F
        
    -   macOS: Command+F
        
    
    ![示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7675487461/p384018.png)
    

## What do I do when the "INFO: org.apache.flink.fs.osshadoop.shaded.com.aliyun.oss" message appears?

-   **Problem description**![报错详情](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2663254361/p258496.png)
    
-   **Cause**
    
    Data is stored in an OSS bucket. When OSS creates a directory, it checks whether the directory already exists. If the directory does not exist, this INFO message is printed. This behavior does not affect your jobs.
    
-   **Solution**
    
    Add the following logger configuration to your log template to suppress this message: `<Logger level="ERROR" name="org.apache.flink.fs.osshadoop.shaded.com.aliyun.oss"/>` For details about how to customize log templates, see [the log configuration topic](/help/en/flink/realtime-flink/user-guide/configure-parameters-to-export-logs-of-a-deployment#task-2559244).
    

## What do I do if the error message "akka.pattern.AskTimeoutException" appears?

-   **Causes**
    
    -   **Cause 1: Frequent garbage collection (GC).** This is due to insufficient JobManager or TaskManager memory. As a result, heartbeat and Remote Procedure Call (RPC) requests between the JobManager and TaskManagers time out.
        
    -   **Cause 2: High volume of RPC requests.** The job generates a large number of RPC requests, but the JobManager does not have enough resources. This causes an RPC backlog and leads to heartbeat and RPC timeouts between the JobManager and TaskManagers.
        
    -   **Cause 3: Timeout values are too small.** The job timeout settings are too low. When Realtime Compute for Apache Flink cannot access a third-party service, it retries multiple times. Because the timeout is too short, the connection failure is not reported before the timeout is reached.
        
-   **Solutions**
    
    -   **Solution 1:** Check the GC frequency and duration based on job memory usage and GC logs. If GC occurs frequently or takes a long time, increase the JobManager and TaskManager memory.
        
    -   **Solution 2:** To handle a high volume of RPC requests, increase the number of CPU cores and the memory size of the JobManager, and set the `akka.ask.timeout` and `heartbeat.timeout` parameters to larger values.
        
        **Important**
        
        -   Adjust the values of the `akka.ask.timeout` and `heartbeat.timeout` parameters only when a large number of RPC requests exist in the job. For jobs with few RPC requests, smaller values of these parameters typically do not cause this issue.
            
        -   Configure these parameters based on your business requirements. If you set them to excessively large values, it takes longer to resume the job when a TaskManager unexpectedly exits.
            
        
    -   **Solution 3:** To handle connection failures of third-party services, increase the values of the following parameters so that connection failures can be reported and resolved:
        
        -   `client.timeout`: Default value: 60. Recommended value: 600. Unit: seconds.
            
        -   `akka.ask.timeout`: Default value: 10. Recommended value: 600 Unit: seconds.
            
        -   `client.heartbeat.timeout`: Default value: 180000. Recommended value: 600000. Unit: seconds.
            
            **Note**
            
            To prevent errors, do not include the unit in the value.
            
        -   `heartbeat.timeout`: Default value: 50000. Recommended value: 600000. Unit: milliseconds.
            
            **Note**
            
            To prevent errors, do not include the unit in the value.
            
        
        For example, if the error message `"Caused by: java.sql.SQLTransientConnectionException: connection-pool-xxx.mysql.rds.aliyuncs.com:3306 - Connection is not available, request timed out after 30000ms"` appears, the MySQL connection pool is full. In this case, you must increase the value of the `connection.pool.size` parameter that is described in the WITH parameters of MySQL. Default value: 20.
        
        **Note**
        
        You can determine the minimum values of the preceding parameters based on the timeout error message. The value in the error message shows you the value from which you can adjust the values of the preceding parameters. For example, "60000 ms" in the error message `"pattern.AskTimeoutException: Ask timed out on [Actor[akka://flink/user/rpc/dispatcher_1#1064915964]] after [60000 ms]."` is the value of the `client.timeout` parameter.
        

## What do I do if the error message "Task did not exit gracefully within 180 + seconds." appears?

-   **Problem description**
    
    ```
    Task did not exit gracefully within 180 + seconds.
    2022-04-22T17:32:25.852861506+08:00 stdout F org.apache.flink.util.FlinkRuntimeException: Task did not exit gracefully within 180 + seconds.
    2022-04-22T17:32:25.852865065+08:00 stdout F at org.apache.flink.runtime.taskmanager.Task$TaskCancelerWatchDog.run(Task.java:1709) [flink-dist_2.11-1.12-vvr-3.0.4-SNAPSHOT.jar:1.12-vvr-3.0.4-SNAPSHOT]
    2022-04-22T17:32:25.852867996+08:00 stdout F at java.lang.Thread.run(Thread.java:834) [?:1.8.0_102]
    log_level:ERROR
    ```
    
-   **Cause**
    
    The error message itself does not show the root cause of the job exception. It indicates that task exit was stuck during job failover or cancellation, and the time the task remained stuck exceeded the default `task.cancellation.timeout` value of 180 seconds. In this case, Realtime Compute for Apache Flink treats the task as unrecoverable, stops the TaskManager that runs the task, and allows failover or cancellation to continue.
    
    This issue is often caused by user-defined functions (UDFs). For example, if the close method in a UDF blocks or does not return for a long time, the task cannot exit.
    
-   **Solution**
    
    For debugging, set the `task.cancellation.timeout` parameter to 0. For more information about how to configure this parameter, see [How do I configure custom runtime parameters for a job?](/help/en/flink/realtime-flink/support/reference#124381f0300jp) When this parameter is set to 0, a blocked task waits indefinitely to exit and no timeout is triggered. If, after you restart the job, failover is triggered again or a task remains stuck for a long time while trying to exit, locate the task in the CANCELLING state, inspect its stack trace, identify the root cause, and fix the issue accordingly.
    
    **Important**
    
    The `task.cancellation.timeout` parameter is intended for job debugging. Do not set this parameter to 0 for jobs in production environments. Instead, use an appropriate timeout value and fix the underlying issue in your UDF or business logic that prevents the task from exiting.
    

## What do I do when the error message "Can not retract a non-existent record. This should never happen." appears?

-   **Problem description**
    
    ```
    java.lang.RuntimeException: Can not retract a non-existent record. This should never happen.
        at org.apache.flink.table.runtime.operators.rank.RetractableTopNFunction.processElement(RetractableTopNFunction.java:196)
        at org.apache.flink.table.runtime.operators.rank.RetractableTopNFunction.processElement(RetractableTopNFunction.java:55)
        at org.apache.flink.streaming.api.operators.KeyedProcessOperator.processElement(KeyedProcessOperator.java:83)
        at org.apache.flink.streaming.runtime.tasks.OneInputStreamTask$StreamTaskNetworkOutput.emitRecord(OneInputStreamTask.java:205)
        at org.apache.flink.streaming.runtime.io.AbstractStreamTaskNetworkInput.processElement(AbstractStreamTaskNetworkInput.java:135)
        at org.apache.flink.streaming.runtime.io.AbstractStreamTaskNetworkInput.emitNext(AbstractStreamTaskNetworkInput.java:106)
        at org.apache.flink.streaming.runtime.io.StreamOneInputProcessor.processInput(StreamOneInputProcessor.java:66)
        at org.apache.flink.streaming.runtime.tasks.StreamTask.processInput(StreamTask.java:424)
        at org.apache.flink.streaming.runtime.tasks.mailbox.MailboxProcessor.runMailboxLoop(MailboxProcessor.java:204)
        at org.apache.flink.streaming.runtime.tasks.StreamTask.runMailboxLoop(StreamTask.java:685)
        at org.apache.flink.streaming.runtime.tasks.StreamTask.executeInvoke(StreamTask.java:640)
        at org.apache.flink.streaming.runtime.tasks.StreamTask.runWithCleanUpOnFail(StreamTask.java:651)
        at org.apache.flink.streaming.runtime.tasks.StreamTask.invoke(StreamTask.java:624)
        at org.apache.flink.runtime.taskmanager.Task.doRun(Task.java:799)
        at org.apache.flink.runtime.taskmanager.Task.run(Task.java:586)
        at java.lang.Thread.run(Thread.java:877)
                        
    ```
    
-   **Causes and solutions**
    
    **Scenario**
    
    **Cause**
    
    **Solution**
    
    Scenario 1
    
    The issue is caused by the `now()` function in the code.
    
    The TopN algorithm does not allow a non-deterministic field to be used in the ORDER BY or PARTITION BY clause. If a non-deterministic field is used, the values returned by the `now()` function are different for each record, and the previous value cannot be found in the state.
    
    Use a deterministic field in the ORDER BY or PARTITION BY clause.
    
    Scenario 2
    
    The `table.exec.state.ttl` parameter is set to an excessively small value. As a result, state entries expire and are deleted, and the required key state cannot be found in the state.
    
    Increase the value of the `table.exec.state.ttl` parameter. For more information about how to configure this parameter, see [How do I configure custom runtime parameters for a job?](/help/en/flink/realtime-flink/support/reference#124381f0300jp)
    

## How can I fix the error message "The GRPC call timed out in sqlserver"?

-   **Problem description**
    
    ```
    org.apache.flink.table.sqlserver.utils.ExecutionTimeoutException: The GRPC call timed out in sqlserver, please check the thread stacktrace for root cause:
    
    Thread name: sqlserver-operation-pool-thread-4, thread state: TIMED_WAITING, thread stacktrace:
        at java.lang.Thread.sleep0(Native Method)
        at java.lang.Thread.sleep(Thread.java:360)
        at org.apache.hadoop.io.retry.RetryInvocationHandler$Call.processWaitTimeAndRetryInfo(RetryInvocationHandler.java:130)
        at org.apache.hadoop.io.retry.RetryInvocationHandler$Call.invokeOnce(RetryInvocationHandler.java:107)
        at org.apache.hadoop.io.retry.RetryInvocationHandler.invoke(RetryInvocationHandler.java:359)
        at com.sun.proxy.$Proxy195.getFileInfo(Unknown Source)
        at org.apache.hadoop.hdfs.DFSClient.getFileInfo(DFSClient.java:1661)
        at org.apache.hadoop.hdfs.DistributedFileSystem$29.doCall(DistributedFileSystem.java:1577)
        at org.apache.hadoop.hdfs.DistributedFileSystem$29.doCall(DistributedFileSystem.java:1574)
        at org.apache.hadoop.fs.FileSystemLinkResolver.resolve(FileSystemLinkResolver.java:81)
        at org.apache.hadoop.hdfs.DistributedFileSystem.getFileStatus(DistributedFileSystem.java:1589)
        at org.apache.hadoop.fs.FileSystem.exists(FileSystem.java:1683)
        at org.apache.flink.connectors.hive.HiveSourceFileEnumerator.getNumFiles(HiveSourceFileEnumerator.java:118)
        at org.apache.flink.connectors.hive.HiveTableSource.lambda$getDataStream$0(HiveTableSource.java:209)
        at org.apache.flink.connectors.hive.HiveTableSource$$Lambda$972/1139330351.get(Unknown Source)
        at org.apache.flink.connectors.hive.HiveParallelismInference.logRunningTime(HiveParallelismInference.java:118)
        at org.apache.flink.connectors.hive.HiveParallelismInference.infer(HiveParallelismInference.java:100)
        at org.apache.flink.connectors.hive.HiveTableSource.getDataStream(HiveTableSource.java:207)
        at org.apache.flink.connectors.hive.HiveTableSource$1.produceDataStream(HiveTableSource.java:123)
        at org.apache.flink.table.planner.plan.nodes.exec.common.CommonExecTableSourceScan.translateToPlanInternal(CommonExecTableSourceScan.java:127)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase.translateToPlan(ExecNodeBase.java:226)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecEdge.translateToPlan(ExecEdge.java:290)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase.lambda$translateInputToPlan$5(ExecNodeBase.java:267)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase$$Lambda$949/77002396.apply(Unknown Source)
        at java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)
        at java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)
        at java.util.ArrayList$ArrayListSpliterator.forEachRemaining(ArrayList.java:1374)
        at java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)
        at java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)
        at java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:708)
        at java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)
        at java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:499)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase.translateInputToPlan(ExecNodeBase.java:268)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase.translateInputToPlan(ExecNodeBase.java:241)
        at org.apache.flink.table.planner.plan.nodes.exec.stream.StreamExecExchange.translateToPlanInternal(StreamExecExchange.java:87)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase.translateToPlan(ExecNodeBase.java:226)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecEdge.translateToPlan(ExecEdge.java:290)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase.lambda$translateInputToPlan$5(ExecNodeBase.java:267)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase$$Lambda$949/77002396.apply(Unknown Source)
        at java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)
        at java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)
        at java.util.ArrayList$ArrayListSpliterator.forEachRemaining(ArrayList.java:1374)
        at java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)
        at java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)
        at java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:708)
        at java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)
        at java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:499)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase.translateInputToPlan(ExecNodeBase.java:268)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase.translateInputToPlan(ExecNodeBase.java:241)
        at org.apache.flink.table.planner.plan.nodes.exec.stream.StreamExecGroupAggregate.translateToPlanInternal(StreamExecGroupAggregate.java:148)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase.translateToPlan(ExecNodeBase.java:226)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecEdge.translateToPlan(ExecEdge.java:290)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase.lambda$translateInputToPlan$5(ExecNodeBase.java:267)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase$$Lambda$949/77002396.apply(Unknown Source)
        at java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)
        at java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)
        at java.util.ArrayList$ArrayListSpliterator.forEachRemaining(ArrayList.java:1374)
        at java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)
        at java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)
        at java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:708)
        at java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)
        at java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:499)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase.translateInputToPlan(ExecNodeBase.java:268)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase.translateInputToPlan(ExecNodeBase.java:241)
        at org.apache.flink.table.planner.plan.nodes.exec.stream.StreamExecSink.translateToPlanInternal(StreamExecSink.java:108)
        at org.apache.flink.table.planner.plan.nodes.exec.ExecNodeBase.translateToPlan(ExecNodeBase.java:226)
        at org.apache.flink.table.planner.delegation.StreamPlanner$$anonfun$1.apply(StreamPlanner.scala:74)
        at org.apache.flink.table.planner.delegation.StreamPlanner$$anonfun$1.apply(StreamPlanner.scala:73)
        at scala.collection.TraversableLike$$anonfun$map$1.apply(TraversableLike.scala:234)
        at scala.collection.TraversableLike$$anonfun$map$1.apply(TraversableLike.scala:234)
        at scala.collection.Iterator$class.foreach(Iterator.scala:891)
        at scala.collection.AbstractIterator.foreach(Iterator.scala:1334)
        at scala.collection.IterableLike$class.foreach(IterableLike.scala:72)
        at scala.collection.AbstractIterable.foreach(Iterable.scala:54)
        at scala.collection.TraversableLike$class.map(TraversableLike.scala:234)
        at scala.collection.AbstractTraversable.map(Traversable.scala:104)
        at org.apache.flink.table.planner.delegation.StreamPlanner.translateToPlan(StreamPlanner.scala:73)
        at org.apache.flink.table.planner.delegation.StreamExecutor.createStreamGraph(StreamExecutor.java:52)
        at org.apache.flink.table.planner.delegation.PlannerBase.createStreamGraph(PlannerBase.scala:610)
        at org.apache.flink.table.planner.delegation.StreamPlanner.explainExecNodeGraphInternal(StreamPlanner.scala:166)
        at org.apache.flink.table.planner.delegation.StreamPlanner.explainExecNodeGraph(StreamPlanner.scala:159)
        at org.apache.flink.table.sqlserver.execution.OperationExecutorImpl.validate(OperationExecutorImpl.java:304)
        at org.apache.flink.table.sqlserver.execution.OperationExecutorImpl.validate(OperationExecutorImpl.java:288)
        at org.apache.flink.table.sqlserver.execution.DelegateOperationExecutor.lambda$validate$22(DelegateOperationExecutor.java:211)
        at org.apache.flink.table.sqlserver.execution.DelegateOperationExecutor$$Lambda$394/1626790418.run(Unknown Source)
        at org.apache.flink.table.sqlserver.execution.DelegateOperationExecutor.wrapClassLoader(DelegateOperationExecutor.java:250)
        at org.apache.flink.table.sqlserver.execution.DelegateOperationExecutor.lambda$wrapExecutor$26(DelegateOperationExecutor.java:275)
        at org.apache.flink.table.sqlserver.execution.DelegateOperationExecutor$$Lambda$395/1157752141.run(Unknown Source)
        at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)
        at java.util.concurrent.FutureTask.run(FutureTask.java:266)
        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1147)
        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:622)
        at java.lang.Thread.run(Thread.java:834)
    
        at org.apache.flink.table.sqlserver.execution.DelegateOperationExecutor.wrapExecutor(DelegateOperationExecutor.java:281)
        at org.apache.flink.table.sqlserver.execution.DelegateOperationExecutor.validate(DelegateOperationExecutor.java:211)
        at org.apache.flink.table.sqlserver.FlinkSqlServiceImpl.validate(FlinkSqlServiceImpl.java:786)
        at org.apache.flink.table.sqlserver.proto.FlinkSqlServiceGrpc$MethodHandlers.invoke(FlinkSqlServiceGrpc.java:2522)
        at io.grpc.stub.ServerCalls$UnaryServerCallHandler$UnaryServerCallListener.onHalfClose(ServerCalls.java:172)
        at io.grpc.internal.ServerCallImpl$ServerStreamListenerImpl.halfClosed(ServerCallImpl.java:331)
        at io.grpc.internal.ServerImpl$JumpToApplicationThreadServerStreamListener$1HalfClosed.runInContext(ServerImpl.java:820)
        at io.grpc.internal.ContextRunnable.run(ContextRunnable.java:37)
        at io.grpc.internal.SerializingExecutor.run(SerializingExecutor.java:123)
        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1147)
        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:622)
        at java.lang.Thread.run(Thread.java:834)
    Caused by: java.util.concurrent.TimeoutException
        at java.util.concurrent.FutureTask.get(FutureTask.java:205)
        at org.apache.flink.table.sqlserver.execution.DelegateOperationExecutor.wrapExecutor(DelegateOperationExecutor.java:277)
        ... 11 more
                        
    ```
    
-   **Cause**
    
    A complex SQL statement is used in the draft. As a result, the RPC execution times out.
    
-   **Solution**
    
    Add the following code to the **Other Configuration** field in the **Parameters** section of the **Configuration** tab to increase the timeout period for the RPC execution. The default timeout period is 120 seconds. For more information, see [How do I configure custom running parameters for a job?](/help/en/flink/realtime-flink/support/reference#124381f0300jp)
    
    ```
    flink.sqlserver.rpc.execution.timeout: 600s
    ```
    

## How can I resolve the error message "RESOURCE\_EXHAUSTED: gRPC message exceeds maximum size 41943040: 58384051"?

-   **Problem description**
    
    ```
    Caused by: io.grpc.StatusRuntimeException: RESOURCE_EXHAUSTED: gRPC message exceeds maximum size 41943040: 58384051
    
    at io.grpc.stub.ClientCalls.toStatusRuntimeException(ClientCalls.java:244)
    
    at io.grpc.stub.ClientCalls.getUnchecked(ClientCalls.java:225)
    
    at io.grpc.stub.ClientCalls.blockingUnaryCall(ClientCalls.java:142)
    
    at org.apache.flink.table.sqlserver.proto.FlinkSqlServiceGrpc$FlinkSqlServiceBlockingStub.generateJobGraph(FlinkSqlServiceGrpc.java:2478)
    
    at org.apache.flink.table.sqlserver.api.client.FlinkSqlServerProtoClientImpl.generateJobGraph(FlinkSqlServerProtoClientImpl.java:456)
    
    at org.apache.flink.table.sqlserver.api.client.ErrorHandlingProtoClient.lambda$generateJobGraph$25(ErrorHandlingProtoClient.java:251)
    
    at org.apache.flink.table.sqlserver.api.client.ErrorHandlingProtoClient.invokeRequest(ErrorHandlingProtoClient.java:335)
    
    ... 6 more
    Cause: RESOURCE_EXHAUSTED: gRPC message exceeds maximum size 41943040: 58384051)
    ```
    
-   **Cause**
    
    The size of JobGraph is excessively large due to complex draft logic. As a result, an error occurs during the verification or the job for the draft fails to get started or be canceled.
    
-   **Solution**
    
    Add the following code to the **Other Configuration** field in the **Parameters** section of the **Configuration** tab. For more information, see [How do I configure custom runtime parameters for a job?](/help/en/flink/realtime-flink/support/reference#124381f0300jp)
    
    ```
     table.exec.operator-name.max-length: 1000
    ```
    

## **What do I do if the error message "Caused by: java.lang.NoSuchMethodError" appears?**

-   **Problem description**
    
    ```
    Error message: Caused by: java.lang.NoSuchMethodError: org.apache.flink.table.planner.plan.metadata.FlinkRelMetadataQuery.getUpsertKeysInKeyGroupRange(Lorg/apache/calcite/rel/RelNode;[I)Ljava/util/Set;
    ```
    
-   **Cause**
    
    If you call an Apache Flink API and Realtime Compute for Apache Flink provides an optimized version, an exception such as a package conflict may occur.
    
-   **Solution**
    
    Restrict your method calls to those explicitly marked with @Public or @PublicEvolving in the source code of Apache Flink. Realtime Compute for Apache Flink ensures compatibility with those methods.
    

## What do I do if the error message "java.lang.ClassCastException: org.codehaus.janino.CompilerFactory cannot be cast to org.codehaus.commons.compiler.ICompilerFactory" appears?

-   **Problem description**
    
    ```
    Causedby:java.lang.ClassCastException:org.codehaus.janino.CompilerFactorycannotbecasttoorg.codehaus.commons.compiler.ICompilerFactory
        atorg.codehaus.commons.compiler.CompilerFactoryFactory.getCompilerFactory(CompilerFactoryFactory.java:129)
        atorg.codehaus.commons.compiler.CompilerFactoryFactory.getDefaultCompilerFactory(CompilerFactoryFactory.java:79)
        atorg.apache.calcite.rel.metadata.JaninoRelMetadataProvider.compile(JaninoRelMetadataProvider.java:426)
        ...66more
    ```
    
-   **Cause**
    
    -   The JAR package contains a Janino dependency that causes a conflict.
        
    -   Specific JAR packages that start with `Flink-` such as `flink-table-planner` and `flink-table-runtime` are added to the JAR package of the UDF or connector.
        
-   **Solutions**
    
    -   Check whether the JAR package contains `org.codehaus.janino.CompilerFactory`. Class conflicts may occur because the class loading sequence on different machines is different. To resolve this issue, perform the following steps:
        
        1.  In the left navigation menu of the Development Console, choose **O&M** > **Deployments**. On the **Deployments** page, find the target job and click its name.
            
        2.  On the **Configuration** tab of the job details page, click **Edit** in the upper-right corner of the **Parameters** section.
            
        3.  Add the following code to the **Other Configuration** field and click **Save**.
            
            ```
            classloader.parent-first-patterns.additional: org.codehaus.janino
            ```
            
            Replace the value of the `classloader.parent-first-patterns.additional` parameter with the conflict class.
            
    -   Specify `<scope>provided</scope>` for Apache Flink dependencies, such as non-connector dependencies whose names start with `flink-` in the `org.apache.flink` group.
