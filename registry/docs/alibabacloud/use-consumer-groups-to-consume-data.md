Simple Log Service allows third-party software, applications in various programming languages, cloud services, and stream computing frameworks to consume data in real time by calling Simple Log Service SDK. During a call of the SDK, you can create consumer groups to consume data within seconds. This topic describes how to use consumer groups to consume data.

## **Workflow**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9188700271/CAEQJxiBgMCw3KvhgxkiIGIwMzE2ZjQ0ZmNmYTRlMzliZTUwMDY0ZGU4OGE3OTcw4407027_20240508112826.371.svg)

A Logstore has multiple shards. Simple Log Service allocates shards to the consumers in a consumer group based on the following rules:

-   Each shard can be allocated to only one consumer.
    
-   A consumer can consume data from multiple shards.
    

After a new consumer is added to a consumer group, shards that are allocated to the consumers in the consumer group are reallocated to each consumer for load balancing. The shards are reallocated based on the preceding rules.

**Note**

If you use consumer groups to consume data, Simple Log Service automatically stores checkpoints when an error occurs in your program. Consumers can resume data consumption from a checkpoint without repeatedly consuming data after a program recovers.

#### **Prerequisites**[**​**](https://sls.aliyun.com/doc/spldataprocessdemo/java_sdk_sql_consumer.html#%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6)

-   A Resource Access Management (RAM) user is created, and the required permissions are granted to the RAM user. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service).
    
-   If you use the RAM user to manage consumer groups, make sure that the RAM user is granted the required permissions. For more information, see [RAM user authorization](#section-yrp-xfr-7va).
    
-   The **ALIBABA\_CLOUD\_ACCESS\_KEY\_ID** and **ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET** environment variables are configured. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
    **Important**
    
    -   The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. We recommend that you use the AccessKey pair of a RAM user to call API operations or perform routine O&M.
        
    -   We recommend that you do not include your AccessKey ID or AccessKey secret in your project code. Otherwise, the AccessKey pair may be leaked and the security of all resources within your account may be compromised.
        
    
-   An SDK development environment is set up. For more information, see [Overview of Simple Log Service SDK](/help/en/sls/developer-reference/overview-of-log-service-sdk#reference-n3h-2sq-zdb).
    

## Terms

**Term**

**Description**

consumer group

You can use consumer groups to consume data in Simple Log Service. A consumer group consists of multiple consumers. All consumers in a consumer group consume data in the same Logstore. Consumers do not repeatedly consume data.

**Important**

You can create up to 30 consumer groups for a Logstore.

consumer

The consumers in a consumer group consume data.

**Important**

The names of consumers in a consumer group must be unique.

Logstore

A Logstore is used to collect, store, and query data. For more information, see [Logstore](/help/en/sls/logstore#concept-btb-4qn-vdb).

shard

A shard is used to control the read and write capacity of a Logstore. In Simple Log Service, data is stored in shards. For more information, see [Shard](/help/en/sls/shard#concept-wnn-rqn-vdb).

checkpoint

A checkpoint is the position at which a program stops consuming data. If a program is restarted, the program consumes data from the last checkpoint.

## Step 1: Create a consumer group

## Call an API operation to create a consumer group

For more information about how to call an API operation to create a consumer group, see [CreateConsumerGroup](/help/en/sls/developer-reference/api-sls-2020-12-30-createconsumergroup).

For more information about how to check whether a consumer group is created, see [ListConsumerGroup](/help/en/sls/developer-reference/api-sls-2020-12-30-listconsumergroup).

## Use Simple Log Service SDK to create a consumer group

For more information about the sample code that is used to manage consumer groups, see [Use Simple Log Service SDK for Java to manage consumer groups](/help/en/sls/developer-reference/use-log-service-sdk-for-java-to-manage-consumer-groups#section-g08-zi5-l1q) and [Use Simple Log Service SDK for Python to manage consumer groups](/help/en/sls/developer-reference/use-log-service-sdk-for-python-to-manage-consumer-groups).

## Use Simple Log Service CLI to create a consumer group

For more information about how to use Simple Log Service CLI to create a consumer group, see [create\_consumer\_group](/help/en/sls/developer-reference/create-consumer-group).

For more information about how to check whether a consumer group is created, see [list\_consumer\_group](/help/en/sls/developer-reference/list-consumer-group).

## **Step 2: Consume data**

## Consume data

You can use Simple Log Service SDK for Java, C++, Python, or Go to create consumer groups and consume data. In this example, Simple Log Service SDK for Java is used.

### **How it works**

The first time you call Simple Log Service SDK for Java to start a consumer, the SDK creates a consumer group if the SDK does not find the consumer group to which the consumer belongs. After the consumer group is created, the SDK records a start checkpoint and starts to consume data from the checkpoint. The start checkpoint becomes invalid after the first-time consumption. When the consumer is restarted, the consumer resumes data consumption from the last checkpoint that is stored by Simple Log Service. Sample checkpoints:

-   `LogHubConfig.ConsumePosition.BEGIN_CURSOR`: the start checkpoint, which specifies the first log in a Logstore. A consumer starts consumption from the earliest data.
    
-   `LogHubConfig.ConsumePosition.END_CURSOR`: the end checkpoint, which specifies the last log in a Logstore.
    

1.  Add Maven dependencies.
    
    Open the pom.xml file in the root directory of your Java project and add the following code:
    
    ```
    <dependency>
      <groupId>com.google.protobuf</groupId>
      <artifactId>protobuf-java</artifactId>
      <version>2.5.0</version>
    </dependency>
    <dependency>
      <groupId>com.aliyun.openservices</groupId>
      <artifactId>loghub-client-lib</artifactId>
      <version>0.6.47</version>
    </dependency>
    ```
    
2.  Create a file named `SampleLogHubProcessor.java` to write the implementation logic of consumers.
    
    ```
    import com.aliyun.openservices.log.common.FastLog;
    import com.aliyun.openservices.log.common.FastLogContent;
    import com.aliyun.openservices.log.common.FastLogGroup;
    import com.aliyun.openservices.log.common.FastLogTag;
    import com.aliyun.openservices.log.common.LogGroupData;
    import com.aliyun.openservices.loghub.client.ILogHubCheckPointTracker;
    import com.aliyun.openservices.loghub.client.exceptions.LogHubCheckPointException;
    import com.aliyun.openservices.loghub.client.interfaces.ILogHubProcessor;
    
    import java.util.List;
    
    public class SampleLogHubProcessor implements ILogHubProcessor {
        private int shardId;
        // The time at which the last checkpoint was stored. 
        private long mLastSaveTime = 0;
    
        // The initialize method is called once when a processor object is initialized.
        public void initialize(int shardId) {
            this.shardId = shardId;
        }
    
        // The main logic of data consumption. You must include the code to handle all exceptions that may occur during data consumption. 
        public String process(List<LogGroupData> logGroups, ILogHubCheckPointTracker checkPointTracker) {
            // Display the obtained data. 
            for (LogGroupData logGroup : logGroups) {
                FastLogGroup fastLogGroup = logGroup.GetFastLogGroup();
                System.out.println("Tags");
                for (int i = 0; i < fastLogGroup.getLogTagsCount(); ++i) {
                    FastLogTag logTag = fastLogGroup.getLogTags(i);
                    System.out.printf("%s : %s\n", logTag.getKey(), logTag.getValue());
                }
                for (int i = 0; i < fastLogGroup.getLogsCount(); ++i) {
                    FastLog log = fastLogGroup.getLogs(i);
                    System.out.println("--------\nLog: " + i + ", time: " + log.getTime() + ", GetContentCount: " + log.getContentsCount());
                    for (int j = 0; j < log.getContentsCount(); ++j) {
                        FastLogContent content = log.getContents(j);
                        System.out.println(content.getKey() + "\t:\t" + content.getValue());
                    }
                }
            }
            long curTime = System.currentTimeMillis();
            // A checkpoint is written to Simple Log Service at an interval of 30 seconds. If the ClientWorker instance unexpectedly stops within 30 seconds, a newly started ClientWorker instance consumes data from the last checkpoint. A small amount of data may be repeatedly consumed. 
            try {
                if (curTime - mLastSaveTime > 30 * 1000) {
                    // The value true indicates that the checkpoints are immediately updated to Simple Log Service. By default, the checkpoints that are cached in memory are automatically updated to Simple Log Service at an interval of 60 seconds. 
                    checkPointTracker.saveCheckPoint(true);
                    mLastSaveTime = curTime;
                } else {
                    // The value false indicates that the checkpoints are locally cached and can be updated to Simple Log Service by using the automatic checkpoint update mechanism. 
                    checkPointTracker.saveCheckPoint(false);
                }
            } catch (LogHubCheckPointException e) {
                e.printStackTrace();
            }
            return null;
        }
    
        // The shutdown function of the ClientWorker instance is called. You can manage the checkpoints. 
        public void shutdown(ILogHubCheckPointTracker checkPointTracker) {
            // Immediately store checkpoints to Simple Log Service. 
            try {
                checkPointTracker.saveCheckPoint(true);
            } catch (LogHubCheckPointException e) {
                e.printStackTrace();
            }
        }
    }
    ```
    
    For more information, see [Java](https://github.com/aliyun/aliyun-log-consumer-java), [C++](https://github.com/aliyun/aliyun-log-cpp-sdk), [Python](https://github.com/aliyun/aliyun-log-python-sdk), and [Go](https://github.com/aliyun/aliyun-log-go-sdk/blob/master/consumer/README.md).
    
3.  Create a file named `SampleLogHubProcessorFactory.java` to define a consumer entity.
    
    ```
    class SampleLogHubProcessorFactory implements ILogHubProcessorFactory {
        public ILogHubProcessor generatorProcessor() {
            // Generate a consumer. Each time the generatorProcessor method is called, a new SampleLogHubProcessor object is returned as expected. 
            return new SampleLogHubProcessor();
        }
    }
    ```
    
4.  Create a Main.java file. Create a consumer group and start a consumer thread to allow consumers in the consumer group to consume data in the specified Logstore.
    
    ```
    import com.aliyun.openservices.loghub.client.ClientWorker;
    import com.aliyun.openservices.loghub.client.config.LogHubConfig;
    import com.aliyun.openservices.loghub.client.exceptions.LogHubClientWorkerException;
    
    public class Main {
        // The Simple Log Service endpoint. Enter an endpoint based on your business requirements. 
        private static String Endpoint = "cn-hangzhou.log.aliyuncs.com";
        // The name of the Simple Log Service project. Enter a name based on your business requirements. You must enter the name of an existing project. 
        private static String Project = "ali-cn-hangzhou-sls-admin";
        // The name of the Logstore. Enter a name based on your business requirements. You must enter the name of an existing Logstore. 
        private static String Logstore = "sls_operation_log";
        // The name of the consumer group. Enter a name based on your business requirements. You do not need to create a consumer group in advance. A consumer group is automatically created when a program runs. 
        private static String ConsumerGroup = "consumerGroupX";
        // In this example, the AccessKey ID and AccessKey secret are obtained from environment variables.  
        private static String AccessKeyId= System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
        private static String AccessKeySecret = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
    
        public static void main(String[] args) throws LogHubClientWorkerException, InterruptedException {
            // consumer_1 specifies the name of a consumer. The name of each consumer in a consumer group must be unique. If different consumers start processes on different machines to consume data in a Logstore, you can use the machine IP addresses to identify each consumer. 
            // maxFetchLogGroupSize specifies the maximum number of log groups that can be obtained from Simple Log Service at a time. Retain the default value. You can use config.setMaxFetchLogGroupSize(100); to change the maximum number. Valid values: (0,1000]. 
            LogHubConfig config = new LogHubConfig(ConsumerGroup, "consumer_1", Endpoint, Project, Logstore, AccessKeyId, AccessKeySecret, LogHubConfig.ConsumePosition.BEGIN_CURSOR,1000);
            ClientWorker worker = new ClientWorker(new SampleLogHubProcessorFactory(), config);
            Thread thread = new Thread(worker);
            // After the Thread instance runs, the ClientWorker instance automatically runs and extends the Runnable interface. 
            thread.start();
            Thread.sleep(60 * 60 * 1000);
            // The shutdown function of the ClientWorker instance is called to exit the consumer. The Thread instance is automatically stopped. 
            worker.shutdown();
            // Multiple asynchronous tasks are generated when the ClientWorker instance is running. To ensure that all running tasks securely stop after the shutdown, we recommend that you set Thread.sleep to 30 seconds. 
            Thread.sleep(30 * 1000);
        }
    }
    ```
    
5.  Run the Main.java file.
    
    In this example, NGINX logs are consumed and the consumption result is displayed.
    
    ```
    :    GET
    request_uri    :    /request/path-3/file-7
    status    :    200
    body_bytes_sent    :    3820
    host    :    www.example.com
    request_time    :    43
    request_length    :    1987
    http_user_agent    :    Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36
    http_referer    :    www.example.com
    http_x_forwarded_for    :    192.168.10.196
    upstream_response_time    :    0.02
    --------
    Log: 158, time: 1635629778, GetContentCount: 14
    ......
        category    :    null
        source    :    127.0.0.1
        topic    :    nginx_access_log
        machineUUID    :    null
    Tags
        __receive_time__    :    1635629815
    --------
    Log: 0, time: 1635629788, GetContentCount: 14
    ......
        category    :    null
        source    :    127.0.0.1
        topic    :    nginx_access_log
        machineUUID    :    null
    Tags
        __receive_time__    :    1635629877
    --------
    ......
    ```
    

## **Consume data based on SPL**

You can use Simple Log Service SDK for Java, C++, Python, or Go to create consumer groups and consume data. In this example, Simple Log Service SDK for Java is used.

### **How it works**

The first time you call Simple Log Service SDK for Java to start a consumer, the SDK creates a consumer group if the SDK does not find the consumer group to which the consumer belongs. After the consumer group is created, the SDK records a start checkpoint and starts to consume data from the checkpoint. The start checkpoint becomes invalid after the first-time consumption. When the consumer is restarted, the consumer resumes data consumption from the last checkpoint that is stored by Simple Log Service. Sample checkpoints:

-   `LogHubConfig.ConsumePosition.BEGIN_CURSOR`: the start checkpoint, which specifies the first log in a Logstore. A consumer starts consumption from the earliest data.
    
-   `LogHubConfig.ConsumePosition.END_CURSOR`: the end checkpoint, which specifies the last log in a Logstore.
    

1.  Add Maven dependencies.
    
    Open the pom.xml file in the root directory of your Java project and add the following code:
    
    ```
        <dependency>
          <groupId>com.google.protobuf</groupId>
          <artifactId>protobuf-java</artifactId>
          <version>2.5.0</version>
        </dependency>
        <dependency>
          <groupId>com.aliyun.openservices</groupId>
          <artifactId>aliyun-log</artifactId>
          <version>0.6.99</version>
        </dependency>
    ```
    
2.  Create a file named SPLLogHubProcessor.java.
    
    ```
    import com.aliyun.openservices.log.common.FastLog;
    import com.aliyun.openservices.log.common.FastLogContent;
    import com.aliyun.openservices.log.common.FastLogGroup;
    import com.aliyun.openservices.log.common.FastLogTag;
    import com.aliyun.openservices.log.common.LogGroupData;
    import com.aliyun.openservices.loghub.client.ILogHubCheckPointTracker;
    import com.aliyun.openservices.loghub.client.exceptions.LogHubCheckPointException;
    import com.aliyun.openservices.loghub.client.interfaces.ILogHubProcessor;
    
    import java.util.List;
    
    public class SPLLogHubProcessor implements ILogHubProcessor {
        private int shardId;
        // The time at which the last checkpoint was stored. 
        private long mLastSaveTime = 0;
    
        // The initialize method is called once when a processor object is initialized.
        public void initialize(int shardId) {
            this.shardId = shardId;
        }
    
        // The main logic of data consumption. You must include the code to handle all exceptions that may occur during data consumption. 
        public String process(List<LogGroupData> logGroups, ILogHubCheckPointTracker checkPointTracker) {
            // Display the obtained data. 
            for (LogGroupData logGroup : logGroups) {
                FastLogGroup fastLogGroup = logGroup.GetFastLogGroup();
                System.out.println("Tags");
                for (int i = 0; i < fastLogGroup.getLogTagsCount(); ++i) {
                    FastLogTag logTag = fastLogGroup.getLogTags(i);
                    System.out.printf("%s : %s\n", logTag.getKey(), logTag.getValue());
                }
                for (int i = 0; i < fastLogGroup.getLogsCount(); ++i) {
                    FastLog log = fastLogGroup.getLogs(i);
                    System.out.println("--------\nLog: " + i + ", time: " + log.getTime() + ", GetContentCount: " + log.getContentsCount());
                    for (int j = 0; j < log.getContentsCount(); ++j) {
                        FastLogContent content = log.getContents(j);
                        System.out.println(content.getKey() + "\t:\t" + content.getValue());
                    }
                }
            }
            long curTime = System.currentTimeMillis();
            // A checkpoint is written to Simple Log Service at an interval of 30 seconds. If the ClientWorker instance unexpectedly stops within 30 seconds, a newly started ClientWorker instance consumes data from the last checkpoint. A small amount of data may be repeatedly consumed. 
            try {
                if (curTime - mLastSaveTime > 30 * 1000) {
                    // The value true indicates that the checkpoints are immediately updated to Simple Log Service. By default, the checkpoints that are cached in memory are automatically updated to Simple Log Service at an interval of 60 seconds. 
                    checkPointTracker.saveCheckPoint(true);
                    mLastSaveTime = curTime;
                } else {
                    // The value false indicates that the checkpoints are locally cached and can be updated to Simple Log Service by using the automatic checkpoint update mechanism. 
                    checkPointTracker.saveCheckPoint(false);
                }
            } catch (LogHubCheckPointException e) {
                e.printStackTrace();
            }
            return null;
        }
    
        // The shutdown function of the ClientWorker instance is called. You can manage the checkpoints. 
        public void shutdown(ILogHubCheckPointTracker checkPointTracker) {
            // Immediately store checkpoints to Simple Log Service. 
            try {
                checkPointTracker.saveCheckPoint(true);
            } catch (LogHubCheckPointException e) {
                e.printStackTrace();
            }
        }
    }
    ```
    
3.  Create a file named SPLLogHubProcessorFactory.java.
    
    ```
    import com.aliyun.openservices.loghub.client.interfaces.ILogHubProcessor;
    import com.aliyun.openservices.loghub.client.interfaces.ILogHubProcessorFactory;
    
    class SPLLogHubProcessorFactory implements ILogHubProcessorFactory {
        public ILogHubProcessor generatorProcessor() {
            // Generate a consumer. Each time the generatorProcessor method is called, a new SPLLogHubProcessor object is returned as expected. 
            return new SPLLogHubProcessor();
        }
    }
    ```
    
4.  Create a Main.java file. Create a consumer group and start a consumer thread to allow consumers in the consumer group to consume data in the specified Logstore. For more information about the sample code that is used to manage consumer groups, see [Use Simple Log Service SDK for Java to manage consumer groups](/help/en/sls/developer-reference/use-log-service-sdk-for-java-to-manage-consumer-groups#section-g08-zi5-l1q) and [Use Simple Log Service SDK for Python to manage consumer groups](/help/en/sls/developer-reference/use-log-service-sdk-for-python-to-manage-consumer-groups).
    
    ```
    import com.aliyun.openservices.loghub.client.ClientWorker;
    import com.aliyun.openservices.loghub.client.config.LogHubConfig;
    import com.aliyun.openservices.loghub.client.exceptions.LogHubClientWorkerException;
    
    public class SPLConsumer {
        // The Simple Log Service endpoint. Enter an endpoint based on your business requirements. 
        private static String Endpoint = "cn-hangzhou.log.aliyuncs.com";
        // The name of the Simple Log Service project. Enter a name based on your business requirements. You must enter the name of an existing project. 
        private static String Project = "your_project";
        // The name of the Logstore. Enter a name based on your business requirements. You must enter the name of an existing Logstore. 
        private static String Logstore = "your_logstore";
        // The name of the consumer group. Enter a name based on your business requirements. You do not need to create a consumer group in advance. A consumer group is automatically created when a program runs. 
        private static String ConsumerGroup = "consumerGroupX";
        // In this example, the AccessKey ID and AccessKey secret are obtained from environment variables.  
        private static String AccessKeyId = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
        private static String AccessKeySecret = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
    
    
        public static void main(String[] args) throws LogHubClientWorkerException, InterruptedException {
            // consumer_1 specifies the name of a consumer. The name of each consumer in a consumer group must be unique. If different consumers start processes on different machines to consume data in a Logstore, you can use the machine IP addresses to identify each consumer. 
            // maxFetchLogGroupSize specifies the maximum number of log groups that can be obtained from Simple Log Service at a time. Retain the default value. You can use config.setMaxFetchLogGroupSize(100); to change the maximum number. Valid values: (0,1000]. 
            LogHubConfig config = new LogHubConfig(ConsumerGroup, "consumer_1", Endpoint, Project, Logstore, AccessKeyId, AccessKeySecret, LogHubConfig.ConsumePosition.BEGIN_CURSOR, 1000);
            // You can use setQuery to specify a Simple Log Service Processing Language (SPL) statement for data consumption.
            config.setQuery("* | where cast(body_bytes_sent as bigint) > 14000");
            ClientWorker worker = new ClientWorker(new SPLLogHubProcessorFactory(), config);
            Thread thread = new Thread(worker);
            // After the Thread instance runs, the ClientWorker instance automatically runs and extends the Runnable interface. 
            thread.start();
            Thread.sleep(60 * 60 * 1000);
            // The shutdown function of the ClientWorker instance is called to exit the consumer. The Thread instance is automatically stopped. 
            worker.shutdown();
            // Multiple asynchronous tasks are generated when the ClientWorker instance is running. To ensure that all running tasks securely stop after the shutdown, we recommend that you set Thread.sleep to 30 seconds. 
            Thread.sleep(30 * 1000);
        }
    }
    ```
    
5.  Run the Main.java file.
    
    In this example, NGINX logs are consumed and the consumption result is displayed.
    
    ```
    :    GET
    request_uri    :    /request/path-3/file-7
    status    :    200
    body_bytes_sent    :    3820
    host    :    www.example.com
    request_time    :    43
    request_length    :    1987
    http_user_agent    :    Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36
    http_referer    :    www.example.com
    http_x_forwarded_for    :    192.168.10.196
    upstream_response_time    :    0.02
    --------
    Log: 158, time: 1635629778, GetContentCount: 14
    ......
        category    :    null
        source    :    127.0.0.1
        topic    :    nginx_access_log
        machineUUID    :    null
    Tags
        __receive_time__    :    1635629815
    --------
    Log: 0, time: 1635629788, GetContentCount: 14
    ......
        category    :    null
        source    :    127.0.0.1
        topic    :    nginx_access_log
        machineUUID    :    null
    Tags
        __receive_time__    :    1635629877
    --------
    ......
    ```
    

## Step 3: View the status of a consumer group

### Use the Simple Log Service console

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  On the **Log Storage** > **Logstores** tab, click the ![展开节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0207122861/p53702.png) icon next to the Logstore that you want to manage. Then, click the ![展开节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0207122861/p53702.png) icon next to **Data Consumption**.
    
4.  In the consumer group list, click the consumer group that you want to manage.
    
5.  On the **Consumer Group Status** page, view the consumption checkpoint of each shard.
    

### Use Simple Log Service SDK

In this example, Simple Log Service SDK for Java is used. Run the ConsumerGroupTest.java file to view the consumption checkpoint of each shard.

```
import java.util.List;
import com.aliyun.openservices.log.Client;
import com.aliyun.openservices.log.common.Consts.CursorMode;
import com.aliyun.openservices.log.common.ConsumerGroup;
import com.aliyun.openservices.log.common.ConsumerGroupShardCheckPoint;
import com.aliyun.openservices.log.exception.LogException;
public class ConsumerGroupTest {
    static String endpoint = "";
    static String project = "";
    static String logstore = "";
    static String accesskeyId = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
    static String accesskey = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
    public static void main(String[] args) throws LogException {
        Client client = new Client(endpoint, accesskeyId, accesskey);
        // Obtain all consumer groups that are created for the Logstore. If no consumer groups exist, an empty string is returned. 
        List<ConsumerGroup> consumerGroups = client.ListConsumerGroup(project, logstore).GetConsumerGroups();
        for(ConsumerGroup c: consumerGroups){
            // Display the attributes of each consumer group, including the name, heartbeat timeout period, and whether data is consumed in order. 
            System.out.println("Name: " + c.getConsumerGroupName());
            System.out.println("Heartbeat timeout period " + c.getTimeout());
            System.out.println("Ordered consumption: " + c.isInOrder());
            for(ConsumerGroupShardCheckPoint cp: client.GetCheckPoint(project, logstore, c.getConsumerGroupName()).GetCheckPoints()){
                System.out.println("shard: " + cp.getShard());
                // The time is a long integer and is accurate to the microsecond. 
                System.out.println("The time at which the progress of data consumption was last updated: " + cp.getUpdateTime());
                System.out.println("Consumer name: " + cp.getConsumer());
                String consumerPrg = "";
                if(cp.getCheckPoint().isEmpty())
                    consumerPrg = "Consumption is not started";
                else{
                    // The UNIX timestamp. Unit: seconds. Format the output value of the timestamp. 
                    try{
                        int prg = client.GetPrevCursorTime(project, logstore, cp.getShard(), cp.getCheckPoint()).GetCursorTime();
                        consumerPrg = "" + prg;
                    }
                    catch(LogException e){
                        if(e.GetErrorCode() == "InvalidCursor")
                            consumerPrg = "Invalid. The time at which the progress of data consumption was last updated is beyond the retention period of the data";
                        else{
                            // internal server error
                            throw e;
                        }
                    }
                }
                System.out.println("Consumption progress: " + consumerPrg);
                String endCursor = client.GetCursor(project, logstore, cp.getShard(), CursorMode.END).GetCursor();
                int endPrg = 0;
                try{
                    endPrg = client.GetPrevCursorTime(project, logstore, cp.getShard(), endCursor).GetCursorTime();
                }
                catch(LogException e){
                    // do nothing
                }
                // The UNIX timestamp. Unit: seconds. Format the output value of the timestamp. 
                System.out.println("The time at which the last data record was received: " + endPrg);
            }
        }
    }
}
```

The following information is returned:

```
Name: etl-6cac01c571d5a4b933649c04a7ba215b
Heartbeat timeout period: 60
Ordered consumption: false
shard: 0
The time at which the progress of data consumption was last updated: 1639555453575211
Consumer name: etl-356464787983a3d17086a9797e3d5f0e6959b066-256521
Consumption progress: 1639555453
The time at which the last data record was received: 1639555453
shard: 1
The time at which the progress of data consumption was last updated: 1639555392071328
Consumer name: etl-356464787983a3d17086a9797e3d5f0e6959b066-256521
Consumption progress: 1639555391
The time at which the last data record was received: 1639555391
Name: etl-2bd3fdfdd63595d56b1ac24393bf5991
Heartbeat timeout period: 60
Ordered consumption: false
shard: 0
The time at which the progress of data consumption was last updated: 1639555453256773
Consumer name: etl-532719dd2f198b3878ee3c6dfc80aeffb39ee48b-061390
Consumption progress: 1639555453
The time at which the last data record was received: 1639555453
shard: 1
The time at which the progress of data consumption was last updated: 1639555392066234
Consumer name: etl-532719dd2f198b3878ee3c6dfc80aeffb39ee48b-061390
Consumption progress: 1639555391
The time at which the last data record was received: 1639555391
Name: consumerGroupX
Heartbeat timeout period: 60
Ordered consumption: false
shard: 0
The time at which the progress of data consumption was last updated: 1639555434142879
Consumer name: consumer_1
Consumption progress: 1635615029
The time at which the last data record was received: 1639555453
shard: 1
The time at which the progress of data consumption was last updated: 1639555437976929
Consumer name: consumer_1
Consumption progress: 1635616802
The time at which the last data record was received: 1639555391
```

## Authorize a RAM user to perform operations on consumer groups

Before you can use a RAM user to manage consumer groups, you must grant the required permissions to the RAM user. For more information, see [Step 2: Grant permissions to the RAM user](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#section-kxp-1ok-zj4).

The following table describes the actions that you can authorize a RAM user to perform.

**Action**

**Description**

**Resource**

log:GetCursorOrData ([GetCursor](/help/en/sls/api-getcursor#concept-ffg-3dm-12b) and [PullData](/help/en/sls/api-pulldata))

Queries cursors based on the time when logs are generated.

acs:log:_${regionName}_:_${projectOwnerAliUid}_:project/_${projectName}_/logstore/_${logstoreName}_

[log:CreateConsumerGroup](/help/en/sls/api-createconsumergroup#reference-hq4-cgh-f2b)

Creates a consumer group for a Logstore.

acs:log:_${regionName}_:_${projectOwnerAliUid}_:project/_${projectName}_/logstore/_${logstoreName}_/consumergroup/_${consumerGroupName}_

[log:ListConsumerGroup](/help/en/sls/api-listconsumergroup#reference-ns3-mgh-f2b)

Queries all consumer groups of a Logstore.

acs:log:_${regionName}_:_${projectOwnerAliUid}_:project/_${projectName}_/logstore/_${logstoreName}_/consumergroup/\*

[log:ConsumerGroupUpdateCheckPoint](/help/en/sls/updatecheckpoint#reference-wzw-ngh-f2b)

Updates the checkpoint for a shard that is allocated to a consumer group.

acs:log:_${regionName}_:_${projectOwnerAliUid}_:project/_${projectName}_/logstore/_${logstoreName}_/consumergroup/_${consumerGroupName}_

[log:ConsumerGroupHeartBeat](/help/en/sls/heartbeat#reference-mrz-kgh-f2b)

Sends a heartbeat message for a consumer to Simple Log Service.

acs:log:_${regionName}_:_${projectOwnerAliUid}_:project/_${projectName}_/logstore/_${logstoreName}_/consumergroup/_${consumerGroupName}_

[log:UpdateConsumerGroup](/help/en/sls/api-updateconsumergroup#reference-yc2-pgh-f2b)

Modifies the attributes of a consumer group.

acs:log:_${regionName}_:_${projectOwnerAliUid}_:project/_${projectName}_/logstore/_${logstoreName}_/consumergroup/_${consumerGroupName}_

[log:GetConsumerGroupCheckPoint](/help/en/sls/getcheckpoint#reference-xbw-fgh-f2b)

Queries the checkpoints for one or all shards that are allocated to a consumer group.

acs:log:_${regionName}_:_${projectOwnerAliUid}_:project/_${projectName}_/logstore/_${logstoreName}_/consumergroup/_${consumerGroupName}_

The following list provides resource information about a consumer group. To allow a RAM user to perform operations on the consumer group, you can refer to the following code to grant the required permissions to the RAM user:

-   ID of the Alibaba Cloud account to which the project belongs: 174649\*\*\*\*602745
    
-   ID of the region where the project resides: cn-hangzhou
    
-   Name of the project: project-test
    
-   Name of the Logstore: logstore-test
    
-   Name of the consumer group: consumergroup-test
    

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "log:GetCursorOrData"
      ],
      "Resource": "acs:log:cn-hangzhou:174649****602745:project/project-test/logstore/logstore-test"
    },
    {
      "Effect": "Allow",
      "Action": [
        "log:CreateConsumerGroup",
        "log:ListConsumerGroup"
      ],
      "Resource": "acs:log:cn-hangzhou:174649****602745:project/project-test/logstore/logstore-test/consumergroup/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "log:ConsumerGroupUpdateCheckPoint",
        "log:ConsumerGroupHeartBeat",
        "log:UpdateConsumerGroup",
        "log:GetConsumerGroupCheckPoint"
      ],
      "Resource": "acs:log:cn-hangzhou:174649****602745:project/project-test/logstore/logstore-test/consumergroup/consumergroup-test"
    }
  ]
}
```

## What to do next

-   Configure Log4j for troubleshooting.
    
    We recommend that you configure Log4j for your consumer program to display error messages when exceptions occur in consumer groups. This helps you troubleshoot the errors. The following code shows a common log4j.properties configuration file:
    
    ```
    log4j.rootLogger = info,stdout
    log4j.appender.stdout = org.apache.log4j.ConsoleAppender
    log4j.appender.stdout.Target = System.out
    log4j.appender.stdout.layout = org.apache.log4j.PatternLayout
    log4j.appender.stdout.layout.ConversionPattern = [%-5p] %d{yyyy-MM-dd HH:mm:ss,SSS} method:%l%n%m%n
    ```
    
    After you configure Log4j, you can receive error messages when you run the consumer program. The following example shows an error message:
    
    ```
    [WARN ] 2018-03-14 12:01:52,747 method:com.aliyun.openservices.loghub.client.LogHubConsumer.sampleLogError(LogHubConsumer.java:159)
    com.aliyun.openservices.log.exception.LogException: Invalid loggroup count, (0,1000]
    ```
    
-   Use a consumer group to consume data that is generated after a point in time.
    
    ```
    // consumerStartTimeInSeconds specifies a point in time. The data that is generated after the point in time is consumed. 
    public LogHubConfig(String consumerGroupName, 
                          String consumerName, 
                          String loghubEndPoint,
                          String project, String logStore,
                          String accessId, String accessKey,
                          int consumerStartTimeInSeconds);
    
    // position is an enumeration variable. LogHubConfig.ConsumePosition.BEGIN_CURSOR specifies that the consumption starts from the earliest data. LogHubConfig.ConsumePosition.END_CURSOR specifies that the consumption starts from the latest data. 
    public LogHubConfig(String consumerGroupName, 
                          String consumerName, 
                          String loghubEndPoint,
                          String project, String logStore,
                          String accessId, String accessKey,
                          ConsumePosition position);
    ```
    
    **Note**
    
    -   You can use different constructors based on your business requirements.
        
    -   If a checkpoint is stored on Simple Log Service, data consumption starts from the checkpoint.
        
    -   When Simple Log Service consumes data, a checkpoint is preferentially used to start data consumption. If you want to specify a point in time from which Simple Log Service starts data consumption, make sure that the value of consumerStartTimeInSeconds falls within the time-to-live (TTL) period. Otherwise, Simple Log Service cannot consume data based on your configurations.
        
    
-   Reset a checkpoint.
    
    ```
    public static void updateCheckpoint() throws Exception {
            Client client = new Client(host, accessId, accessKey);
            // Specify a UNIX timestamp that is accurate to the second. If you specify a timestamp in milliseconds, divide the timestamp by 1000. Example:
            long timestamp = Timestamp.valueOf("2017-11-15 00:00:00").getTime() / 1000;
            ListShardResponse response = client.ListShard(new ListShardRequest(project, logStore));
            for (Shard shard : response.GetShards()) {
                int shardId = shard.GetShardId();
                String cursor = client.GetCursor(project, logStore, shardId, timestamp).GetCursor();
                client.UpdateCheckPoint(project, logStore, consumerGroup, shardId, cursor);
            }
        }
    ```
    

## References

-   API
    
    **Action**
    
    **API operation**
    
    Create a consumer group
    
    [CreateConsumerGroup](/help/en/sls/api-createconsumergroup#doc-api-Sls-CreateConsumerGroup)
    
    Query a consumer group
    
    [ListConsumerGroup](/help/en/sls/api-listconsumergroup#doc-api-Sls-ListConsumerGroup)
    
    Delete a consumer group
    
    [DeleteConsumerGroup](/help/en/sls/api-deleteconsumergroup#doc-api-Sls-DeleteConsumerGroup)
    
    Update a consumer group
    
    [UpdateConsumerGroup](/help/en/sls/api-updateconsumergroup#doc-api-Sls-UpdateConsumerGroup)
    
    Send a heartbeat message for a consumer
    
    [ConsumerGroupHeartBeat](/help/en/sls/api-consumergroupheartbeat#doc-api-Sls-ConsumerGroupHeartBeat)
    
    Query the checkpoints of a consumer group
    
    [GetCheckPoint](/help/en/sls/getcheckpoint#reference-xbw-fgh-f2b)
    
    Update the checkpoints of a consumer group
    
    [ConsumerGroupUpdateCheckPoint](/help/en/sls/api-consumergroupupdatecheckpoint#doc-api-Sls-ConsumerGroupUpdateCheckPoint)
    
-   SDK
    
    **Programming language**
    
    **References**
    
    Java
    
    -   [Use Simple Log Service SDK for Java to manage consumer groups](/help/en/sls/developer-reference/use-log-service-sdk-for-java-to-manage-consumer-groups#task-2270185)
        
    -   [Use consumer groups to consume data](#section-hmf-xjn-1bb)
        
    
    Python
    
    -   [Use Simple Log Service SDK for Python to manage consumer groups](/help/en/sls/developer-reference/use-log-service-sdk-for-python-to-manage-consumer-groups#task-2280470)
        
    -   [Use consumer groups to consume data](/help/en/sls/developer-reference/use-consumer-groups-to-consume-logs#task-2282578)
        
    
-   CLI
    
    **Action**
    
    **CLI command**
    
    Create a consumer group
    
    [create\_consumer\_group](/help/en/sls/developer-reference/create-consumer-group#task-2083792)
    
    Query a consumer group
    
    [list\_consumer\_group](/help/en/sls/developer-reference/list-consumer-group#task-2083795)
    
    Update a consumer group
    
    [update\_consumer\_group](/help/en/sls/developer-reference/update-consumer-group#task-2083794)
    
    Delete a consumer group
    
    [delete\_consumer\_group](/help/en/sls/developer-reference/delete-consumer-group#task-2083793)
    
    Query the checkpoints of a consumer group
    
    [get\_check\_point](/help/en/sls/developer-reference/get-check-point#task-2083797)
    
    Update the checkpoints of a consumer group
    
    [update\_check\_point](/help/en/sls/developer-reference/update-check-point#task-2083796)
