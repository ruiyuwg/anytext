For big data compute engines such as [Flink](https://flink.apache.org/), [Spark](https://spark.apache.org/), and [Storm](http://storm.apache.org/), which require log compression, batch uploading to Simple Log Service (SLS), and reduced network resource consumption, the API or SDK may not be sufficient. Aliyun Log Java Producer offers a convenient and efficient solution for uploading data to SLS in such scenarios.

## Prerequisites

-   Simple Log Service is [activated](https://www.alibabacloud.com/product/log-service?spm=a2c5t.10695662.1996646101.searchclickresult.536d31bdPTqffd).
    
-   Simple Log Service SDK for Python is [initialized](/help/en/sls/developer-reference/initializing-the-sls-python-sdk).
    

## What is Aliyun Log Java Producer

Aliyun Log Java Producer is a high-performance class library designed for Java applications in big data and high concurrency environments. It offers several benefits over the standard API or SDK, including high performance, separation of computing and I/O logic, and resource management. It leverages the sequential writing feature of Alibaba Cloud SLS to ensure ordered log uploads.

SLS offers sample applications using Aliyun Log Java Producer to facilitate a quick start. For more information, see [Aliyun Log Producer Sample Application](https://github.com/aliyun/aliyun-log-producer-sample).

## **Workflow**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1847546671/CAEQLxiBgIC.lo_lmBkiIDZhY2Y3ZGM3ODA2MDRjMDM4ZTY0NjZlMTc2OWE0ZTU54420513_20240517140627.393.svg)

### Features

-   Thread safety: All methods exposed by the Producer interface are thread-safe.
    
-   Asynchronous sending: Calling the Producer's sending interface typically returns a response immediately. The Producer internally caches and merges pending data, then sends it in batches to improve throughput.
    
-   Automatic retry: The Producer retries based on the configured maximum retry count and backoff time.
    
-   Behavior tracing: Through Callback or Future, obtain information about whether the current data was sent successfully, along with information about each sending attempt, which helps with problem tracing and decision making.
    
-   Context restoration: Logs produced by the same Producer instance are in the same context, allowing you to view related logs before and after a specific log on the server side.
    
-   Graceful shutdown: The close method ensures that all data cached by the Producer is processed before exiting, and you will receive corresponding notifications.
    

### **Benefits**

The benefits of the producer compared to the original API or SDK are as follows:

-   High performance
    
    With massive data and limited resources, achieving target throughput at the write end requires complex control logic, including multi-threading, caching strategies, batch sending, and comprehensive consideration of failure retry scenarios. The Producer implements these functions, simplifying program development while providing performance advantages.
    
-   Asynchronous non-blocking
    
    With sufficient available memory, the Producer caches data sent to the logstore, allowing the send method to return immediately without blocking, achieving separation of computation and I/O logic. Subsequently, obtain the result of data transmission through the returned Future object or the provided Callback.
    
-   Controllable resources
    
    Control the memory size used by the Producer to cache pending data through parameters, and configure the number of threads used to execute data sending tasks. This prevents the Producer from consuming unlimited resources and lets you balance resource consumption and write throughput based on actual conditions.
    
-   Simple problem location
    
    If log data transmission fails, the Producer returns not only a status code but also a String type exception message describing the failure reason and detailed information. For example, if the transmission fails due to a network connection timeout, the returned exception message might be "connection timeout"; if the transmission fails because the server is unresponsive, the returned exception message might be "server unresponsive".
    

## **Usage notes**

-   The aliyun-log-producer underlying calls the PutLogs operation to upload logs, and there are limitations on the size of raw logs that can be written each time. For more information, see [Data read and write](/help/en/sls/data-read-and-write#concept-afx-g3h-hfb).
    
-   The basic resources of SLS, including the number of projects, logstores, shards, LogtailConfig, machine groups, single LogItem size, LogItem (Key) length, and LogItem (Value) length, are all limited. For more information, see [Basic resources](/help/en/sls/basic-resources#concept-abm-gdd-p2b).
    
-   After the code runs for the first time, enable the logstore indexing in the SLS console, wait for one minute, and then perform queries.
    
-   When querying logs in the console, if the length of a single field value exceeds the maximum length, the excess part is truncated and not included in the analysis. For more information, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb).
    

## **Billing**

The costs incurred using the SDK are consistent with those incurred using the console. For more information, see [Billing overview](/help/en/sls/billing-overview).

## **Step 1: Install Aliyun Log Java Producer**

To use Aliyun Log Java Producer in a Maven project, add the corresponding dependency in the pom.xml file. Then, Maven will automatically download the relevant JAR packages. For example, add the following in <dependencies>:

```
<dependency>
    <groupId>com.aliyun.openservices</groupId>
    <artifactId>aliyun-log-producer</artifactId>
    <version>0.3.22</version>
</dependency>
```

After adding and updating, if a version conflict with the Producer dependency is reported, add the following in <dependencies>:

```
<dependency>
    <groupId>com.aliyun.openservices</groupId>
    <artifactId>aliyun-log</artifactId>
    <version>0.6.114</version>
  <classifier>jar-with-dependencies</classifier>
</dependency>
```

## Step 2: Configure ProducerConfig

ProducerConfig is used to set the sending policy. Adjust the parameter values to suit different business needs. The parameters are explained in the following table:

```
Config producerConfig = new ProducerConfig();
producerConfig.setTotalSizeInBytes(104857600);
```

**Parameter**

**Type**

**Description**

totalSizeInBytes

Integer

The maximum size of logs that can be cached by a producer instance. Default value: 100 MB.

maxBlockMs

Integer

The maximum blocking time during which the send method is called but the available space of a producer instance is insufficient. Default value: 60 seconds.

If the maximum blocking time that you specify elapses and the available space of the producer instance is still insufficient, the send method throws the [TimeoutException](https://github.com/aliyun/aliyun-log-producer/blob/master/src/main/java/com/aliyun/openservices/aliyun/log/producer/errors/TimeoutException.java) error.

If you set this parameter to 0 and the available space of the producer instance is insufficient, the send method immediately throws the TimeoutException error.

If you want to block the send method until the available space of the producer instance is sufficient, you must set this parameter to a negative value.

ioThreadCount

Integer

The number of threads for log sending tasks. The default value is the number of available processors.

batchSizeThresholdInBytes

Integer

The threshold for sending a batch of logs. Default value: 512 KB. Maximum value: 5 MB.

batchCountThreshold

Integer

The number of logs in a batch before sending. Default value: 4096. Maximum value: 40960.

lingerMs

Integer

The delay before a batch can be sent. Default value: 2 seconds. Minimum value: 100 ms.

retries

Integer

The number of retry attempts for a batch after an initial failure. Default value: 10.

If this parameter is set to 0 or less, the batch enters the failure queue immediately after the first failure.

maxReservedAttempts

Integer

Each attempt to send a ProducerBatch corresponds to an [attempt](https://github.com/aliyun/aliyun-log-producer/blob/master/src/main/java/com/aliyun/openservices/aliyun/log/producer/Attempt.java). This parameter controls how many attempts are reported back to the user, retaining by default only the latest 11 attempts.

Increasing this parameter allows for more detailed tracing at the expense of higher memory consumption.

baseRetryBackoffMs

Integer

The initial backoff time for retries. Default value: 100 milliseconds.

The producer employs an exponential backoff algorithm, where the wait time before the Nth retry is calculated as baseRetryBackoffMs × 2^(N-1).

maxRetryBackoffMs

Integer

The maximum backoff time for retries. Default value: 50 seconds.

adjustShardHash

Boolean

Determines whether to adjust the shardHash when the send method is called. Default value: true.

buckets

Integer

This parameter is effective when adjustShardHash is true. This parameter regroups shardHash into the specified number of buckets.

Differing shardHash values prevent data from being merged and batched, thus limiting the producer's throughput. By regrouping the shardHash, data can be more effectively batched for transmission.

The value of this parameter must be an integer power of 2 within the range \[1, 256\]. Default value: 64.

## **Step 3:** Create a producer

The producer supports configuration with AK or STS tokens. For STS tokens, periodically create a new ProjectConfig and add it to ProjectConfigs.

LogProducer is the producer's implementation class, and requires a unique producerConfig. After the producerConfig is prepared, instantiate a producer as follows:

```
Producer producer = new LogProducer(producerConfig);
```

Creating a producer initiates several threads, a process which is resource-intensive. We recommend that you share a producer instance across the application. All methods of LogProducer are thread-safe for concurrent use. The table below lists the threads within a producer instance, where N is the instance number, starting at 0.

**Thread name format**

**Quantity**

**Description**

aliyun-log-producer-<N>-mover

1

Transfers batches ready to be sent to the sending thread pool.

aliyun-log-producer-<N>-io-thread

ioThreadCount

Threads in the IOThreadPool that execute data sending tasks.

aliyun-log-producer-<N>-success-batch-handler

1

Handles batches that have been successfully sent.

aliyun-log-producer-<N>-failure-batch-handler

1

Manages batches that failed to send.

## Step 4: Configure a log project

ProjectConfig includes the endpoint information of the destination project and the access credentials representing the caller's identity. Each log project corresponds to one ProjectConfig object.

Create an instance as follows:

```
ProjectConfig project1 = new ProjectConfig("your-project-1", "cn-hangzhou.log.aliyuncs.com", "accessKeyId", "accessKeySecret");
ProjectConfig project2 = new ProjectConfig("your-project-2", "cn-shanghai.log.aliyuncs.com", "accessKeyId", "accessKeySecret");
producer.putProject(project1);
producer.putProject(project2);
```

## **Step 5: Send data**

### **Create Future or Callback**

When sending log data with the Aliyun Log Java Producer, specify a Callback function to handle the sending process. This Callback function is invoked when data transmission is successful or when an exception occurs during a failed send.

**Note**

If post-result processing in the application is simple and does not block the producer, use the callback directly. Otherwise, use ListenableFuture to handle business logic in a separate thread or thread pool.

The method parameters are described below:

**Parameter**

**Description**

project

The destination project for the data to be sent.

logstore

The destination logstore for the data to be sent.

logTem

The data to be sent.

completed

A Java atomic type to ensure that all logs are sent (both successfully and unsuccessfully).

### Send data

The producer interface offers multiple sending methods, each with specific parameters as described below.

**Parameter**

**Description**

**Required**

project

The destination project.

Yes

logStore

The destination logstore.

Yes

logItem

The logs to be sent.

Yes

topic

The topic of the logs.

No

**Note**

If not specified, this parameter is assigned "".

source

The source of the logs.

No

**Note**

If not specified, this parameter is assigned the IP address of the host where the producer resides.

shardHash

The hash value for the logs to be sent. Specify a hash value as needed, and then the logs are written to a specific shard in the specified logstore based on the hash value.

No

**Note**

If not specified, the data is written to a random shard in the destination logstore.

callback

Define a Callback function that is invoked when the log delivery is successful, or after it is discarded following multiple failed retries.

No

### **Common exceptions**

**Exception**

**Description**

TimeoutException

The TimeoutException is thrown when the producer's cached log size exceeds the memory limit and will fail to acquire sufficient memory after maxBlockMs milliseconds.

If maxBlockMs is set to -1, it indicates an indefinite blocking period, and the TimeoutException does not occur.

IllegalStateException

If the producer is in a closed state (the close method has been invoked), then any subsequent calls to the send method will result in an IllegalStateException.

## **Step 6: Obtain the sending result**

Because the producer's sending methods are asynchronous, the sending result must be obtained through the returned future or the provided callback.

## Future

The send method returns a [ListenableFuture](https://github.com/google/guava/wiki/ListenableFutureExplained), which aside from the standard get method also allows for callback registration after completion. The sample code below demonstrates ListenableFuture usage. Register a FutureCallback for the future and execute it in the application-provided EXECUTOR\_SERVICE thread pool. For a full example, see [SampleProducerWithFuture.java](https://github.com/aliyun/aliyun-log-producer-sample/blob/master/src/main/java/com/aliyun/openservices/aliyun/log/producer/sample/SampleProducerWithFuture.java).

```
package com.aliyun.openservices.aliyun.log.producer.sample;

import com.aliyun.openservices.aliyun.log.producer.*;
import com.aliyun.openservices.aliyun.log.producer.errors.LogSizeTooLargeException;
import com.aliyun.openservices.aliyun.log.producer.errors.MaxBatchCountExceedException;
import com.aliyun.openservices.aliyun.log.producer.errors.ProducerException;
import com.aliyun.openservices.aliyun.log.producer.errors.ResultFailedException;
import com.aliyun.openservices.aliyun.log.producer.errors.TimeoutException;
import com.aliyun.openservices.log.common.LogItem;
import com.google.common.util.concurrent.FutureCallback;
import com.google.common.util.concurrent.Futures;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;
import org.checkerframework.checker.nullness.qual.Nullable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SampleProducerWithFuture {

  private static final Logger LOGGER = LoggerFactory.getLogger(SampleProducerWithFuture.class);

  private static final ExecutorService EXECUTOR_SERVICE = Executors
      .newFixedThreadPool(Math.max(Runtime.getRuntime().availableProcessors(), 1));

  public static void main(String[] args) throws InterruptedException {
    Producer producer = Utils.createProducer();
    int n = 100;
    int size = 20;

    // The number of logs that have finished (either successfully send, or failed)
    final AtomicLong completed = new AtomicLong(0);

    for (int i = 0; i < n; ++i) {
      List<LogItem> logItems = Utils.generateLogItems(size);
      try {
        String project = System.getenv("PROJECT");
        String logStore = System.getenv("LOG_STORE");
        ListenableFuture<Result> f = producer.send(project, logStore, logItems);
        Futures.addCallback(
            f, new SampleFutureCallback(project, logStore, logItems, completed), EXECUTOR_SERVICE);
      } catch (InterruptedException e) {
        LOGGER.warn("The current thread has been interrupted during send logs.");
      } catch (Exception e) {
        if (e instanceof MaxBatchCountExceedException) {
          LOGGER.error("The logs exceeds the maximum batch count, e={}", e);
        } else if (e instanceof LogSizeTooLargeException) {
          LOGGER.error("The size of log is larger than the maximum allowable size, e={}", e);
        } else if (e instanceof TimeoutException) {
          LOGGER.error("The time taken for allocating memory for the logs has surpassed., e={}", e);
        } else {
          LOGGER.error("Failed to send logs, e=", e);
        }
      }
    }

    Utils.doSomething();

    try {
      producer.close();
    } catch (InterruptedException e) {
      LOGGER.warn("The current thread has been interrupted from close.");
    } catch (ProducerException e) {
      LOGGER.info("Failed to close producer, e=", e);
    }

    EXECUTOR_SERVICE.shutdown();
    while (!EXECUTOR_SERVICE.isTerminated()) {
      EXECUTOR_SERVICE.awaitTermination(100, TimeUnit.MILLISECONDS);
    }
    LOGGER.info("All log complete, completed={}", completed.get());
  }

  private static final class SampleFutureCallback implements FutureCallback<Result> {

    private static final Logger LOGGER = LoggerFactory.getLogger(SampleFutureCallback.class);

    private final String project;

    private final String logStore;

    private final List<LogItem> logItems;

    private final AtomicLong completed;

    SampleFutureCallback(
        String project, String logStore, List<LogItem> logItems, AtomicLong completed) {
      this.project = project;
      this.logStore = logStore;
      this.logItems = logItems;
      this.completed = completed;
    }

    @Override
    public void onSuccess(@Nullable Result result) {
      LOGGER.info("Send logs successfully.");
      completed.getAndIncrement();
    }

    @Override
    public void onFailure(Throwable t) {
      if (t instanceof ResultFailedException) {
        Result result = ((ResultFailedException) t).getResult();
        LOGGER.error(
            "Failed to send logs, project={}, logStore={}, result={}", project, logStore, result);
      } else {
        LOGGER.error("Failed to send log, e=", t);
      }
      completed.getAndIncrement();
    }
  }
}
```

## Callback

The callback is executed by the producer's internal thread, and the data space is only released after completion. To prevent blocking the producer and reducing throughput, avoid lengthy operations in the callback. Additionally, do not call the send method for retries within the callback. Instead, handle retries in the ListenableFuture callback. For a complete example, see [SampleProducerWithCallback.java](https://github.com/aliyun/aliyun-log-producer-sample/blob/master/src/main/java/com/aliyun/openservices/aliyun/log/producer/sample/SampleProducerWithCallback.java).

```
package com.aliyun.openservices.aliyun.log.producer.sample;

import com.aliyun.openservices.aliyun.log.producer.Callback;
import com.aliyun.openservices.aliyun.log.producer.Producer;
import com.aliyun.openservices.aliyun.log.producer.Result;
import com.aliyun.openservices.aliyun.log.producer.errors.LogSizeTooLargeException;
import com.aliyun.openservices.aliyun.log.producer.errors.ProducerException;
import com.aliyun.openservices.aliyun.log.producer.errors.TimeoutException;
import com.aliyun.openservices.log.common.LogItem;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicLong;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SampleProducerWithCallback {

  private static final Logger LOGGER = LoggerFactory.getLogger(SampleProducerWithCallback.class);

  private static final ExecutorService EXECUTOR_SERVICE = Executors.newFixedThreadPool(10);

  public static void main(String[] args) throws InterruptedException {
    final Producer producer = Utils.createProducer();

    int nTask = 100;

    // The monotonically increasing sequence number we will put in the data of each log
    final AtomicLong sequenceNumber = new AtomicLong(0);

    // The number of logs that have finished (either successfully send, or failed)
    final AtomicLong completed = new AtomicLong(0);

    final CountDownLatch latch = new CountDownLatch(nTask);

    for (int i = 0; i < nTask; ++i) {
      EXECUTOR_SERVICE.submit(
          new Runnable() {
            @Override
            public void run() {
              LogItem logItem = Utils.generateLogItem(sequenceNumber.getAndIncrement());
              try {
                String project = System.getenv("PROJECT");
                String logStore = System.getenv("LOG_STORE");
                producer.send(
                    project,
                    logStore,
                    Utils.getTopic(),
                    Utils.getSource(),
                    logItem,
                    new SampleCallback(project, logStore, logItem, completed));
              } catch (InterruptedException e) {
                LOGGER.warn("The current thread has been interrupted during send logs.");
              } catch (Exception e) {
                if (e instanceof LogSizeTooLargeException) {
                  LOGGER.error(
                      "The size of log is larger than the maximum allowable size, e={}", e);
                } else if (e instanceof TimeoutException) {
                  LOGGER.error(
                      "The time taken for allocating memory for the logs has surpassed., e={}", e);
                } else {
                  LOGGER.error("Failed to send log, logItem={}, e=", logItem, e);
                }
              } finally {
                latch.countDown();
              }
            }
          });
    }
    latch.await();
    EXECUTOR_SERVICE.shutdown();

    Utils.doSomething();

    try {
      producer.close();
    } catch (InterruptedException e) {
      LOGGER.warn("The current thread has been interrupted from close.");
    } catch (ProducerException e) {
      LOGGER.info("Failed to close producer, e=", e);
    }

    LOGGER.info("All log complete, completed={}", completed.get());
  }

  private static final class SampleCallback implements Callback {

    private static final Logger LOGGER = LoggerFactory.getLogger(SampleCallback.class);

    private final String project;

    private final String logStore;

    private final LogItem logItem;

    private final AtomicLong completed;

    SampleCallback(String project, String logStore, LogItem logItem, AtomicLong completed) {
      this.project = project;
      this.logStore = logStore;
      this.logItem = logItem;
      this.completed = completed;
    }

    @Override
    public void onCompletion(Result result) {
      try {
        if (result.isSuccessful()) {
          LOGGER.info("Send log successfully.");
        } else {
          LOGGER.error(
              "Failed to send log, project={}, logStore={}, logItem={}, result={}",
              project,
              logStore,
              logItem.ToJsonString(),
              result);
        }
      } finally {
        completed.getAndIncrement();
      }
    }
  }
}
```

## **Step 7: Close the producer**

When the producer is no longer needed or the process is exiting, close the producer to ensure all cached data is processed. Two shutdown modes are supported: safe shutdown and limited shutdown.

## Safe shutdown

A safe shutdown is recommended in most cases, using the `close()` method. The close() method waits for all cached data to be processed, for threads to stop, for callbacks to execute, and for futures to complete before returning.

Although this method waits for all data to be processed, it quickly returns if the callback is not blocked, and batches are immediately processed without retries after closure.

## Limited shutdown

For a quick return when callbacks may block, use a limited shutdown with the `close(long timeoutMs)` method. If the producer is not fully closed after the specified timeoutMs, an IllegalStateException will be thrown, indicating potential data loss and unexecuted callbacks.

## FAQ

### Are there any limitations on the number of data write operations?

-   The number and size of read and write operations in SLS are limited. For more information, see [Data read and write](/help/en/sls/data-read-and-write#concept-afx-g3h-hfb).
    
-   The basic resources of SLS, including the number of projects, logstores, shards, LogtailConfig, machine groups, single LogItem size, LogItem (Key) length, and LogItem (Value) length, are all limited. For more information, see [Basic resources](/help/en/sls/basic-resources#concept-abm-gdd-p2b).
    

### What do I do if no data is written to SLS?

If no data is written to SLS, follow these troubleshooting steps:

1.  Verify that the versions of the `aliyun-log-producer`, `aliyun-log`, and `protobuf-java` JAR packages in your project match those specified in the installation documentation. Upgrade them if necessary.
    
2.  The send method of the Aliyun Log Java Producer is asynchronous, so the return data is not immediately available. Use a Callback or Future object to determine the cause of a sending failure.
    
3.  If the onCompletion method of the Callback interface is not called, ensure that the `producer.close()` method is invoked before program termination. Because data transmission is handled by a backend thread, calling `producer.close()` ensures no data loss.
    
4.  The Aliyun Log Java Producer uses the SLF4J logging framework to return runtime behaviors. Configure a logging framework in your program and enable DEBUG-level logging to check for ERROR logs.
    
5.  If the issue persists after you have completed the previous steps, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

## References

-   If an API call fails, the response from Simple Log Service includes an error code. For more information, see [Error codes](/help/en/sls/developer-reference/error-codes#reference-ypb-rtq-12b).
    
-   In addition to its native SDK, Simple Log Service also supports the common Alibaba Cloud SDKs. For more information, see [Simple Log Service\_SDK Center\_Alibaba Cloud OpenAPI Explorer](https://api.alibabacloud.com/api-tools/sdk/Sls?version=2020-12-30&language=python-tea&tab=primer-doc).
    
-   Simple Log Service provides a command-line interface (CLI) for automated configuration. For more information, see [Overview of Simple Log Service CLI](/help/en/sls/developer-reference/overview-of-log-service-cli#concept-wzj-vhf-lfb).
    
-   For more sample code, see [Alibaba Cloud Simple Log Service SDK for Java](https://github.com/aliyun/aliyun-log-java-sdk) on GitHub.
