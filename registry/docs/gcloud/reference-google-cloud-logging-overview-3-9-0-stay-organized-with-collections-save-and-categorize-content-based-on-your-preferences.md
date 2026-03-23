-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# google-cloud-logging overview (3.9.0) Stay organized with collections Save and categorize content based on your preferences.

3.28.0 (latest) 3.26.0 3.24.0 3.23.10 3.22.6 3.21.4 3.20.7 3.19.0 3.18.0 3.17.2 3.16.2 3.15.17 3.14.9 3.13.7 3.12.1 3.11.10 3.10.7 3.9.0 3.8.0 3.7.6 3.6.4 3.5.3

### [com.google.cloud.logging](/java/docs/reference/google-cloud-logging/3.9.0/com.google.cloud.logging)

A client for Cloud Logging - Real-time log management and analysis.

Here's a simple usage example for using google-cloud from Compute Engine/App Engine Flexible. This example shows how to write and list log entries. For the complete source code see [WriteAndListLogEntries.java](https://github.com/googleapis/google-cloud-java/tree/master/google-cloud-examples/src/main/java/com/google/cloud/examples/logging/snippets/WriteAndListLogEntries.java).

 ```

 LoggingOptions options = LoggingOptions.getDefaultInstance();
 try(Logging logging = options.getService()) {

   LogEntry firstEntry = LogEntry.newBuilder(StringPayload.of("message"))
       .setLogName("test-log")
       .setResource(MonitoredResource.builder("global")
           .addLabel("project_id", options.getProjectId())
           .build())
       .build();
   logging.write(Collections.singleton(firstEntry));

   Page<LogEntry> entries = logging.listLogEntries(
   EntryListOption.filter("logName=projects/" + options.getProjectId() + "/logs/test-log"));
   Iterator<LogEntry> entryIterator = entries.iterateAll();
   while (entryIterator.hasNext()) {
     System.out.println(entryIterator.next());
   }
 }
 
```
 

This second example shows how to use a [java.util.logging.Logger](https://docs.oracle.com/javase/8/docs/api/java/util/logging/Logger.html) to write log entries to Cloud Logging. The snippet installs a Cloud Logging handler using `LoggingHandler.addHandler(Logger, LoggingHandler)`. Notice that this could also be done through the `logging.properties` file, adding the following line:

 `com.google.cloud.examples.logging.snippets.AddLoggingHandler.handlers=com.google.cloud.logging.LoggingHandler`
 

For the complete source code see [AddLoggingHandler.java](https://github.com/googleapis/google-cloud-java/tree/master/google-cloud-examples/src/main/java/com/google/cloud/examples/logging/snippets/AddLoggingHandler.java).

 ```

 Logger logger = Logger.getLogger(AddLoggingHandler.class.getName());
 LoggingHandler.addHandler(logger, new LoggingHandler());
 logger.warning("test warning");
 
```
 

See Also: [Cloud Logging](https://cloud.google.com/logging/)

### [com.google.cloud.logging.spi](/java/docs/reference/google-cloud-logging/3.9.0/com.google.cloud.logging.spi)

### [com.google.cloud.logging.spi.v2](/java/docs/reference/google-cloud-logging/3.9.0/com.google.cloud.logging.spi.v2)

### [com.google.cloud.logging.testing](/java/docs/reference/google-cloud-logging/3.9.0/com.google.cloud.logging.testing)

A testing helper for Cloud Logging.

A simple usage example:

Before the test:

 ```

 RemoteLoggingHelper helper = RemoteLoggingHelper.create();
 Logging logging = helper.getOptions().getService();
 
```
 

Format resource names to avoid name clashes:

 ```

 String metricName = RemoteLoggingHelper.formatForTest("test-metric");
 
```
 

See Also: [Google Cloud Java tools for testing](https://github.com/googleapis/google-cloud-java/blob/master/TESTING.md#testing-code-that-uses-logging)

### [com.google.cloud.logging.v2](/java/docs/reference/google-cloud-logging/3.9.0/com.google.cloud.logging.v2)

A client to Cloud Logging API

The interfaces provided are listed below, along with usage samples.

## LoggingClient

Service Description: Service for ingesting and querying logs.

Sample for LoggingClient:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (LoggingClient loggingClient = LoggingClient.create()) {
   LogName logName = LogName.ofProjectLogName("[PROJECT]", "[LOG]");
   loggingClient.deleteLog(logName);
 }
 
```
 

## ConfigClient

Service Description: Service for configuring sinks used to route log entries.

Sample for ConfigClient:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (ConfigClient configClient = ConfigClient.create()) {
   GetBucketRequest request =
       GetBucketRequest.newBuilder()
           .setName(
               LogBucketName.ofProjectLocationBucketName("[PROJECT]", "[LOCATION]", "[BUCKET]")
                   .toString())
           .build();
   LogBucket response = configClient.getBucket(request);
 }
 
```
 

## MetricsClient

Service Description: Service for configuring logs-based metrics.

Sample for MetricsClient:

 ```

 // This snippet has been automatically generated for illustrative purposes only.
 // It may require modifications to work in your environment.
 try (MetricsClient metricsClient = MetricsClient.create()) {
   LogMetricName metricName = LogMetricName.of("[PROJECT]", "[METRIC]");
   LogMetric response = metricsClient.getLogMetric(metricName);
 }
 
```
 

### [com.google.cloud.logging.v2.stub](/java/docs/reference/google-cloud-logging/3.9.0/com.google.cloud.logging.v2.stub)

### [com.google.logging.v2](/java/docs/reference/google-cloud-logging/3.9.0/com.google.logging.v2)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
