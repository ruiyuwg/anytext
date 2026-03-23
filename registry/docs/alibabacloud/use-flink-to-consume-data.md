Simple Log Service provides Flink Log Connector to connect to Flink. Open source Flink and Realtime Compute for Apache Flink are supported. This topic describes how to connect Flink to Simple Log Service to consume log data.

## Prerequisites

-   A project and a Logstore are created. For more information, see [Create a project](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb) and [Create a Logstore](/help/en/sls/manage-a-logstore#section-v52-2jx-ndb).
    
-   A Resource Access Management (RAM) user is created, and the required permissions are granted to the RAM user. For more information, see [Create a RAM user and grant permissions to the RAM user](/help/en/sls/using-the-openapi-example#78541bf01a5df).
    
-   The **ALIBABA\_CLOUD\_ACCESS\_KEY\_ID** and **ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET** environment variables are configured. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
    **Important**
    
    -   The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. We recommend that you use the AccessKey pair of a RAM user to call API operations or perform routine O&M.
        
    -   We recommend that you do not save the AccessKey ID or AccessKey secret in your project code. Otherwise, the AccessKey pair may be leaked, and the security of all resources within your account may be compromised.
        
    

## Background information

Flink Log Connector consists of Flink Log Consumer and Flink Log Producer. The following list describes the differences between Flink Log Consumer and Flink Log Producer:

-   Flink Log Consumer reads data from Simple Log Service. Flink Log Consumer supports the exactly-once semantics and load balancing among shards.
    
-   Flink Log Producer writes data to Simple Log Service.
    

Before you use Flink Log Connector, you must add Maven dependencies to your project. Sample code:

```
<dependency>
    <groupId>com.aliyun.openservices</groupId>
    <artifactId>flink-log-connector</artifactId>
    <version>0.1.38</version>
</dependency>
<dependency>
    <groupId>com.google.protobuf</groupId>
    <artifactId>protobuf-java</artifactId>
    <version>2.5.0</version>
</dependency>
```

You can refer to the source code on GitHub to write code in other programming languages. For more information, visit [aliyun-log-flink-connector](https://github.com/aliyun/aliyun-log-flink-connector).

## Flink Log Consumer

Flink Log Consumer can consume log data from a Logstore. The exactly-once semantics is applied during log consumption. Flink Log Consumer detects the change in the number of shards in a Logstore.

Each Flink subtask consumes data from some shards in a Logstore. If the shards in a Logstore are split or merged, the shards consumed by the subtask also change.

When you use Flink Log Consumer to consume data from Simple Log Service, you can call the following API operations:

-   GetCursorOrData
    
    You can call this operation to pull log data from a shard. If you frequently call this operation, data traffic may exceed the capabilities of shards. You can use the ConfigConstants.LOG\_FETCH\_DATA\_INTERVAL\_MILLIS parameter to control the interval of API calls. You can use the ConfigConstants.LOG\_MAX\_NUMBER\_PER\_FETCH parameter to control the number of logs that are pulled by each API call. For more information about the shard capabilities, see [Shard](/help/en/sls/shard#concept-wnn-rqn-vdb).
    
    Example:
    
    ```
    configProps.put(ConfigConstants.LOG_FETCH_DATA_INTERVAL_MILLIS, "100");
    configProps.put(ConfigConstants.LOG_MAX_NUMBER_PER_FETCH, "100");
    ```
    
-   ListShards
    
    You can call this operation to view all shards in a Logstore and the status of each shard. If the shards are frequently split and merged, you can adjust the call interval to detect the changes in the number of shards in a timely manner. Example:
    
    ```
    // Call the ListShards operation once every 30 seconds. 
    configProps.put(ConfigConstants.LOG_SHARDS_DISCOVERY_INTERVAL_MILLIS, "30000");
    ```
    
-   CreateConsumerGroup
    
    You can call this operation to create a consumer group to synchronize checkpoints.
    
-   UpdateCheckPoint
    
    You can call this operation to synchronize Flink snapshots to a consumer group.
    

1.  Configure startup parameters.
    
    The following code provides an example on how to consume data. The java.util.Properties class is used as a configuration tool, and the configurations of Flink Log Consumer are included in the ConfigConstants class.
    
    ```
    Properties configProps = new Properties();
    // Specify the Simple Log Service endpoint. 
    configProps.put(ConfigConstants.LOG_ENDPOINT, "cn-hangzhou.log.aliyuncs.com");
    // In this example, the AccessKey ID and AccessKey secret are obtained from environment variables. 
    String accessKeyId = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
    String accessKeySecret = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
    configProps.put(ConfigConstants.LOG_ACCESSKEYID,accessKeyId);
    configProps.put(ConfigConstants.LOG_ACCESSKEY,accessKeySecret);
    // Specify the project. 
    String project = "your-project";
    // Specify the Logstore. 
    String logstore = "your-logstore";
    // Specify the start position of log consumption. 
    configProps.put(ConfigConstants.LOG_CONSUMER_BEGIN_POSITION, Consts.LOG_END_CURSOR);
    // Specify the method that you want to use for data deserialization. 
    FastLogGroupDeserializer deserializer = new FastLogGroupDeserializer();
    final StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
    DataStream<FastLogGroupList> dataStream = env.addSource(
            new FlinkLogConsumer<FastLogGroupList>(project, logstore, deserializer, configProps)
    );
    dataStream.addSink(new SinkFunction<FastLogGroupList>() {
        @Override
        public void invoke(FastLogGroupList logGroupList, Context context) throws Exception {
            for (FastLogGroup logGroup : logGroupList.getLogGroups()) {
                int logsCount = logGroup.getLogsCount();
                String topic = logGroup.getTopic();
                String source = logGroup.getSource();
                for (int i = 0; i < logsCount; ++i) {
                    FastLog row = logGroup.getLogs(i);
                    for (int j = 0; j < row.getContentsCount(); ++j) {
                        FastLogContent column = row.getContents(j);
                        // Process logs.
                        System.out.println(column.getKey());
                        System.out.println(column.getValue());
                    }
                }
            }
        }
    });
    // You can also use RawLogGroupListDeserializer.
    RawLogGroupListDeserializer rawLogGroupListDeserializer = new RawLogGroupListDeserializer();
    final StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
    DataStream<RawLogGroupList> rawLogGroupListDataStream = env.addSource(
            new FlinkLogConsumer<RawLogGroupList>(project, logstore, rawLogGroupListDeserializer, configProps)
    );
    rawLogGroupListDataStream.addSink(new SinkFunction<RawLogGroupList>() {
        @Override
        public void invoke(RawLogGroupList logGroupList, Context context) throws Exception {
            for (RawLogGroup logGroup : logGroupList.getRawLogGroups()) {
                String topic = logGroup.getTopic();
                String source = logGroup.getSource();
                for (RawLog row : logGroup.getLogs()) {
                    // Process logs.
                }
            }
        }
    });
    ```
    
    **Note**
    
    The number of Flink subtasks is independent of the number of shards in a Logstore. If the number of shards is greater than the number of subtasks, each subtask consumes data from one or more shards. If the number of shards is less than the number of subtasks, some subtasks are idle until new shards are generated. Data of each shard can be consumed by only one subtask.
    
2.  Specify the start position of log consumption.
    
    When you use Flink Log Consumer to consume data from a Logstore, you can use the ConfigConstants.LOG\_CONSUMER\_BEGIN\_POSITION parameter to specify the start position of log consumption. You can start to consume data from the earliest log, the latest log, or a specific point in time. In addition, Flink Log Consumer allows you to resume consumption from a specific consumer group. You can set the parameter to one of the following values:
    
    -   Consts.LOG\_BEGIN\_CURSOR: starts to consume data from the earliest log.
        
    -   Consts.LOG\_END\_CURSOR: starts to consume data from the latest log.
        
    -   Consts.LOG\_FROM\_CHECKPOINT: starts to consume data from a checkpoint that is stored in a specified consumer group. You can use the ConfigConstants.LOG\_CONSUMERGROUP parameter to specify the consumer group.
        
    -   UnixTimestamp: starts to consume data from a point in time. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC. You must specify a string of the INTEGER data type.
        
    
    Example:
    
    ```
    configProps.put(ConfigConstants.LOG_CONSUMER_BEGIN_POSITION, Consts.LOG_BEGIN_CURSOR);
    configProps.put(ConfigConstants.LOG_CONSUMER_BEGIN_POSITION, Consts.LOG_END_CURSOR);
    configProps.put(ConfigConstants.LOG_CONSUMER_BEGIN_POSITION, "1512439000");
    configProps.put(ConfigConstants.LOG_CONSUMER_BEGIN_POSITION, Consts.LOG_FROM_CHECKPOINT);
    ```
    
    **Note**
    
    If you have configured consumption resumption from a state backend of Flink when you start a Flink task, Flink Log Connector uses checkpoints stored in the state backend.
    
3.  **Optional:**Configure consumption progress monitoring.
    
    Flink Log Consumer allows you to monitor consumption progress. You can obtain the real-time consumption position of each shard. The consumption position is indicated by a timestamp. For more information, see [Step 3: View the status of a consumer group](/help/en/sls/log-consumption-by-consumer-group#section-91r-j3o-o2g).
    
    Example:
    
    ```
    configProps.put(ConfigConstants.LOG_CONSUMERGROUP, "your consumer group name");
    ```
    
    **Note**
    
    This step is optional. If no consumer group exists after you configure consumption progress monitoring, Flink Log Consumer creates a consumer group. If a consumer group exists, you do not need to perform operations, and snapshots in Flink Log Consumer are automatically synchronized to the consumer group. You can view the consumption progress of Flink Log Consumer in the Simple Log Service console.
    
4.  Configure consumption resumption and the exactly-once semantics.
    
    If the checkpointing feature of Flink is enabled, Flink Log Consumer periodically stores the consumption progress of each shard. If a subtask fails, Flink restores the subtask and starts to consume data from the latest checkpoint.
    
    The interval at which checkpoints are saved defines the maximum amount of data to be consumed if a subtask fails. You can use the following code to configure the interval:
    
    ```
    final StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
    // Configure the exactly-once semantics. 
    env.getCheckpointConfig().setCheckpointingMode(CheckpointingMode.EXACTLY_ONCE);
    // Save checkpoints every 5 seconds. 
    env.enableCheckpointing(5000);
    ```
    
    For more information about Flink checkpoints, see [Checkpoints](https://ci.apache.org/projects/flink/flink-docs-release-1.3/setup/checkpoints.html).
    

## Flink Log Producer

Flink Log Producer writes data to Simple Log Service.

**Note**

Flink Log Producer supports only the Flink at-least-once semantics. If a task fails, some data that is written to Simple Log Service may be duplicated. However, no data will be lost.

When you use Flink Log Producer to write data to Simple Log Service, you can call the following API operations:

-   PutLogs
    
-   ListShards
    

1.  Initialize Flink Log Producer.
    
    1.  Initialize the Properties parameter.
        
        Flink Log Producer is initialized in the same manner as Flink Log Consumer. The following example shows how to configure the initialization parameters of Flink Log Producer. You can use the default values of the parameters or specify custom values to meet your business requirements. Example:
        
        ```
        // The number of I/O threads that are used to send data. The default value is the number of cores. 
        ConfigConstants.IO_THREAD_NUM
        // The maximum time during which logs can be cached before the logs are sent. Default value: 2000. Unit: milliseconds. 
        ConfigConstants.FLUSH_INTERVAL_MS
        // The total memory size that can be used by the task. Default value: 100. Unit: MB. 
        ConfigConstants.TOTAL_SIZE_IN_BYTES
        // The maximum blocking time for sending logs when the memory usage reaches the upper limit. Default value: 60000. Unit: milliseconds. 
        ConfigConstants.MAX_BLOCK_TIME_MS
        // The maximum number of retries. Default value: 10. 
        ConfigConstants.MAX_RETRIES
        ```
        
    2.  Reload LogSerializationSchema and define the method that is used to serialize data into raw log groups.
        
        A raw log group is a collection of logs. For more information about log fields, see [Log](/help/en/sls/developer-reference/data-model#section-g3j-3mf-sy).
        
        If you want to write data to a specific shard, you can use the LogPartitioner parameter to generate a hash key for log data. This parameter is optional. If you do not configure this parameter, data is written to a random shard.
        
        Example:
        
        ```
        FlinkLogProducer<String> logProducer = new FlinkLogProducer<String>(new SimpleLogSerializer(), configProps);
        logProducer.setCustomPartitioner(new LogPartitioner<String>() {
              // Generate a 32-bit hash key. 
              public String getHashKey(String element) {
                  try {
                      MessageDigest md = MessageDigest.getInstance("MD5");
                      md.update(element.getBytes());
                      String hash = new BigInteger(1, md.digest()).toString(16);
                      while(hash.length() < 32) hash = "0" + hash;
                      return hash;
                  } catch (NoSuchAlgorithmException e) {
                  }
                  return  "0000000000000000000000000000000000000000000000000000000000000000";
              }
          });
        ```
        
2.  Write simulation results to Simple Log Service in the string format. Example:
    
    ```
    // Serialize data into raw log groups. 
    class SimpleLogSerializer implements LogSerializationSchema<String> {
        public RawLogGroup serialize(String element) {
            RawLogGroup rlg = new RawLogGroup();
            RawLog rl = new RawLog();
            rl.setTime((int)(System.currentTimeMillis() / 1000));
            rl.addContent("message", element);
            rlg.addLog(rl);
            return rlg;
        }
    }
    public class ProducerSample {
        public static String sEndpoint = "cn-hangzhou.log.aliyuncs.com";
        // In this example, the AccessKey ID and AccessKey secret are obtained from environment variables. 
        public static String sAccessKeyId = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
        public static String sAccessKey = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
        public static String sProject = "ali-cn-hangzhou-sls-admin";
        public static String sLogstore = "test-flink-producer";
        private static final Logger LOG = LoggerFactory.getLogger(ConsumerSample.class);
        public static void main(String[] args) throws Exception {
            final ParameterTool params = ParameterTool.fromArgs(args);
            final StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
            env.getConfig().setGlobalJobParameters(params);
            env.setParallelism(3);
            DataStream<String> simpleStringStream = env.addSource(new EventsGenerator());
            Properties configProps = new Properties();
            // Specify the Simple Log Service endpoint. 
            configProps.put(ConfigConstants.LOG_ENDPOINT, sEndpoint);
            // Specify the AccessKey ID and AccessKey secret of your account. 
            configProps.put(ConfigConstants.LOG_ACCESSKEYID, sAccessKeyId);
            configProps.put(ConfigConstants.LOG_ACCESSKEY, sAccessKey);
            // Specify the project to which you want to write logs. 
            configProps.put(ConfigConstants.LOG_PROJECT, sProject);
            // Specify the Logstore to which you want to write logs. 
            configProps.put(ConfigConstants.LOG_LOGSTORE, sLogstore);
            FlinkLogProducer<String> logProducer = new FlinkLogProducer<String>(new SimpleLogSerializer(), configProps);
            simpleStringStream.addSink(logProducer);
            env.execute("flink log producer");
        }
        // Simulate log generation. 
        public static class EventsGenerator implements SourceFunction<String> {
            private boolean running = true;
            @Override
            public void run(SourceContext<String> ctx) throws Exception {
                long seq = 0;
                while (running) {
                    Thread.sleep(10);
                    ctx.collect((seq++) + "-" + RandomStringUtils.randomAlphabetic(12));
                }
            }
            @Override
            public void cancel() {
                running = false;
            }
        }
    }
    ```
    

## Consumption example

In this example, Flink Log Consumer stores data that is read to a data stream in the FastLogGroupList format. Then, Flink Log Consumer uses the flatMap function to convert the data from the FastLogGroupList format into the JSON string format and displays the output in the CLI or writes the output to a text file.

```
package com.aliyun.openservices.log.flink.sample;

import com.alibaba.fastjson.JSONObject;
import com.aliyun.openservices.log.common.FastLog;
import com.aliyun.openservices.log.common.FastLogGroup;
import com.aliyun.openservices.log.flink.ConfigConstants;
import com.aliyun.openservices.log.flink.FlinkLogConsumer;
import com.aliyun.openservices.log.flink.data.FastLogGroupDeserializer;
import com.aliyun.openservices.log.flink.data.FastLogGroupList;
import com.aliyun.openservices.log.flink.model.CheckpointMode;
import com.aliyun.openservices.log.flink.util.Consts;
import org.apache.flink.api.common.functions.FlatMapFunction;
import org.apache.flink.api.java.utils.ParameterTool;
import org.apache.flink.configuration.CheckpointingOptions;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.runtime.state.filesystem.FsStateBackend;
import org.apache.flink.streaming.api.CheckpointingMode;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.environment.CheckpointConfig;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;

import java.util.Properties;

public class FlinkConsumerSample {
    private static final String SLS_ENDPOINT = "your-endpoint";
    // In this example, the AccessKey ID and AccessKey secret are obtained from environment variables. 
    private static final String ACCESS_KEY_ID = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
    private static final String ACCESS_KEY_SECRET = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
    private static final String SLS_PROJECT = "your-project";
    private static final String SLS_LOGSTORE = "your-logstore";

    public static void main(String[] args) throws Exception {
        final ParameterTool params = ParameterTool.fromArgs(args);

        Configuration conf = new Configuration();
        // Checkpoint dir like "file:///tmp/flink"
        conf.setString(CheckpointingOptions.CHECKPOINTS_DIRECTORY, "your-checkpoint-dir");
        final StreamExecutionEnvironment env = StreamExecutionEnvironment.createLocalEnvironment(1, conf);
        env.getConfig().setGlobalJobParameters(params);
        env.setParallelism(1);
        env.enableCheckpointing(5000);
        env.getCheckpointConfig().setCheckpointingMode(CheckpointingMode.EXACTLY_ONCE);
        env.getCheckpointConfig().enableExternalizedCheckpoints(CheckpointConfig.ExternalizedCheckpointCleanup.RETAIN_ON_CANCELLATION);
        env.setStateBackend(new FsStateBackend("file:///tmp/flinkstate"));
        Properties configProps = new Properties();
        configProps.put(ConfigConstants.LOG_ENDPOINT, SLS_ENDPOINT);
        configProps.put(ConfigConstants.LOG_ACCESSKEYID, ACCESS_KEY_ID);
        configProps.put(ConfigConstants.LOG_ACCESSKEY, ACCESS_KEY_SECRET);
        configProps.put(ConfigConstants.LOG_MAX_NUMBER_PER_FETCH, "10");
        configProps.put(ConfigConstants.LOG_CONSUMER_BEGIN_POSITION, Consts.LOG_FROM_CHECKPOINT);
        configProps.put(ConfigConstants.LOG_CONSUMERGROUP, "your-consumer-group");
        configProps.put(ConfigConstants.LOG_CHECKPOINT_MODE, CheckpointMode.ON_CHECKPOINTS.name());
        configProps.put(ConfigConstants.LOG_COMMIT_INTERVAL_MILLIS, "10000");

        FastLogGroupDeserializer deserializer = new FastLogGroupDeserializer();
        DataStream<FastLogGroupList> stream = env.addSource(
                new FlinkLogConsumer<>(SLS_PROJECT, SLS_LOGSTORE, deserializer, configProps));

        stream.flatMap((FlatMapFunction<FastLogGroupList, String>) (value, out) -> {
            for (FastLogGroup logGroup : value.getLogGroups()) {
                int logCount = logGroup.getLogsCount();
                for (int i = 0; i < logCount; i++) {
                    FastLog log = logGroup.getLogs(i);
                    JSONObject jsonObject = new JSONObject();
                    jsonObject.put("topic", logGroup.getTopic());
                    jsonObject.put("source", logGroup.getSource());
                    for (int j = 0; j < log.getContentsCount(); j++) {
                        jsonObject.put(log.getContents(j).getKey(), log.getContents(j).getValue());
                    }
                    out.collect(jsonObject.toJSONString());
                }
            }
        }).returns(String.class);

        stream.writeAsText("log-" + System.nanoTime());
        env.execute("Flink consumer");
    }
}
```
