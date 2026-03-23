After log data is collected to Simple Log Service (SLS), you can use Spark Streaming to consume the data.

## **Usage notes**

Spark Streaming supports only Spark 2.x versions.

The Spark SDK provided by Alibaba Cloud allows you to consume log data from SLS in Receiver or Direct mode. You must add the following Maven dependencies:

```
<dependency>
  <groupId>com.aliyun.emr</groupId>
  <artifactId>emr-logservice_2.11</artifactId>
  <version>1.7.2</version>
</dependency>
```

## Consume log data in Receiver mode

In Receiver mode, a consumer group consumes data from SLS and temporarily stores the data in a Spark executor. After a Spark Streaming job is started, the consumer group reads and processes data from the Spark executor. Each log entry is returned as a JSON string. The consumer group periodically saves checkpoints to SLS. You do not need to update checkpoints. For more information, see [Use consumer groups to consume log data](/help/en/sls/log-consumption-by-consumer-group#concept-dv4-xnq-zdb).

-   Parameters
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    project
    
    String
    
    The name of the project in SLS.
    
    logstore
    
    String
    
    The name of the logstore in SLS.
    
    consumerGroup
    
    String
    
    The name of the consumer group.
    
    endpoint
    
    String
    
    The endpoint of the region where the SLS project resides. For more information, see [Endpoints](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint).
    
    accessKeyId
    
    String
    
    The AccessKey ID that is used to access SLS.
    
    accessKeySecret
    
    String
    
    The AccessKey secret that is used to access SLS.
    
-   Example
    
    **Note**
    
    In Receiver mode, data loss may occur if the default configurations are used. To avoid data loss, enable the Write-Ahead Logs feature. This feature is available in Spark 1.2 or later. For more information about the Write-Ahead Logs feature, see [Spark](https://spark.apache.org/docs/latest/streaming-programming-guide.html#deploying-applications).
    
    ```
    import org.apache.spark.storage.StorageLevel
    import org.apache.spark.streaming.aliyun.logservice.LoghubUtils
    import org.apache.spark.streaming.{ Milliseconds, StreamingContext}
    import org.apache.spark.SparkConf
    
    object TestLoghub {
      def main(args: Array[String]): Unit = {
        if (args.length < 7) {
          System.err.println(
            """Usage: TestLoghub <project> <logstore> <loghub group name> <endpoint>
              |         <access key id> <access key secret> <batch interval seconds>
            """.stripMargin)
          System.exit(1)
        }
    
        val project = args(0)
        val logstore = args(1)
        val consumerGroup = args(2)
        val endpoint = args(3)
        val accessKeyId = args(4)
        val accessKeySecret = args(5)
        val batchInterval = Milliseconds(args(6).toInt * 1000)
    
        def functionToCreateContext(): StreamingContext = {
          val conf = new SparkConf().setAppName("Test Loghub")
          val ssc = new StreamingContext(conf, batchInterval)
          val loghubStream = LoghubUtils.createStream(
            ssc,
            project,
            logstore,
            consumerGroup,
            endpoint,
            accessKeyId,
            accessKeySecret,
            StorageLevel.MEMORY_AND_DISK)
    
          loghubStream.checkpoint(batchInterval * 2).foreachRDD(rdd =>
            rdd.map(bytes => new String(bytes)).top(10).foreach(println)
          )
          ssc.checkpoint("hdfs:///tmp/spark/streaming") // set checkpoint directory
          ssc
        }
    
        val ssc = StreamingContext.getOrCreate("hdfs:///tmp/spark/streaming", functionToCreateContext _)
    
        ssc.start()
        ssc.awaitTermination()
      }
    }
    ```
    

## Consume log data in Direct mode

In Direct mode, no consumer group is required. Call API operations to request data from SLS. Consuming log data in Direct mode has the following benefits:

-   Simplified concurrency. The number of Spark partitions is the same as the number of shards in a logstore. Split shards to improve the concurrency of tasks.
    
-   Increased efficiency. You no longer need to enable the Write-Ahead Logs feature to prevent data loss.
    
-   Exactly-once semantics. Data is directly read from SLS. Checkpoints are submitted after a task is successful.
    
    In some cases, data may be repeatedly consumed if a task ends due to an unexpected exit of Spark.
    

You must configure the ZooKeeper service when you consume data in Direct mode. This service is used to save the data in the intermediate state. You must set a checkpoint directory in the ZooKeeper service to store the intermediate data. To re-consume data after you restart a task, you must delete the corresponding directory from ZooKeeper and change the name of the consumer group.

-   Parameters
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    project
    
    String
    
    The name of the project in SLS.
    
    logstore
    
    String
    
    The name of the logstore in SLS.
    
    consumerGroup
    
    String
    
    The name of the consumer group. This name is used only to save consumption checkpoints.
    
    endpoint
    
    String
    
    The endpoint of the region where the SLS project resides. For more information, see [Endpoints](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint).
    
    accessKeyId
    
    String
    
    The AccessKey ID that is used to access SLS.
    
    accessKeySecret
    
    String
    
    The AccessKey secret that is used to access SLS.
    
    zkAddress
    
    String
    
    The connection URL of the ZooKeeper service.
    
-   Consumption limits
    
    Spark Streaming consumes data from each shard in a single batch. You must specify the number of log entries that are consumed in each batch.
    
    In SLS, a log group serves as the basic unit for each write request. For example, a write request may contain multiple log entries. These log entries are stored and consumed as a log group. When you use web tracking to write logs, each write request contains only one log entry. In this case, the log group that corresponds to the request contains only one log entry. Specify parameters to limit the amount of log data in a single batch. The following table lists the two parameters.
    
    **Parameter**
    
    **Description**
    
    **Default**
    
    spark.loghub.batchGet.step
    
    The maximum number of log groups that are returned for a single consumption request.
    
    100
    
    spark.streaming.loghub.maxRatePerShard
    
    The maximum number of log entries that are consumed from each shard in a single batch.
    
    10000
    
    Set the maximum number of log entries that are consumed from each shard in each batch by specifying the spark.streaming.loghub.maxRatePerShard parameter. The Spark SDK consumes log data from SLS by obtaining the number of log groups from the spark.loghub.batchGet.step parameter and accumulating the number of log entries in these log groups. When the accumulated number reaches or exceeds the specified number in the spark.streaming.loghub.maxRatePerShard parameter, the Spark SDK stops consuming log data. The spark.streaming.loghub.maxRatePerShard parameter does not precisely control the number of consumed log entries in each batch. The number of consumed log entries in each batch is based on the spark.loghub.batchGet.step parameter and the number of log entries in each log group.
    
-   Example
    
    ```
    import com.aliyun.openservices.loghub.client.config.LogHubCursorPosition
    import org.apache.spark.SparkConf
    import org.apache.spark.streaming.{ Milliseconds, StreamingContext}
    import org.apache.spark.streaming.aliyun.logservice.{ CanCommitOffsets, LoghubUtils}
    
    object TestDirectLoghub {
      def main(args: Array[String]): Unit = {
        if (args.length < 7) {
          System.err.println(
            """Usage: TestDirectLoghub <project> <logstore> <loghub group name> <endpoint>
              |         <access key id> <access key secret> <batch interval seconds> <zookeeper host:port=localhost:2181>
            """.stripMargin)
          System.exit(1)
        }
    
        val project = args(0)
        val logstore = args(1)
        val consumerGroup = args(2)
        val endpoint = args(3)
        val accessKeyId = args(4)
        val accessKeySecret = args(5)
        val batchInterval = Milliseconds(args(6).toInt * 1000)
        val zkAddress = if (args.length >= 8) args(7) else "localhost:2181"
    
        def functionToCreateContext(): StreamingContext = {
          val conf = new SparkConf().setAppName("Test Direct Loghub")
          val ssc = new StreamingContext(conf, batchInterval)
          val zkParas = Map("zookeeper.connect" -> zkAddress,
            "enable.auto.commit" -> "false")
          val loghubStream = LoghubUtils.createDirectStream(
            ssc,
            project,
            logStore,
            consumerGroup,
            accessKeyId,
            accessKeySecret,
            endpoint,
            zkParas,
            LogHubCursorPosition.END_CURSOR)
    
          loghubStream.checkpoint(batchInterval).foreachRDD(rdd => {
            println(s"count by key: ${rdd.map(s => {
              s.sorted
              (s.length, s)
            }).countByKey().size}")
            loghubStream.asInstanceOf[CanCommitOffsets].commitAsync()
          })
          ssc.checkpoint("hdfs:///tmp/spark/streaming") // set checkpoint directory
          ssc
        }
    
        val ssc = StreamingContext.getOrCreate("hdfs:///tmp/spark/streaming", functionToCreateContext _)
        ssc.start()
        ssc.awaitTermination()
      }
    }
    ```
    

For more information, visit [GitHub](https://github.com/aliyun/aliyun-emapreduce-sdk/tree/master-2.x/emr-logservice/src/main).
