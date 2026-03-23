This topic describes how to get started with the Simple Log Service (SLS) Android SDK to collect logs.

## Prerequisites

[Install the Android SDK](/help/en/sls/developer-reference/install-log-service-sdk-for-android#task-2104941).

## Quick start

The following example shows how to initialize the SDK and call the `addLog` method to send logs.

**Important**

-   The SDK supports the initialization of multiple instances. Each `LogProducerConfig` instance must be paired with a corresponding `LogProducerClient` instance.
    
-   When you send logs to SLS, you must use the AccessKey of an Alibaba Cloud account or a Resource Access Management (RAM) user for authentication and tamper-proofing. To prevent the security risks of storing an AccessKey in your mobile application, we recommend that you use the mobile log direct upload service to configure the AccessKey. For more information, see [Collect logs - Build a mobile log direct upload service](/help/en/sls/build-a-service-to-upload-logs-from-mobile-apps-to-log-service).
    

```
// We recommend that you save the LogProducerConfig and LogProducerClient instances globally.
private LogProducerConfig config = null;
private LogProducerClient client = null;

/**
 * Initialize the SDK.
 */

private void initProducer() {
    try {
        // The service endpoint of SLS. The endpoint must start with https:// or http://.
        final String endpoint = "your endpoint";
        final String project = "your project";
        final String logstore = "your logstore";

        config = new LogProducerConfig(context, endpoint, project, logstore);
        // Set the log topic.
        config.setTopic("example_topic");
        // Set the tag information. This tag is added to each log.
        config.addTag("example", "example_tag");

        // Specifies whether to discard expired logs. 0: Do not discard the logs. The log time is changed to the current time. 1: Discard the logs. Default value: 1.
        config.setDropDelayLog(0);
        // Specifies whether to discard logs that fail authentication. 0: Do not discard the logs. 1: Discard the logs. Default value: 0.
        config.setDropUnauthorizedLog(0);

        // LogProducerCallback is an optional configuration. If you do not need to follow the success or failure status of log sending, you do not need to register a callback.
        // To dynamically configure the AccessKey, set LogProducerCallback and update the AccessKey when the onCall method is invoked.
        final LogProducerCallback callback = new LogProducerCallback() {
            @Override
            public void onCall(int resultCode, String reqId, String errorMessage, int logBytes, int compressedBytes) {
                // resultCode: the status code. For more information, see Error codes.
                // reqId: the request ID. This parameter is deprecated.
                // errorMessage: the failure information.
                // logBytes: the original log size in bytes.
                // compressedBytes: the compressed log size in bytes.

                final LogProducerResult result = LogProducerResult.fromInt(resultCode);
                if (LogProducerResult.LOG_PRODUCER_SEND_UNAUTHORIZED == result || LogProducerResult.LOG_PRODUCER_PARAMETERS_INVALID == result) {
                    // Update the AccessKey or the initialization parameters of the SDK.
                }
            }
        };
      
        // To follow the success or failure status of log sending, you must pass a callback as the second parameter.
        client = new LogProducerClient(config, callback);
    } catch (LogProducerException e) {
        e.printStackTrace();
    }
}
// Request the AccessKey information.
private void requestAccessKey() {
    // We recommend that you use the mobile log direct upload service to configure the AccessKey information.
    // ...

    // After you obtain the AccessKey information, update it.
    updateAccessKey(accessKeyId, accessKeySecret, securityToken);
}

// Update the AccessKey information.
private void updateAccessKey(String accessKeyId, String accessKeySecret, String securityToken) {
    // The AccessKey obtained from Security Token Service (STS) contains a securityToken. You must update the AccessKey in the following way.
    if (null != securityToken && !"".equals(securityToken)) {
        config.resetSecurityToken(accessKeyId, accessKeySecret, securityToken);
    } else {
        // If the AccessKey is not obtained from STS, update the AccessKey in the following way.
        config.setAccessKeyId(accessKeyId);
        config.setAccessKeySecret(accessKeySecret);
    }
}

/**
 * Report logs.
 */
public void addLog() {
    Log log = new Log();
    // Adjust the fields to be reported as needed.
    log.putContent("content_key_1", 123456);
    log.putContent("content_key_2", 23.34f);
    log.putContent("content_key_3", "Chinese️");
    log.putContent(null, "null");
    log.putContent("null", (String) null);
    client.addLog(log);
}
```

## **Advanced features**

### **Dynamically configure parameters**

The Android SDK supports dynamic configuration of parameters such as Endpoint, ProjectName, logstore, and AccessKey.

-   Dynamically configure Endpoint, ProjectName, and logstore.
    
    ```
    // Configure parameters such as Endpoint, ProjectName, and logstore together or separately.
    // Update the endpoint.
    config.setEndpoint("your new-endpoint");
    // Update the project name.
    config.setProject("your new-project");
    // Update the logstore name.
    config.setLogstore("your new-logstore");
    ```
    
-   Dynamically configure the AccessKey.
    
    When you dynamically configure the AccessKey, we recommend that you use it with LogProducerCallback.
    
    ```
    // If you have initialized LogProducerCallback when you initialized LogProducerClient, ignore the following code.
    final LogProducerCallback callback = new LogProducerCallback() {
        @Override
        public void onCall(int resultCode, String reqId, String errorMessage, int logBytes, int compressedBytes) {
            // resultCode: the status code. For more information, see Error codes.
            // reqId: the request ID. This parameter is deprecated.
            // errorMessage: the failure information.
            // logBytes: the original log size in bytes.
            // compressedBytes: the compressed log size in bytes.
    
            final LogProducerResult result = LogProducerResult.fromInt(resultCode);
            if (LogProducerResult.LOG_PRODUCER_SEND_UNAUTHORIZED == result || LogProducerResult.LOG_PRODUCER_PARAMETERS_INVALID == result) {
                // You need to update the AccessKey or the initialization parameters of the SDK.
                requestAccessKey();
            }
        }
    };
    
    // To follow the success or failure status of log sending, you must pass a callback as the second parameter.
    client = new LogProducerClient(config, callback);
    
    // Request the AccessKey information.
    private void requestAccessKey() {
        // We recommend that you use the mobile log direct upload service to configure the AccessKey information.
        // ...
    
        // After you obtain the AccessKey information, update it.
        updateAccessKey(accessKeyId, accessKeySecret, securityToken);
    }
    
    // Update the AccessKey information.
    private void updateAccessKey(String accessKeyId, String accessKeySecret, String securityToken) {
        // The AccessKey obtained from STS contains a securityToken. You must update the AccessKey in the following way.
        if (null != securityToken && !"".equals(securityToken)) {
            config.resetSecurityToken(accessKeyId, accessKeySecret, securityToken);
        } else {
            // If the AccessKey is not obtained from STS, update the AccessKey in the following way.
            config.setAccessKeyId(accessKeyId);
            config.setAccessKeySecret(accessKeySecret);
        }
    }
    ```
    
-   Dynamically configure source, topic, and tag.
    
    **Important**
    
    You cannot set the source, topic, or tag for a specific type of log. If you set these parameters, they are applied to all logs that are waiting to be sent to SLS. This means that if you use the source, topic, and tag to track specific log types, the results may be inaccurate. We recommend that you add fields when you generate a log to identify the corresponding log types.
    
    ```
    // Set the log source.
    config.setSource("your new-source");
    // Set the log topic.
    config.setTopic("your new-topic");
    // Set the tag information. This tag is added to each log.
    config.addTag("test", "your new-tag");
    ```
    

### **Resumable upload**

The Android SDK supports resumable upload. After you enable this feature, logs added using the `addLog` method are saved to a local binlog file. This local data is deleted only after the logs are successfully sent. This ensures that logs are uploaded at least once.

Add the following code during SDK initialization to enable resumable upload.

**Important**

-   When you initialize multiple LogProducerConfig instances, the `LogProducerConfig` class's `setPersistentFilePath` method must be set to a unique value for each instance.
    
-   If your app has multiple processes and the resumable upload feature is enabled, you must initialize the SDK only in the main process. If child processes also need to collect data, you must ensure that the file path specified in the `setPersistentFilePath` method is unique for each process. Otherwise, log data may be lost or corrupted.
    
-   When you use the SDK, avoid re-initializing LogProducerConfig in multiple threads.
    

```
private void initProducer() {
    // 1: enables the resumable upload feature. 0: disables the feature. Default value: 0.
    config.setPersistent(1);
    // The name of the persistence file. Make sure that the folder where the file is located has been created.
    final String persistentFilePath = getFilesDir() + File.separator + "log_data";
    config.setPersistentFilePath(persistentFilePath);
    // The number of scrolling persistence files. We recommend that you set this parameter to 10.
    config.setPersistentMaxFileCount(10);
    // The size of each persistence file. Unit: bytes. The format is N*1024*1024. We recommend that you set N to a value from 1 to 10.
    config.setPersistentMaxFileSize(N*1024*1024);
    // The maximum number of logs that can be cached locally. We recommend that you do not set this parameter to a value greater than 1,048,576. Default value: 65,536.
    config.setPersistentMaxLogCount(65536);
}
```

### **Obfuscation rules**

```
-keep class com.aliyun.sls.android.producer.** { *; }
-keep interface com.aliyun.sls.android.producer.** { *; }
```

### **Android permissions**

```
<uses-permission android:name="android.permission.INTERNET" />
```

## Configuration parameters

All configuration parameters are provided by the LogProducerConfig class. The following table describes the parameters.

**Parameter**

**Data type**

**Description**

setTopic

String

Sets the value of the topic field. The default value is an empty string.

addTag

String

Sets a tag. The format is `tag:xxxx`. The default value is an empty string.

setSource

String

Sets the value of the source field. The default value is Android.

setPacketLogBytes

Int

The maximum size of each cached log package. If the size exceeds the limit, the logs are sent immediately.

Valid values: 1 to 5,242,880. Default value: 1024 × 1024. Unit: bytes.

setPacketLogCount

Int

The maximum number of logs in each cached log package. If the number exceeds the limit, the logs are sent immediately.

Valid values: 1 to 4,096. Default value: 1,024.

setPacketTimeout

Int

The timeout period for sending cached logs. If the cache times out, the logs are sent immediately.

Default value: 3,000. Unit: milliseconds.

setMaxBufferLimit

Int

The maximum memory that a single Producer Client instance can use. If the cache size exceeds the limit, the add\_log interface immediately returns a failure.

Default value: 64 × 1024 × 1024.

setSendThreadCount

Int

The number of sending threads. If resumable upload is enabled, this parameter is forcibly set to 1.

setPersistent

Int

Specifies whether to enable the resumable upload feature.

-   1: Enable.
    
-   0 (default): Disable.
    

setPersistentFilePath

String

The name of the persistence file. Make sure that the folder where the file is located has been created. When you configure multiple LogProducerConfig instances, make sure that the name is unique.

The default value is empty.

setPersistentForceFlush

Int

Specifies whether to enable the feature of forcibly flushing logs every time AddLog is called.

-   1: Enable. This affects performance. We recommend that you enable this feature with caution.
    
-   0 (default): Disable.
    

We recommend that you enable this feature in high-reliability scenarios.

setPersistentMaxFileCount

Int

The number of scrolling persistence files. We recommend that you set this parameter to 10. Default value: 0.

setPersistentMaxFileSize

Int

The size of each persistence file. Unit: bytes. The format is N × 1024 × 1024. We recommend that you set N to a value from 1 to 10.

setPersistentMaxLogCount

Int

The maximum number of logs that can be cached locally. We recommend that you do not set this parameter to a value greater than 1,048,576. Default value: 65,536.

setConnectTimeoutSec

Int

The network connection timeout period. Default value: 10. Unit: seconds.

setSendTimeoutSec

Int

The log sending timeout period. Default value: 15. Unit: seconds.

setDestroyFlusherWaitSec

Int

The maximum wait time for destroying the flusher thread. Default value: 1. Unit: seconds.

setDestroySenderWaitSec

Int

The maximum wait time for destroying the sender thread pool. Default value: 1. Unit: seconds.

setCompressType

Int

The compression type for data upload.

-   0: No compression.
    
-   1 (default): LZ4 compression.
    

setNtpTimeOffset

Int

The difference between the device time and the standard time. The value is \`Standard Time - Device Time\`. This difference usually occurs when the time of the user client device is not synchronized. Default value: 0. Unit: seconds.

setMaxLogDelayTime

Int

The difference between the log time and the local time. If the difference exceeds the specified value, the SDK processes the log based on the setDropDelayLog option. Unit: seconds. Default value: 7,243,600 (7 days).

setDropDelayLog

Int

Specifies whether to discard expired logs that exceed setMaxLogDelayTime.

-   0 (default): Do not discard the logs. The log time is changed to the current time.
    
-   1: Discard
    

setDropUnauthorizedLog

Int

Specifies whether to discard logs that fail authentication.

-   0 (default): Do not discard the logs.
    
-   1: Discard the logs.
    

setCallbackFromSenderThread

Boolean

Specifies whether to call back from the sender thread.

-   true (default): Call back from the sender thread.
    
-   false: Call back from the main thread.
    

## **Error codes**

All error codes are defined in the LogProducerResult enumeration. The following table describes the error codes.

**Error code**

**Value**

**Description**

**Solution**

LOG\_PRODUCER\_OK

0

Success.

Not applicable.

LOG\_PRODUCER\_INVALID

1

The SDK is destroyed or invalid.

1.  Check whether the SDK is correctly initialized.
    
2.  Check whether the destroy() method is called.
    

LOG\_PRODUCER\_WRITE\_ERROR

2

A data write error occurred. The possible cause is that the write traffic of the project has reached the upper limit.

Adjust the upper limit of the project's write traffic. For more information, see [Adjust resource quotas](/help/en/sls/adjust-resource-quotas).

LOG\_PRODUCER\_DROP\_ERROR

3

The disk or memory cache is full, and logs cannot be written.

Adjust the values of the maxBufferLimit, persistentMaxLogCount, and persistentMaxFileSize parameters and retry.

LOG\_PRODUCER\_SEND\_NETWORK\_ERROR

4

A network error occurred.

Check the configurations of Endpoint, Project, and logstore.

LOG\_PRODUCER\_SEND\_QUOTA\_ERROR

5

The write traffic of the project has reached the upper limit.

Adjust the upper limit of the project's write traffic. For more information, see [Adjust resource quotas](/help/en/sls/adjust-resource-quotas).

LOG\_PRODUCER\_SEND\_UNAUTHORIZED

6

The AccessKey has expired or is invalid, or the AccessKey access policy is incorrectly configured.

Check the AccessKey.

The RAM user must have the permissions to operate SLS resources. For more information, see [Grant permissions to a RAM user](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#section-kxp-1ok-zj4).

LOG\_PRODUCER\_SEND\_SERVER\_ERROR

7

A service error occurred.

Submit a [ticket](https://smartservice.console.alibabacloud.com/console.htm) to contact technical support.

LOG\_PRODUCER\_SEND\_DISCARD\_ERROR

8

Data is discarded. This is usually because the device time is not synchronized with the server time.

The SDK automatically resends the data.

LOG\_PRODUCER\_SEND\_TIME\_ERROR

9

The time is not synchronized with the server time.

The SDK automatically fixes this issue.

LOG\_PRODUCER\_SEND\_EXIT\_BUFFERED

10

When the SDK is destroyed, the cached data has not been reported.

We recommend that you enable the resumable upload feature to prevent data loss.

LOG\_PRODUCER\_PARAMETERS\_INVALID

11

The SDK initialization parameters are invalid.

Check the configurations of parameters such as AccessKey, Endpoint, Project, and logstore.

LOG\_PRODUCER\_PERSISTENT\_ERROR

99

Failed to write cached data to the disk.

1\. Check whether the cache file path is correctly configured.

2\. Check whether the cache file is full.

3\. Check whether the system disk space is sufficient.

## **FAQ**

### **Why are there duplicate logs?**

The Android SDK sends logs asynchronously. Depending on network conditions, a log may fail to send and will be resent. The SDK considers a send operation successful only when a 200 status code is returned. Therefore, some logs may be duplicated. We recommend that you use SQL queries and analysis statements to deduplicate logs.

If the log duplication rate is high, you must first check for issues in the SDK initialization. The main causes and solutions are as follows:

-   Incorrect resumable upload configuration
    
    If the resumable upload feature is configured incorrectly, confirm that the file path passed to the `setPersistentFilePath` method is globally unique.
    
-   Repeated SDK initialization
    
    -   A common cause of repeated SDK initialization is an incorrect implementation of the singleton pattern for SDK initialization. We recommend that you use the following method to initialize the SDK.
        
        ```
        public class AliyunLogHelper {
            private LogProducerConfig config;
            private LogProducerClient client;
        
            private static class Holder {
                private static final AliyunLogHelper INSTANCE = new AliyunLogHelper();
            }
        
            public static AliyunLogHelper getInstance() {
                return Holder.INSTANCE;
            }
        
            private AliyunLogHelper() {
                initProducer();
            }
        
            private void initProducer() {
                // Replace the following code with your initialization code.
                try {
                    config = new LogProducerConfig();
                    client = new LogProducerClient(config);
                } catch (LogProducerException e) {
                    e.printStackTrace();
                }
            }
        
            public void addLog(Log log) {
                if (null == client) {
                    return;
                }
        
                client.addLog(log);
            }
        }
        ```
        
    -   Another cause of repeated SDK initialization is the use of multiple processes. We recommend that you initialize the SDK only in the main process. Alternatively, if you initialize the SDK in different processes, you must set a unique value for `setPersistentFilePath` in each process.
        
-   Configuration optimization for weak network environments
    
    If your application runs in a weak network environment, we recommend that you optimize the SDK configuration parameters as shown in the following example.
    
    ```
    // Initialize the SDK.
    private void initProducer() {
        // Adjust the HTTP connection and sending timeout periods to reduce the log duplication rate.
        // Adjust the specific timeout periods as needed.
        config.setConnectTimeoutSec(20);
        config.setSendTimeoutSec(20);
      
        // Other initialization parameters.
        // ...
    }
    ```
    

### **What do I do if logs are missing?**

The log sending process is asynchronous. If the app is closed before the logs are sent, unsent logs may be lost. We recommend that you enable the resumable upload feature. For more information, see [Resumable upload](#7f63dc682fc9o).

### **What do I do if log reporting is delayed?**

The SDK sends logs asynchronously. Logs may not be sent immediately due to network conditions or specific application scenarios. Delays on a small number of devices are normal. If delays are widespread, check for the following error codes.

**Error code**

**Description**

LOG\_PRODUCER\_SEND\_NETWORK\_ERROR

Check whether the configurations of Endpoint, Project, and logstore are correct.

LOG\_PRODUCER\_SEND\_UNAUTHORIZED

Check whether the AccessKey has expired or is invalid, or whether the AccessKey access policy is correctly configured.

LOG\_PRODUCER\_SEND\_QUOTA\_ERROR

The write traffic of the project has reached the upper limit. For more information, see [Adjust resource quotas](/help/en/sls/adjust-resource-quotas).

### **Does the Android SDK support DNS pre-parsing and cache policies?**

The following example shows how to use the Android SDK, HTTPDNS SDK, and OkHttp to implement DNS pre-resolution and cache policies.

1.  Implement a custom DNS interface.
    
    ```
    /**
      * Implement a custom DNS parsing service based on the OkHttp Dns interface for your reference.
      */
    public class OkHttpDns implements Dns {
      private Context mContext;
    
      public OkHttpDns(Context context) {
        mContext = context;
      }
    
      @Override
      public List<InetAddress> lookup(String host) throws UnknownHostException {
        // !!Note!! 
        // Replace accountId with the value that you obtained from the HTTPDNS service. For more information, see the HTTPDNS documentation.
        HTTPDNSResult httpdnsResult = HttpDns.getService(mContext, accountId)
          .getHttpDnsResultForHostSync(host, RequestIpType.both);
        List<InetAddress> inetAddresses = new ArrayList<>();
        InetAddress address;
        try {
          if (httpdnsResult.getIps() != null) {
            // Process IPv4 addresses.
            for (String ipv4 : httpdnsResult.getIps()) {
              address = InetAddress.getByName(ipv4);
              inetAddresses.add(address);
            }
          }
    
          if (httpdnsResult.getIpv6s() != null) {
            // Process IPv6 addresses.
            for (String ipv6 : httpdnsResult.getIpv6s()) {
              address = InetAddress.getByName(ipv6);
              inetAddresses.add(address);
            }
          }
        } catch (UnknownHostException e) {
    
        }
    
        if (!inetAddresses.isEmpty()) {
          return inetAddresses;
        }
    
        return okhttp3.Dns.SYSTEM.lookup(host);
      }
    }
    ```
    
2.  Implement a custom NetworkInterface.
    
    ```
    /**
       * Implement the NetworkInterface of the SLS SDK based on OkHttp for your reference.
       */
    private static class OkHttpNetworkInterface implements LogProducerHttpTool.NetworkInterface {
    
      private OkHttpClient client;
    
      public OkHttpNetworkInterface(Context context) {
        client = new OkHttpClient.Builder()
          .connectTimeout(30, TimeUnit.SECONDS)
          .readTimeout(30, TimeUnit.SECONDS)
          .writeTimeout(30, TimeUnit.SECONDS)
          .dns(new OkHttpDns(context))
          .build();
      }
    
      @Override
      public NetworkResponse send(String urlString, String method, String[] header, byte[] body) {
        // We recommend that you first call the original implementation of the SDK and then report logs using OkHttp when log reporting fails.
        LogHttpResponse logHttpResponse = LogProducerHttpTool.android_http_post(urlString, method, header, body);
        if (logHttpResponse.getStatusCode() != -1) {
          NetworkResponse response = new NetworkResponse();
          response.statusCode = logHttpResponse.getStatusCode();
          response.errorMessage = logHttpResponse.getErrorMessage();
          return response;
        }
    
        // Report logs using OkHttp.
        Request.Builder builder = new Request.Builder();
        builder.url(urlString);
        builder.post(RequestBody.create(body));
    
        for (int i = 0; i < header.length; i += 2) {
          builder.addHeader(header[i], header[i + 1]);
        }
    
        // Regardless of whether the request is successful, you must return a NetworkResponse. Otherwise, the SDK may not run as expected.
        try (okhttp3.Response response = client.newCall(builder.build()).execute()) {
          NetworkResponse httpResponse = new NetworkResponse();
          httpResponse.statusCode = response.code();
          httpResponse.headers = response.headers().toMultimap();
          httpResponse.errorMessage = response.message();
    
          return httpResponse;
        } catch (IOException e) {
          NetworkResponse httpResponse = new NetworkResponse();
          httpResponse.statusCode = -1;
          httpResponse.headers = null;
          httpResponse.errorMessage = e.getLocalizedMessage();
    
          return httpResponse;
        }
      }
    
    }
    ```
    
3.  Initialize the SLS SDK.
    
    ```
    public class AliyunSLS {
      private void initSLS(Context context) {
        // Set a custom NetworkInterface for the SLS SDK.
        // !!!Note!!!
        // This setting takes effect for all SLS SDK instances.
        LogProducerHttpTool.setNetworkInterface(new OkHttpNetworkInterface(context));
    
        // Initialize the SLS SDK.
        initProducer();
      }
    
      private void initProducer() {
        // Implement the initialization of LogProducerConfig and LogProducerClient here.
        // ...
      }
    }
    ```
