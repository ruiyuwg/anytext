Simple Log Service reports errors as alarm codes when Logtail encounters problems during data collection. This reference lists all alarm codes grouped by category, with causes and solutions for each.

## Errors safe to ignore

The following errors are typically harmless and do not require action:

-   **DOCKER\_STDOUT\_START\_ALARM** -- Occurs during first collection when `stdout` data already exists.
    
-   **DOCKER\_STDOUT\_STAT\_ALARM** -- Occurs when a container exits and `stdout` becomes inaccessible.
    
-   **AGGREGATOR\_ADD\_ALARM** -- Expected during high data volume. This error can be ignored if the actual data volume is large.
    
-   **LUMBER\_CONNECTION\_ALARM** -- Occurs when the `service_lumberjack` server shuts down during plugin stop.
    
-   **READ\_LOG\_DELAY\_ALARM** (during historical import) -- Expected when importing large volumes of historical data.
    

## Common fix: Logtail startup parameters

Many resource-related errors (CPU, memory, network) share the same fix: adjust Logtail startup parameters. See [Set Logtail startup parameters](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb) for the `cpu_usage_limit`, `mem_usage_limit`, and `send_request_concurrency` settings.

* * *

## File access and permissions

### LOGFILE\_PERMISSION\_ALARM

**Severity:** Warning

Logtail does not have permission to read the specified file.

**Cause:** The Logtail startup account does not have read access to the target log file.

**Solution:** Check the Logtail startup account on the server. Start Logtail as the root user.

### LOGDIR\_PERMISSION\_ALARM

**Severity:** Warning

Logtail does not have permission to read the log monitoring directory.

**Causes:**

-   The directory does not exist.
    
-   The directory permissions do not allow access by the Logtail user.
    

**Solution:** Verify that the log monitoring directory exists and that Logtail has read permission on it.

### REGISTER\_INOTIFY\_FAIL\_ALARM

**Severity:** Warning

Logtail failed to register the inotify watcher for the log directory in Linux.

**Causes:**

-   Logtail does not have permission to access the directory.
    
-   The directory was deleted.
    

**Solution:** Verify that the directory exists and that Logtail has the required permissions.

### OPEN\_FILE\_LIMIT\_ALARM

**Severity:** Warning

The number of files opened by Logtail exceeds the limit. No new files can be opened.

**Solution:** Check the error details for the log file path, project, and Logstore. Reduce the number of files being collected, or increase the open file limit.

### OPEN\_LOGFILE\_FAIL\_ALARM

**Severity:** Warning

Logtail failed to open a file.

**Solution:** Check the error details for the log file path, project, and Logstore. Verify that the file exists and that Logtail has read permission.

### FILE\_READER\_EXCEED\_ALARM

**Severity:** Warning

The number of file objects that Logtail has open simultaneously exceeds the limit.

**Cause:** Too many files are being collected at the same time.

**Solution:** Review the collection configuration and reduce the number of files being collected concurrently.

### STAT\_FILE\_ALARM

**Severity:** Warning

An error occurred when the LogFileReader object collected data from a file.

**Solution:** Check the error details for the file path and error information.

## Log parsing and format

### SPLIT\_LOG\_FAIL\_ALARM

**Severity:** Warning

The regular expression for the start of a line does not match the log content. Logtail cannot split the log into separate lines.

**Solution:** Verify that the regular expression is correct. For single-line logs, set the regular expression to `.*`.

### REGEX\_MATCH\_ALARM

**Severity:** Warning

In full regular expression mode, the log content does not match the specified regular expression.

**Solution:** Copy the log sample from the error message and use it to generate a new regular expression.

### PARSE\_LOG\_FAIL\_ALARM

**Severity:** Warning

In JSON or delimiter mode, parsing failed because the log format does not match the defined format.

**Solution:** Click the error message to view the detailed error report. Correct the format definition to match the actual log format.

### ENCODING\_CONVERT\_ALARM

**Severity:** Warning

Encoding conversion failed.

**Cause:** The encoding format in the Logtail configuration does not match the actual encoding of the log file.

**Solution:** Update the Logtail configuration to use the correct encoding format.

### PARSE\_TIME\_FAIL\_ALARM

**Severity:** Warning

Logtail failed to parse the log timestamp.

**Causes:**

-   The regular expression does not correctly extract the time field.
    
-   The time expression in the Logtail configuration does not match the format of the extracted time field.
    

**Solution:**

1.  Verify that the regular expression extracts the time field correctly.
    
2.  Verify that the time expression in the configuration matches the actual time format in the log.
    

### OUTDATED\_LOG\_ALARM

**Severity:** Warning

Log timestamps are more than 12 hours older than the collection time.

**Causes:**

-   Log parsing is delayed by more than 12 hours.
    
-   The custom time field is misconfigured.
    
-   The log recording program outputs incorrect timestamps.
    

**Solution:**

1.  Check whether a READ\_LOG\_DELAY\_ALARM error is also reported. If so, resolve that error first.
    
2.  Verify the time field configuration. If it is correct, check whether the log recording program outputs valid timestamps.
    

### ANCHOR\_FIND\_ALARM

**Severity:** Warning

The `processor_anchor` plugin encountered an error due to incorrect configuration or non-conforming logs.

**Subtypes:**

-   `anchor cannot find key` -- The `SourceKey` parameter is specified, but the corresponding field does not exist in the logs.
    
-   `anchor no start` -- No match for the `Start` parameter in the `SourceKey` field value.
    
-   `anchor no stop` -- No match for the `Stop` parameter in the `SourceKey` field value.
    

**Solution:** Check the error details. Verify the `SourceKey`, `Start`, and `Stop` parameters in the configuration.

### ANCHOR\_JSON\_ALARM

**Severity:** Warning

The `processor_anchor` plugin failed to expand the JSON content defined by the `Start` and `Stop` parameters.

**Solution:** Check the content being processed and the related configuration for errors or invalid logs.

### REGEX\_FIND\_ALARM

**Severity:** Warning

The `processor_regex` plugin cannot find the field specified by `SourceKey` in the logs.

**Cause:** Incorrect `SourceKey` configuration or invalid logs.

**Solution:** Verify the `SourceKey` parameter in the configuration.

### REGEX\_UNMATCHED\_ALARM

**Severity:** Warning

The `processor_regex` plugin failed to match log content.

**Subtypes:**

-   `unmatch this log content...` -- The log content does not match the regular expression in the configuration.
    
-   `match result count less...` -- The number of matched results is fewer than the configured number of Keys.
    

**Solution:** Check the error details. Verify that the regular expression and Keys are configured correctly.

### SPLIT\_FIND\_ALARM

**Severity:** Warning

The `split_char` or `split_string` plugin cannot find the field specified by `SourceKey` in the logs.

**Cause:** Incorrect `SourceKey` configuration or invalid logs.

**Solution:** Verify the `SourceKey` parameter in the configuration.

### SPLIT\_LOG\_ALARM

**Severity:** Warning

The `processor_split_char` or `processor_split_string` plugin parsed a different number of fields than specified in `SplitKeys`.

**Cause:** Incorrect `SourceKey` configuration or invalid logs.

**Solution:** Check the error details and verify the configuration.

### LOG\_REGEX\_FIND\_ALARM

**Severity:** Warning

The `processor_split_log_regex` or `processor_split_log_string` plugin cannot find the `SplitKey` specified in the configuration.

**Solution:** Check the error details and verify the configuration.

### FILTER\_INIT\_ALARM

**Severity:** Warning

Filter initialization failed.

**Cause:** The filter contains an invalid regular expression.

**Solution:** Correct the regular expression based on the details in the error message.

## Network and data delivery

### SEND\_DATA\_FAIL\_ALARM

**Severity:** Critical

Logtail failed to send data to Simple Log Service.

**Causes:**

-   No AccessKey pair has been created for the Alibaba Cloud account.
    
-   The server running Logtail cannot connect to Simple Log Service, or network quality is poor.
    
-   The write quota on the Simple Log Service server is insufficient.
    

**Solution:**

1.  Create an AccessKey pair for the Alibaba Cloud account.
    
2.  Check the configuration file at `/usr/local/ilogtail/ilogtail_config.json`. Run `curl <server_address>` to verify connectivity.
    
3.  Increase the number of shards for the Logstore to support higher write volume.
    

### SEND\_QUOTA\_EXCEED\_ALARM

**Severity:** Warning

Log write traffic exceeds the configured limit.

**Solution:** Increase the number of shards in the console. For more information, see [Split a shard](/help/en/sls/manage-shards#section-awx-35f-vdb).

### LOG\_GROUP\_WAIT\_TOO\_LONG\_ALARM

**Severity:** Warning

A data packet waited too long to be sent after generation.

**Causes:**

-   Data volume exceeds the default configuration.
    
-   Insufficient quota.
    
-   Network issues.
    

**Solution:** Check whether packets are being sent as expected. Address any data volume, quota, or network issues.

### LZ4\_COMPRESS\_FAIL\_ALARM

**Severity:** Warning

Logtail encountered an error during LZ4 compression.

**Solution:** Check the error details for the log lines, project, category, and region. Investigate the root cause based on this information.

## Resource limits and performance

### LOGTAIL\_CRASH\_ALARM

**Severity:** Critical

Logtail crashed because it exceeded the server resource usage limit.

**Solution:** Increase the CPU and memory usage limits. For more information, see [Set Logtail startup parameters](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).

### DISCARD\_DATA\_ALARM

**Severity:** Critical

Logtail discarded data because CPU resources are insufficient or network throttling is triggered.

**Solution:** Increase the CPU usage limit or the network sending concurrency limit. For more information, see [Set Logtail startup parameters](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).

### READ\_LOG\_DELAY\_ALARM

**Severity:** Warning

Log collection is delayed and falling behind log generation.

**Cause:** Insufficient CPU resources for Logtail, or network sending throttling.

**Solution:** Increase the CPU usage limit or the network sending concurrency limit. For more information, see [Set Logtail startup parameters](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).

> If you are importing historical data, a large amount of data is collected in a short time. This error is safe to ignore during historical imports.

### DROP\_LOG\_ALARM

**Severity:** Critical

Log collection is delayed, and the number of unprocessed rotated log files exceeds 20.

**Cause:** Insufficient CPU resources for Logtail, or network sending throttling.

**Solution:** Increase the CPU usage limit or the network sending concurrency limit. For more information, see [Set Logtail startup parameters](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).

### DROP\_DATA\_ALARM

**Severity:** Critical

Logtail failed to save logs to the local disk before process exit. Unsaved logs are discarded.

**Cause:** The collection process is severely blocked.

**Solution:** Increase the CPU usage limit or the network sending concurrency limit. For more information, see [Set Logtail startup parameters](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).

### PROCESS\_TOO\_SLOW\_ALARM

**Severity:** Warning

Logtail is parsing logs too slowly.

**Solution:**

1.  Check the error details for the log quantity, buffer size, and parsing time to determine whether the speed is acceptable.
    
2.  If parsing is too slow, check whether other processes on the Logtail node are consuming excessive CPU resources, or whether parsing configurations are inefficient (for example, a poorly optimized regular expression).
    

### STAT\_LIMIT\_ALARM

**Severity:** Warning

The number of files in the collection directory exceeds the limit.

**Solution:**

1.  Check whether the target collection directory contains too many files and subdirectories.
    
2.  Set an appropriate root directory for monitoring and specify a maximum monitoring depth for subdirectories.
    
3.  Increase the `mem_usage_limit` parameter if needed. For more information, see [Set Logtail startup parameters](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).
    

### DIR\_EXCEED\_LIMIT\_ALARM

**Severity:** Warning

The number of directories that Logtail is monitoring simultaneously exceeds the limit.

**Solution:** Review the collection configuration for the current Logstore and other configurations applied to Logtail. Set an appropriate root directory for monitoring and specify a maximum monitoring depth for subdirectories.

### AGGREGATOR\_ADD\_ALARM

**Severity:** Info

Logtail failed to add data to the queue because data is being sent too quickly.

**Solution:** This error can be ignored if the actual data volume is large.

## Configuration

### CATEGORY\_CONFIG\_ALARM

**Severity:** Warning

The Logtail collection configuration is invalid.

**Cause:** The regular expression failed to extract the file path to use as a topic.

**Solution:** Verify the regular expression in the Logtail configuration.

### MULTI\_CONFIG\_MATCH\_ALARM

**Severity:** Warning

Multiple Logtail configurations match the same log file. By default, a log file can match only one Logtail configuration. If multiple configurations match, only one takes effect.

> Multiple Logtail configurations can be used to collect standard output from Docker containers.

**Solution:**

-   Delete the redundant Logtail configurations.
    
-   Modify the configurations to allow a file to match multiple Logtail configurations. For more information, see [How do I collect multiple copies of logs from a file?](/help/en/sls/what-do-i-do-if-i-want-to-use-multiple-logtail-configurations-to-collect-logs-from-a-log-file#concept-2180900).
    

### SAME\_CONFIG\_ALARM

**Severity:** Warning

A Logtail configuration with the same name already exists for the Logstore. The later-discovered configuration is discarded.

**Solution:** Check the error details for the configuration path. Remove or rename the duplicate configuration.

### PROCESSOR\_INIT\_ALARM

**Severity:** Warning

The `processor_regex` plugin failed to compile the regular expression specified in the `Regex` parameter.

**Solution:** Verify that the regular expression is correct.

### PLUGIN\_ALARM

**Severity:** Warning

An error occurred during plugin initialization or lifecycle management.

**Subtypes:**

-   `init plugin error...` -- Failed to initialize the plugin.
    
-   `hold on error...` -- Failed to pause the plugin.
    
-   `resume error...` -- Failed to resume the plugin.
    
-   `start service error...` -- Failed to start a service input type plugin.
    
-   `stop service error...` -- Failed to stop a service input type plugin.
    

**Solution:** Check the error details and troubleshoot based on the specific subtype.

## Docker and container

### DOCKER\_FILE\_MAPPING\_ALARM

**Severity:** Warning

Logtail failed to add a Docker file mapping.

**Solution:** Check the error details for the command and error message. Verify the Docker file mapping configuration.

### DOCKER\_FILE\_MATCH\_ALARM

**Severity:** Warning

The specified file cannot be found in the Docker container.

**Solution:** Check the error details for the container information and file path. Verify that the file exists inside the container.

### DOCKER\_REGEX\_COMPILE\_ALARM

**Severity:** Warning

The `service_docker_stdout` plugin failed to compile the `BeginLineRegex` from the configuration.

**Solution:** Verify that the regular expression is correct.

### DOCKER\_STDOUT\_INIT\_ALARM

**Severity:** Warning

The `service_docker_stdout` plugin failed to initialize.

**Subtypes:**

-   `host...version...error` -- The Docker Engine specified in the configuration is inaccessible. Verify the Docker Engine address.
    
-   `load checkpoint error` -- The plugin failed to load the checkpoint file. This error is safe to ignore if it does not affect operations.
    
-   `container...` -- The `label` value for the specified container is invalid. Valid values are `stdout` and `stderr`.
    

**Solution:** Check the error details and troubleshoot based on the specific subtype.

### DOCKER\_STDOUT\_START\_ALARM

**Severity:** Info

The `stdout` data size exceeds the limit during collection by the `service_docker_stdout` plugin.

**Cause:** `stdout` data already exists during the first collection.

**Solution:** This error is safe to ignore.

### DOCKER\_STDOUT\_STAT\_ALARM

**Severity:** Info

The `service_docker_stdout` plugin cannot detect `stdout`.

**Cause:** `stdout` is inaccessible because the container exited.

**Solution:** This error is safe to ignore.

### PARSE\_DOCKER\_LINE\_ALARM

**Severity:** Warning

The `service_docker_stdout` plugin failed to parse a log line.

**Subtypes:**

-   `parse docker line error: empty line` -- The log line is empty.
    
-   `parse json docker line error...` -- The plugin failed to parse the log in JSON format. Check the error message and the first 512 bytes of the log.
    
-   `parse cri docker line error...` -- The plugin failed to parse the log in CRI format. Check the error message and the first 512 bytes of the log.
    

**Solution:** Check the error details and verify the log format configuration.

## MySQL binary logging

### INPUT\_CANAL\_ALARM

**Severity:** Warning

A runtime error occurred in the MySQL binary logging plugin.

> The canal service may restart when the configuration is updated. Errors caused by a service restart are safe to ignore.

**Solution:** Troubleshoot based on the details in the error message.

### CANAL\_INVALID\_ALARM

**Severity:** Warning

The internal status of the MySQL binary logging plugin is abnormal.

**Cause:** A change to the table schema during runtime caused metadata inconsistency.

**Solution:** Confirm whether the table schema was modified at the time the error occurred.

### CANAL\_RUNTIME\_ALARM

**Severity:** Warning

A runtime error occurred in the binary logging plugin.

**Cause:** Usually related to the connected primary MySQL instance.

**Solution:** Check the error details and troubleshoot based on the error message.

### MYSQL\_INIT\_ALARM

**Severity:** Warning

An error occurred during MySQL initialization.

**Solution:** Troubleshoot based on the details in the error message.

### MYSQL\_CHECKPOINT\_ALARM

**Severity:** Warning

The MySQL checkpoint format is abnormal, or a checkpoint error occurred during plugin execution.

**Subtypes:**

-   `init checkpoint error...` -- The plugin failed to initialize the checkpoint. Check the checkpoint column and retrieved values in the configuration.
    
-   `not matched checkpoint...` -- The checkpoint information does not match. If the error was caused by a configuration update, it is safe to ignore.
    

**Solution:**

1.  Confirm whether the checkpoint-related settings in the configuration were modified.
    
2.  Verify that the checkpoint format matches the format of the corresponding field.
    

### MYSQL\_TIMEOUT\_ALARM

**Severity:** Warning

A MySQL query timed out.

**Solution:** Confirm that the MySQL server is reachable and the network is functioning normally.

### MYSQL\_PARSE\_ALARM

**Severity:** Warning

Logtail failed to parse MySQL query results.

**Cause:** The checkpoint format in the MySQL configuration does not match the format of the corresponding field.

**Solution:** Verify that the checkpoint format matches the field format.

## Syslog

### SERVICE\_SYSLOG\_INIT\_ALARM

**Severity:** Warning

The `service_syslog` plugin failed to initialize.

**Solution:** Verify that the `Address` parameter in the configuration is correct.

### SERVICE\_SYSLOG\_STREAM\_ALARM

**Severity:** Warning

The `service_syslog` plugin encountered an error during TCP data collection.

**Subtypes:**

-   `accept error...` -- An error occurred when running the Accept command. The plugin waits and then retries.
    
-   `setKeepAlive error...` -- The plugin failed to set Keep-Alive. The plugin skips this error and continues.
    
-   `connection i/o timeout...` -- A TCP read operation timed out. The plugin resets the timeout and continues reading.
    
-   `scan error...` -- A TCP read error occurred. The plugin waits and then retries.
    

**Solution:** Check the error details and troubleshoot based on the specific subtype.

### SERVICE\_SYSLOG\_PACKET\_ALARM

**Severity:** Warning

The `service_syslog` plugin encountered an error during UDP data collection.

**Subtypes:**

-   `connection i/o timeout...` -- A UDP read operation timed out. The plugin resets the timeout and continues reading.
    
-   `read from error...` -- A UDP read error occurred. The plugin waits and then retries.
    

**Solution:** Check the error details and troubleshoot based on the specific subtype.

## HTTP collection

### HTTP\_LOAD\_ADDRESS\_ALARM

**Severity:** Warning

The `Addresses` parameter specified in the HTTP data collection configuration is invalid.

**Solution:** Verify the `Addresses` parameter.

### HTTP\_COLLECT\_ALARM

**Severity:** Warning

An error occurred during HTTP data collection.

**Cause:** Usually caused by a timeout.

**Solution:** Troubleshoot based on the details in the error message.

### HTTP\_INIT\_ALARM

**Severity:** Warning

The `metric_http` plugin failed to compile the `ResponseStringMatch` regular expression.

**Solution:** Verify that the regular expression is correct.

### HTTP\_PARSE\_ALARM

**Severity:** Warning

The `metric_http` plugin failed to retrieve the HTTP response.

**Solution:** Check the configuration content and the target HTTP server based on the error message.

## Other plugins

### INPUT\_COLLECT\_ALARM

**Severity:** Warning

An error occurred during collection from the input source.

**Solution:** Troubleshoot based on the details in the error message.

### GEOIP\_ALARM

**Severity:** Warning

The `processor_geoip` plugin encountered an error.

**Subtypes:**

-   `invalid ip...` -- Failed to obtain an IP address. Verify the `SourceKey` in the configuration, or check for invalid logs.
    
-   `parse ip...` -- Failed to resolve the city from the IP address. Check the detailed error message.
    
-   `cannot find key...` -- The specified `SourceKey` does not exist in the logs. Verify the configuration, or check for invalid logs.
    

**Solution:** Check the error details and troubleshoot based on the specific subtype.

### NGINX\_STATUS\_COLLECT\_ALARM

**Severity:** Warning

The `nginx_status` plugin encountered an error while retrieving the status.

**Solution:** Check the error details for the URL and specific error information.

### NGINX\_STATUS\_INIT\_ALARM

**Severity:** Warning

The `nginx_status` plugin failed to parse the URL specified in the configuration.

**Solution:** Verify that the URL is configured correctly.

### REDIS\_PARSE\_ADDRESS\_ALARM

**Severity:** Warning

The Redis plugin failed to parse the `ServerUrls` provided in the configuration.

**Solution:** Check the URL that caused the error and correct it.

### LUMBER\_CONNECTION\_ALARM

**Severity:** Info

The `service_lumberjack` server was shut down while the plugin was stopping.

**Solution:** This error is usually safe to ignore.

### LUMBER\_LISTEN\_ALARM

**Severity:** Warning

The `service_lumberjack` plugin encountered an error during listener initialization.

**Subtypes:**

-   `init tls error...` -- Verify that the TLS-related configuration is correct.
    
-   `listen init error...` -- Verify that the address-related configuration is correct.
    

**Solution:** Check the error details and troubleshoot based on the specific subtype.

### LOAD\_LOCAL\_EVENT\_ALARM

**Severity:** Warning

Logtail is handling a local event. This alarm is uncommon.

**Solution:** If the event was not caused by a manual operation, check the error details for the file name, configuration name, project, and Logstore. Investigate the root cause.

### CHECKPOINT\_INVALID\_ALARM

**Severity:** Warning

Logtail failed to parse the checkpoint.

**Solution:** Check the error details for the checkpoint key, checkpoint content (first 1,024 bytes), and specific error message.

### INIT\_CHECKPOINT\_ALARM

**Severity:** Warning

The binary logging plugin failed to load the checkpoint file. The plugin ignores the checkpoint and starts processing from the beginning.

**Solution:** Check the error details and determine whether reprocessing from the beginning is acceptable.
