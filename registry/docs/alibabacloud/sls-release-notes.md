This topic describes the release notes for Simple Log Service Logtail and provides links to the relevant references.

**Note**

Logtail 3.X and later use the LoongCollector image. For more information, see [LoongCollector release notes](/help/en/sls/loongcollector-release-history).

## 2.1.16

Release date: September 9, 2025

-   Fixed issues
    
    -   Container file descriptors were not released when a reader recovered from a checkpoint.
        
    -   Feedback caused timeout events and log truncation.
        

## 2.1.15

Published on: 2025-08-15

-   Fixed issues
    
    -   Enhanced alerting for processor timeouts and zero-width regular expressions.
        

## 2.1.14

Release date: July 4, 2025

-   Fixed issue
    
    -   File descriptor leak caused by the rotator reader not closing files after a container stopped.
        

## 2.1.13

Release date: July 1, 2025

-   Fixed issues
    
    -   Timeout issue caused by the Docker inspect command.
        
    -   The rotator reader failed to close a file on container shutdown.
        
    -   Added support for the enhanced method to access ECS metadata.
        

## 2.1.11

Release Date: June 16, 2025

-   Fixed issues
    
    -   A crash in Golang caused by an incorrect null value check for an interface.
        
    -   A potential crash in JsonLogFileReader caused by a buffer overflow during read operations.
        
    -   Extraneous null characters during file reads.
        

## **2.1.10**

Release date: May 28, 2025

-   Fixed issue
    
    -   When the system is recovering from a full disk, Logtail collection cannot be resumed automatically. This issue is fixed.
        

## **2.1.9**

Release date: May 23, 2025

-   Fixed issues
    
    -   Updated the runc library version to fix the file descriptor leakage vulnerability in runc.
        
    -   Added support for the CRI V1 interface to adapt to containerd 2.0.
        

## **2.1.8**

Release date: May 14, 2025

-   Optimization
    
    -   Optimized metric data writing to Metricstore.
        
-   Fixed issue
    
    -   The old version of the stdout and stderr collection plugin fails to completely collect the last portion of logs when the container stops. This issue is fixed.
        

## **2.1.7**

Release date: April 1, 2025

-   Fixed issues
    
    -   When you collect data from a Linux server, directory concatenation is invalid because the log file path is set to a root directory in a Logtail configuration. This issue is fixed.
        
    -   The container mount information is invalid due to concurrent writing in a container environment. This issue is fixed.
        
    -   When you collect metrics, the data types of the metrics are invalid. This issue is fixed.
        
    -   When you collect data from a container, specific container metadata is missing. This issue is fixed.
        

## **2.1.6**

Release date: March 3, 2025

-   Optimization
    
    -   The FORCE\_RELEASE\_STOP\_CONTAINER\_FILE environment variable is added. You can use the environment variable to forcefully release file handles when your application container is stopped.
        
-   Fixed issues
    
    -   When you collect data from container files, an error occurs in container status identification due to persistent volume mount. This issue is fixed.
        
    -   When you collect data from a container, an error occurs in log file path identification due to multiple slashes (/) specified for the log file path in a Logtail configuration. This issue is fixed.
        
    -   When the parsing module for stdout and stderr parses the log in the last line in C++, an error occurs. This issue is fixed.
        
    -   When the containerd container runtime is used, the enable\_containerd\_upper\_dir\_detec environment variable does not take effect. This issue is fixed.
        

## **2.1.5**

Release date: January 2, 2025

-   New features
    
    -   The C++ plugin for collecting stdout and stderr is supported when you use environment variables to collect stdout and stderr.
        
    -   The trace data transmitted over OpenTelemetry Protocol (OTLP) can be collected to Simple Log Service.
        
-   Fixed issues
    
    -   Specific container information cannot be obtained due to repeated execution of the up command in Docker Compose scenarios. This issue is fixed.
        
    -   Self-monitoring CPU-related metrics are missing. This issue is fixed.
        
    -   When you use the C++ plugin for collecting stdout and stderr to parse the last log in a file, failures occur. This issue is fixed.
        

## **2.1.1**

Release date: November 1, 2024

-   New features
    
    -   C++ is supported in collecting container stdout and stderr.
        
    -   Self-monitoring capabilities are upgraded. C++ and Golang plugins report self-monitoring data in a unified manner.
        

## **2.0.10**

Release date: October 19, 2024

-   Fixed issues
    
    -   The binary log plugin cannot retrieve the start global transaction identifier (GTID) when it exceeds 1024 bytes. This issue is fixed.
        
    -   The native delimiter plugin cannot parse strings containing double quotation marks. This issue is fixed.
        

## **2.0.8**

Release date: August 13, 2024

-   Fixed issue
    
    -   In Logtail V2.0.7, a token that is requested when you use environment variables to configure collection settings can expire. This issue is fixed.
        

## **2.0.7**

Release date: July 31, 2024

-   Fixed issues
    
    -   If a zero-byte string in a JSON log is escaped, the log is truncated. This issue is fixed.
        
    -   When the system calls the gethostbyname method, which is not thread safe, a coredump occurs. This issue is fixed.
        
    -   When you use OpenTelemetry to parse gauge metrics, labels are lost. This issue is fixed.
        
    -   When a program resumes data consumption from a checkpoint, a large number of files may be generated due to rotation, and the length of the reader queue may be exceeded. As a result, the data consumption fails to be resumed. In addition, a new reader incorrectly reads the checkpoint of an existing reader during inode reuse. In this case, truncation and duplicate collection occur. This issue is fixed.
        
    -   When you use the `input_canel` plugin, the global transaction identifier (GTID) is inaccurate. This issue is fixed.
        
    -   When the resource usage exceeds the hard limit, Logtail stops responding. This issue is fixed.
        

## **2.0.6**

Release date: July 3, 2024

-   New feature
    
    -   The rund architecture of Alibaba Cloud Container Compute Service (ACS) is supported.
        

## **2.0.5**

Release date: June 25, 2024

-   Optimization
    
    -   The containerd sock retry and fault tolerance mechanism is optimized.
        
-   Fixed issues
    
    -   When you use Logtail V2.0.4 to collect logs from a Kubernetes cluster, the configured environment variable settings do not take effect. This issue is fixed.
        
    -   In stdout and stderr collection scenarios, Logtail plugins encounter `panic` errors when the `GetRealPath` function is called. This issue is fixed.
        
    -   When you use Logtail configurations that contain extended plugin settings to collect self-monitoring logs of Distributed System Performance Monitor, the logs are lost. This issue is fixed.
        
    -   When a log read operation times out, data is truncated. This issue is fixed.
        
    -   System time that is accurate to the nanosecond is no longer supported.
        
    -   When you use the log splitting plugin, the related metrics are lost. This issue is fixed.
        

## 1.8.11

Release date: September 4, 2024

-   Optimization
    
    -   The retry mechanism for detecting container runtimes enhances accuracy in runtime identification.
        
    -   Support for DNS caching is available when fetching configurations from the config server.
        
    -   A default timeout of 60 seconds is established for multi-line separation.
        
    -   The `processor_gotime` allows for nanosecond-level configuration.
        
-   Fixed issues
    
    -   The bin log plugin retrieves GTID for logs over 1024 bytes correctly.
        
    -   The native delimiter plugin now parses entries containing double quotes successfully.
        
    -   The internal `gethostbyname` function is updated to be thread-safe, addressing concurrency issues.
        

## **1.8.10**

Release date: July 12, 2024

-   Optimization
    
    -   The `ALICLOUD_SLS_CLIENT_AUTH_VERSION` environment variable can be used to configure V4 authentication for Logtail to use Simple Log Service SDK.
        

## **1.8.9**

Release date: June 25, 2024

-   Optimization
    
    -   The retry mechanism for container runtime detection is optimized.
        
-   Fixed issues
    
    -   When `dockershim`\-related files exist, the system cannot accurately identify `containerd` containers. This issue is fixed.
        
    -   When `*//` exists in the path to a file, a `coredump` occurs. This issue is fixed.
        
    -   When you collect container stdout and stderr, the path to the required files fails to be obtained. This issue is fixed.
        
    -   During file rotation, forceful refresh cannot cover full data. This issue is fixed.
        

## **1.8.8**

Release date: April 17, 2024

-   Optimization
    
    -   The log display of the `sender` module is optimized.
        
-   Fixed issues
    
    -   When indexes have the same key, the keys conflict. This issue is fixed. In the same scenario after the fix, the keys are compatible with each other, and the keys are orderly arranged.
        
    -   When the `aliuid` user identifier file is deleted, logs are still collected. This issue is fixed.
        

## **1.8.7**

Release date: March 5, 2024

-   New features
    
    -   Resource group configuration is supported when the logtail-ds component is installed in a Container Service for Kubernetes (ACK) cluster.
        
    -   The `processor_rate_limit` plugin is added.
        
-   Fixed issue
    
    -   The collection process fails to be gracefully shut down after Logtail collects historical data. This issue is fixed.
        

## **1.8.6**

Release date: January 30, 2024

-   Optimization
    
    -   The metric data and upload logic of the Golang plugin are optimized. The metrics can be uploaded only by using the C++ plugin.
        
-   Fixed issue
    
    -   The Golang plugin incorrectly loads data after the high-precision timestamp switch is turned on. This issue is fixed.
        

## **1.8.5**

Release date: January 24, 2024

-   Fixed issue
    
    -   An exception exists in the Golang plugin when multiple threads are used to process label data. This issue is fixed.
        

## **1.8.4**

Release date: January 4, 2024

-   Optimization
    
    -   The IP address of a machine can be used by the goprofile plugin to upload data.
        
-   Fixed issues
    
    -   A regular expression configuration contains a key of time\_key, but the value of the key is not time. This issue is fixed.
        
    -   Occasional failures occur if CURLOPT\_NOSIGNAL is not configured when libcurl is used. This issue is fixed.
        
    -   Fields are disordered when the native delimiter plugin parses logs that start with spaces. This issue is fixed.
        
    -   Errors occur in time zone processing when the native plugin discards timeout logs. This issue is fixed.
        
    -   The native JSON plugin retains the original content\_key field after JSON data that contains the content\_key field is parsed. This issue is fixed.
        
    -   The native delimiter plugin causes memory leaks. This issue is fixed.
        
    -   Logs are duplicated because checkpoint dump is earlier than directory registration. This issue is fixed.
        
    -   Time values that contain commas (,) cannot be parsed for Apsara logs. This issue is fixed.
        
    -   Data is duplicated when the native delimiter plugin fails to parse data in scenarios when raw logs need to be retained. This issue is fixed. After the fix, raw logs are retained only in the \_\_raw\_log\_\_ field and not in the content field.
        
    -   The IP address of a pod in a Kubernetes cluster may fail to be obtained if the network mode of the pod is set to HostNetwork. This issue is fixed.
        

## **1.8.3**

-   Fixed issues
    
    -   Logs may be repeatedly collected due to container memory repairs. This issue is fixed.
        
    -   plugin failures occur when container info contains the nil field. This issue is fixed.
        
    -   When you parse data by using ProcessorParseDelimiterNative, the next line is also parsed. This issue is fixed.
        
    -   Files may not be completely read due to backpressure. This issue is fixed.
        
    -   Plugin failures occur when plugin\_export panic occurs. This issue is fixed.
        
    -   Failures occur when Apsara logs are parsed. This issue is fixed.
        
    -   Data stickiness occurs when Apsara logs are parsed. This issue is fixed.
        

## **1.8.0**

-   New features
    
    -   Log truncation is supported in expired operations.
        
    -   The time of a log that is collected by using Simple Log Service Flusher can be accurate to the nanosecond.
        
    -   The global host path blacklist is added.
        
    -   The processor\_otel\_metric plugin is added to parse trace data.
        
    -   Resource tags can be added when you create a Logtail configuration by using environment variables.
        
-   Optimization
    
    -   Incomplete logs can be cached to reduce the number of times that the system reads files.
        
    -   Environment variables can be used to control the level of logs that are displayed.
        
    -   The skywalking plugin can be used to capture the db.connection\_string tag.
        
    -   Network interface card (NIC) IP addresses can be verified to obtain host IP addresses in a more accurate manner.
        
-   Fixed issues
    
    -   Duplicate data is collected because a StatefulSet on which volumes are mounted drifts to different nodes. This issue is fixed.
        
    -   The file names of the collected logs are incorrect due to inode reuse of empty files. This issue is fixed.
        
    -   A container cannot exit because a file is reopened by using a checkpoint. This issue is fixed.
        
    -   Time zones cannot be adjusted for logs in the Apsara system. This issue is fixed.
        
    -   A parsing error may occur because Enter is not pressed after you parse logs in JSON mode. This issue is fixed.
        
    -   An exception occurs in JSON parsing because the beginning of data that is read contains invalid JSON-formatted data. This issue is fixed.
        

## **1.7.1**

-   New features
    
    -   The input\_command plugin is added to collect command execution results.
        
    -   The processor\_log\_to\_sls\_metric plugin is added to parse logs into metrics.
        
-   Optimization
    
    -   The processor\_json plugin can be used to parse JSON arrays.
        
    -   Custom root file system (rootfs) paths and automatically discovered paths are supported when data is collected from a containerd container.
        
    -   The reporting logic of the container metadata preview feature is optimized.
        
-   Fixed issues
    
    -   Container stdout cannot be collected when the path to the stdout file is a symbolic link. This issue is fixed.
        
    -   A container cannot exit due to file descriptor (FD) locking when only a container deletion event occurs. This issue is fixed.
        
    -   The nil panic error is reported by the service\_go\_profile plugin. This issue is fixed.
        
    -   Collection errors occur when disk-related metrics are collected. This issue is fixed by adding a timeout configuration.
        
    -   The metadata of profile data is inaccurate in container scenarios. This issue is fixed.
        

## 1.6.0

-   New features
    
    -   OpenKruise metrics can be collected by Full-stack Monitoring.
        
-   Optimization
    
    -   Container metadata is added to Logtail profile data.
        
-   Fixed issues
    
    -   FDs are closed due to container exit. This issue is fixed.
        
    -   Cache errors may occur when you configure environment variables in a Kubernetes cluster. This issue is fixed.
        

## 1.5.1

-   New features
    
    -   The startup parameter data\_endpoint\_policy is added to configure an endpoint switchover policy for Logtail.
        
    -   The goProfile pull mode is supported by the profiling feature.
        
    -   The processor\_string\_replace plugin is added to replace strings.
        
    -   HTTP\_PROXY can be used to configure a network proxy for Logtail.
        
-   Optimization
    
    -   The performance of the processor\_split\_key\_value plugin is optimized, and multi-character quotes are added.
        
-   Fixed issue
    
    -   The statistical data of the disk usage metric that is collected by using the metric\_system\_v2 plugin is inaccurate. This issue is fixed.
        

## 1.4.0

-   New features
    
    -   The Pyroscope protocol is supported by the HTTP input service.
        
    -   Container information can be reported from clients to enhance the observability of container collection configurations.
        
-   Optimization
    
    -   More logstore-specific configurations such as cold storage configurations are supported when data is automatically collected by running the env command.
        

## 1.3.2

-   Optimization
    
    -   The prometheus plugin supports Staleness data.
        
-   Fixed issues
    
    -   If the system time fails to be used or the log time fails to be parsed, time-zone adjustment options may be ignored. This issue is fixed.
        
    -   Logs may be repeatedly collected due to inode reuse. This issue is fixed.
        
    -   The Grok plugin may not work when the plugin parses Chinese characters. This issue is fixed.
        
    -   The memory that is occupied by containers in Logtail V1.2.1 is excessively high. This issue is fixed.
        

## 1.3.1

-   New features
    
    -   OpenTelemetry logs can be collected over HTTP.
        
    -   The processor\_desensitize plugin is added. For more information, see [Data security (masking and encryption) plugins](/help/en/sls/data-security-desensitization-encryption-class-plug-in).
        
-   Optimization
    
    -   In the container environment, HTTPS is supported when you use environment variables to create Simple Log Service resources.
        
    -   In the container environment, logstore specifications are configurable when you use custom resource definitions (CRDs) to create logstores.
        
    -   If Logtail plugins are used to process data, the offsets of content into files can be obtained.
        
    -   By default, continuous context is retained when container stdout and stderr are collected.
        
    -   Memory usage is optimized to collect Prometheus data.
        
-   Fixed issues
    
    -   In the Docker environment, FD leaks and event omissions may occur. This issue is fixed.
        
    -   When a Logtail configuration is updated, file handle leaks may occur. This issue is fixed.
        
    -   Special hostnames cannot be correctly resolved into IP addresses. This issue is fixed.
        
    -   If multiple file paths are specified and several paths are nested, data is repeatedly collected from the same files. This issue is fixed.
        

## 1.2.1

-   New features
    
    -   The query results from SQL Server databases and PostgreSQL databases can be collected. For more information, see [Collect SQL Server query results](/help/en/sls/collect-sql-server-query-results#task-2260852) and [Collect PostgreSQL query results](/help/en/sls/collect-postgresql-query-results#task-2261264).
        
    -   JMX performance metrics can be collected.
        
    -   The aggregator\_context plugin is added to aggregate contextual logs. For more information, see [aggregators configuration](/help/en/sls/overview-22#section-yfm-xyj-hit).
        
        The contextual query and LiveTail features are available for logs that are processed by using Logtail plugins. The \_\_topic\_\_ field can be extracted from the logs that are processed by using Logtail plugins.
        
    -   The Grok plugin is added to extract log fields. For more information, see [Field processing plugins](/help/en/sls/field-processing-class-plug-in).
        
        Multiple Grok expressions can be specified at a time to match multiple formats of logs.
        
-   Optimization
    
    -   The stdout and stderr of containers that exit in seconds after the containers are started can be collected.
        
-   Fixed issue
    
    -   The timestamps that are accurate to the microsecond in Apsara logs cannot be parsed. This issue is fixed.
        

## 1.1.1

-   New features
    
    -   A new Logtail plugin is added to process CSV data. For more information, see [Field processing plugins](/help/en/sls/field-processing-class-plug-in).
        
    -   eBPF can be used to analyze network traffic at Layer 4 and Layer 7. The HTTP, MySQL, PostgreSQL, Redis, and Domain Name System (DNS) protocols are supported.
        

## 1.1.0

-   New feature
    
    -   The netping plugin supports httping and DNS resolution, which are time-consuming.
        

## 1.0.34

-   New features
    
    -   The SkyWalking Logging API is added.
        
-   Optimization
    
    -   The quick release of file handles is supported for files in a containerd container that is stopped.
        
-   Fixed issue
    
    -   The Kubernetes labels of containerd containers cannot be used for matching. This issue is fixed.
        

## 1.0.32

-   New features
    
    -   When Logtail collects text logs, the extended setting "enable\_precise\_timestamp": true and the processor\_strptime plugin can be used to parse high-precision time values.
        
-   Optimization
    
    -   The detection mechanism of the rootfs in a Kubernetes cluster is optimized.
        
    -   The recognition mechanism of container runtimes in a Kubernetes cluster is optimized.
        
-   Fixed issue
    
    -   Exceptions that are related to the netping plugin occur in a Windows system. This issue is fixed.
        

## 1.0.31

-   New features
    
    -   Environment variables can be used to create a Logtail configuration.
        
    -   The netping plugin is added. You can use the plugin to collect data about ping commands when you ping a destination by IP address.
        
    -   The gotime plugin can be used to convert the extracted log time to the timestamp format.
        
    -   When Logtail collects syslog logs, the\_client\_ip\_ field is added to indicate the IP address of the syslog client that transfers logs.
        
-   Optimization
    
    -   The memory that is used to collect container stdout and stderr is optimized.
        

## 1.0.30

-   New features
    
    -   The Prometheus plugin can be used to collect Prometheus data from the same machine by using multiple Logtail configurations.
        
    -   Windows nodes in Container Service for Kubernetes clusters support authentication by using add-on tokens.
        
-   Fixed issues
    
    -   The process collection plugin encounters errors in the threadNum and fdNum metrics in Linux. This issue is fixed.
        
    -   The plugins of SkyWalking encounter the ConfigurationDiscoveryService not implement error. This issue is fixed.
        

## 1.0.29

-   Fixed issue
    
    -   When Logtail collects container stdout and stderr, labels cannot be matched by using regular expressions. This issue occurs in Logtail V1.0.27 and Logtail V1.0.28. This issue is fixed.
        

## 1.0.28

-   New features
    
    -   Simple Network Management Protocol (SNMP) data can be collected.
        
    -   In the plugins of SkyWalking V3, instances can be filtered by using instance attributes.
        
    -   The **Incomplete Entry Upload** parameter can be configured when the delimiter mode is used.
        
-   Fixed issue
    
    -   The ID of a span in the plugins of SkyWalking V2 is incorrect. This issue is fixed.
        

## 1.0.27

-   New features
    
    -   The processor\_regex plugin is added.
        
    -   Multi-region control can be configured.
        
-   Optimization
    
    -   The IO Counter metric can be collected from hosts.
        
-   Fixed issues
    
    -   The service\_http\_server plugin does not release UNIX links. This issue is fixed.
        
    -   When Logtail runs multiple Logtail configurations that use the metric\_meta\_kubernetes plugin, conflicts occur. This issue is fixed.
        

## 1.0.26

-   New features
    
    -   Process metrics can be collected.
        
    -   File handles and TCP data can be collected from hosts.
        
    -   The metadata of Kubernetes clusters can be collected.
        
    -   The metadata of hosts can be collected.
        
    -   The gRPC output plugin is added.
        
    -   When Logtail collects container logs, semantic recognition can be performed in Kubernetes clusters.
        
    -   The trace data of SkyWalking V2 can be collected.
        
    -   The input\_canal plugin is supported on Windows systems that use the i386 architecture.
        
-   Optimization
    
    -   The accuracy of metrics that are collected from hosts is improved. Containers are deployed on the hosts.
        

## 1.0.25

-   Fixed issue
    
    -   When you import historical data, a breakdown may occur. This issue is fixed.
        
-   Optimization
    
    -   The logic that processes inaccurate metadata is improved. The metadata is returned by the readdir function of file systems.
        

## 1.0.24

-   Fixed issue
    
    -   When Logtail is just started, the data that Logtail sends does not contain a custom identifier. This issue is fixed.
        

## 1.0.22

-   Fixed issue
    
    -   When network interruptions occur in global acceleration mode, Logtail may stop submitting status data that is generated by the system to Simple Log Service. This issue is fixed.
        

## 1.0.21

As a minor version of Logtail V1.0, Logtail V1.0.21 is the first version that is released in all regions. Logtail V1.0.21 includes all features of Logtail V0.16.64 and provides the following new features:

-   New features
    
    -   The exactly\_once\_concurrency parameter is added to record the fine-grained checkpoints by file on local disks. For more information, see [Logtail configurations](/help/en/sls/developer-reference/logtail-configurations#concept-f3n-s5q-12b).
        
    -   The enable\_log\_time\_auto\_adjust parameter is added to allow the system to automatically set the log time to the local time of the server. For more information, see [Configure the startup parameters of Logtail](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).
        
    -   The enable\_log\_position\_meta parameter is introduced to add the metadata of a source log file to a collected log. For more information, see [Logtail configurations](/help/en/sls/developer-reference/logtail-configurations#concept-f3n-s5q-12b).
        
    -   The specified\_year parameter is added to supplement the log time by using the current year or a specified year. For more information, see [Logtail configurations](/help/en/sls/developer-reference/logtail-configurations#concept-f3n-s5q-12b).
        

## 0.16.68

-   Fixed issues
    
    -   When Logtail collects container stdout and stderr, Simple Log Service fails to parse the collected data because the P (partial) tag of the data cannot be identified. This issue is fixed.
        
    -   When the service\_skywalking\_agent\_v3 plugin is installed on multiple application servers, the ID of a span and the ID of a parent span in the Links parameter are incorrect. This issue is fixed.
        

## 0.16.64

-   Optimization
    
    -   The timeout period for requesting a container engine is increased from 3 seconds to 30 seconds. The DOCKER\_CLIENT\_REQUEST\_TIMEOUT environment variable is added to specify the timeout period for requesting a container engine.
        
-   Fixed issues
    
    -   The ID of a parent span in the service\_skywalking plugin is incorrect. This issue is fixed.
        
    -   When a container engine has an exception, the code that is used to create a Logtail configuration based on environment variables stops running. This issue is fixed.
        

## 0.16.62

**Note**

If you are using Logtail V0.16.58 or Logtail V0.16.60, we recommend that you update Logtail to V0.16.62.

-   Fixed issue
    
    -   Data fails to be sent due to out-of-order data. This issue is fixed.
        

## 0.16.60

-   New feature
    
    -   Container data can be collected in the containerd environment.
        

## 0.16.56

-   Optimization
    
    -   The net\_err\_stat metric in service logs is adjusted to record only sending errors that are caused by network issues.
        

## 0.16.54

-   New feature
    
    -   The net\_err\_stat metric is added to service logs. The number of sending errors that occur in the last 1, 5, or 15 minutes can be recorded.
        

## 0.16.52

If a large number of Logtail configurations are created to collect container stdout and stderr and logs in container files, we recommend that you update Logtail to V0.16.52 or later. This helps you reduce the CPU utilization.

-   Optimization
    
    -   The CPU utilization is reduced during container data collection.
        

## 0.16.50

-   New feature
    
    -   The service\_telegraf plugin can be installed at runtime. This feature is available only for Elastic Compute Service (ECS) users.
        

## 0.16.48

-   Optimization
    
    -   The service\_telegraf plugin is optimized. Multiple configurations are supported on a single machine.
        

## 0.16.46

**Note**

If you update Logtail to V0.16.46 or later in the China (Hangzhou), China (Shanghai), or China (Beijing) region, Logtail does not switch endpoints even when network jitter occurs.

-   Optimization
    
    -   The network types that are available for Logtail are strictly limited.
        

## 0.16.44

-   New feature
    
    -   The service\_telegraf plugin is added to collect metric data.
        

## 0.16.42

-   New feature
    
    -   When you use a blacklist to filter data, multi-level matching is supported. Example: /path/\*\*/log.
        
-   Optimization
    
    -   The policy that is used to obtain local IP addresses is optimized. If a policy is invalid, the first IP address in the IP address list is obtained.
        

## 0.16.40

-   New features
    
    -   The metric\_system\_v2 plugin is added to collect the data about host status.
        
    -   The max\_docker\_config\_update\_times parameter that corresponds to the ALIYUN\_LOGTAIL\_MAX\_DOCKER\_CONFIG\_UPDATE\_TIMES environment variable is added. This parameter is suitable for scenarios in which you need to frequently create short-lived jobs in a Kubernetes environment.
        
-   Optimization
    
    -   The CPU utilization is reduced for scenarios in which a large number of Logtail configurations are created to collect container data.
        
-   Fixed issue
    
    -   The processor\_split\_log\_string plugin generates blank lines. This issue is fixed.
        

## 0.16.38

-   New features
    
    -   A custom name is supported for the time field in full regex mode.
        
    -   The KeepSourceIfParseError parameter is added in the processor\_json, processor\_regex, and processor\_split\_char plugins. If raw data fails to be parsed, the raw data can be retained. For more information, see [Use Logtail plugins to process data](/help/en/sls/overview-22#concept-hy3-nyc-wdb).
        

## 0.16.36

-   New feature
    
    -   The processor\_encrypt plugin is added for encryption.
        

## 0.16.34

-   New feature
    
    -   An HTTP probe is added for Kubernetes health check.
        
-   Fixed issues
    
    -   Core dumps are caused by libcurl in some environments. This issue is fixed.
        
    -   When you install Logtail in CentOS 8, the GNU Libidn library cannot be found. This issue is fixed.
        

## 0.16.32

-   New feature
    
    -   The IgnoreFirstConnector parameter is added in the processor\_json plugin. For more information, see [Field processing plugins](/help/en/sls/field-processing-class-plug-in).
        

## 0.16.30

**Important**

If you run Logtail V0.16.30 for a long period of time, files may fail to be opened. We recommend that you update Logtail to the latest version.

-   New feature
    
    -   When Logtail collects Docker stdout and stderr and logs in container files from Kubernetes clusters, logs can be filtered based on a Kubernetes cluster whitelist.
        
-   Optimization
    
    -   The concurrency competition among logstores in the same region due to poor network connections is diluted.
        
-   Fixed issue
    
    -   When a file is opened, checkpoint loss may occur due to logic errors. This issue is fixed.
        

## 0.16.28

-   New feature
    
    -   A parameter is added to specify a tail size for the file from which logs are collected for the first time.
        
-   Optimization
    
    -   The logic of container metadata collection is optimized to reduce the impact of faulty containers.
        
-   Fixed issues
    
    -   The docker\_stdout process causes memory leaks in complex environments. This issue is fixed.
        
    -   In JSON mode, Logtail does not provide full support for timestamps with millisecond precision. This issue is fixed.
        

## 0.16.26

-   New feature
    
    -   containerd logs can be collected.
        
-   Fixed issues
    
    -   The checkpoints of rotated files cannot be found. This issue is fixed.
        
    -   If the /usr/local/ilogtail/user\_log\_config.json file does not exist, the local Logtail configuration /etc/ilogtail/user\_config.d is not loaded. This issue is fixed.
        

## 0.16.24

-   New features
    
    -   The working\_ip and working\_hostname parameters can be configured by using environment variables.
        
    -   The force\_quit\_read\_timeout parameter is added to specify the timeout period before Logtail is forced to quit when events are blocked and fail to be read.
        
    -   Tags such as path and topic can be passed to plugins.
        
    -   The aggregator\_shardhash plugin is added, and the shardhash parameter can be configured in the plugin.
        
    -   The processor\_gotime, processor\_rename, processor\_add\_fields, processor\_json, and processor\_packjson plugins are added for data processing. For more information, see [Use Logtail plugins to process data](/help/en/sls/overview-22#concept-hy3-nyc-wdb).
        
    -   LogtailInsight is updated. The progress viewing feature is added. This feature can be used only after you configure the mark\_offset\_global\_flag or customized\_fields.mark\_offset parameter.
        
-   Optimization
    
    -   If the Journal plugin runs for a long period of time and causes high memory usage, the memory is released at the earliest opportunity.
        
    -   The interval at which an on-premises machine obtains its first Logtail configuration is reduced.
        
-   Fixed issues
    
    -   If multiple Logtail configurations are used, duplicate data may be collected. This issue is fixed.
        
    -   Timestamps with millisecond or microsecond precision do not support JSON int64. This issue is fixed.
        

## 0.16.32

-   New features
    
    -   Timestamps with millisecond or microsecond precision (%s) are supported.
        
    -   Multiple local Logtail configurations can be loaded. File path: /etc/ilogtail/config.d/.
        
    -   Multiple local user configurations can be loaded. File path: /etc/ilogtail/user\_config.d/.
        
    -   The processor\_split\_key\_value and processor\_strptime plugins are added for data processing. For more information, see [Field processing plugins](/help/en/sls/field-processing-class-plug-in) and [Time processing plugins](/help/en/sls/time-processing-class-plug-in).
        
    -   The oas\_connect\_timeout and oas\_request\_timeout parameters are added to provide support for the scenarios of slow networks.
        
-   Optimization
    
    -   The limits on the inputs parameter in hybrid configurations (file + plugin) are removed.
        

## 0.16.21

-   New features
    
    -   Custom static topics can be configured.
        
    -   Blacklist-based filtering is supported.
        
    -   The EnableEventMeta parameter is added to the service\_canal plugin. You can configure the parameter to collect the header information of MySQL binary logs.
        
-   Optimization
    
    -   The stop mechanism of plugins is optimized.
        
-   Fixed issue
    
    -   GBK logs may cause memory leaks. This issue is fixed.
        

## 0.16.18

-   New features
    
    -   Docker events can be collected. For more information, see [Collect Docker events](/help/en/sls/collect-docker-events#concept-lck-225-ngb).
        
    -   systemd journal logs can be collected. For more information, see [Collect systemd journal logs](/help/en/sls/collect-systemd-journal-logs#concept-oc3-pc5-ngb).
        
    -   The processor\_pick\_key and processor\_drop\_last\_key plugins are added for data processing.
        
-   Optimization
    
    -   The memory usage for container logs and plugin-based collection is reduced.
        
    -   The collection of multi-line stdout from containers is optimized.
        

## 0.16.16

-   New features
    
    -   The resources for Kubernetes audit logs can be automatically created.
        
    -   The startup parameters can be configured by using environment variables. The startup parameters include parameters related to CPUs, memory, and sending concurrency.
        
    -   The upload of custom tags can be configured by using environment variables.
        
    -   Logtail configurations can be automatically created in Sidecar mode. For more information, see [Use CRDs to collect container text logs in Sidecar mode](/help/en/sls/use-crds-to-collect-container-text-logs-in-sidecar-mode#task-1580748).
        
-   Optimization
    
    -   AliUid files can be automatically saved to your computer.
        
-   Fixed issues
    
    -   When Logtail collects logs from container files, a breakdown may occur. This issue is fixed.
        
    -   The `IncludeLabel` parameter of a Logtail configuration that is created by using environment variables does not take effect in Kubernetes. This issue is fixed.
        

## 0.16.15

-   New features
    
    -   When Logtail collects MySQL binary logs, the GTID feature is automatically enabled.
        
    -   When you import historical data, specified wildcard characters are supported for file names.
        
    -   Indexes can be automatically created for Kubernetes logs.
        
-   Optimization
    
    -   If a log fails to be split into multiple lines, the error can be troubleshot by checking the `discardUnMatch` parameter, and the log can be reported.
        
    -   If an unknown sending error occurs, Logtail retries to collect data. This prevents data loss in some cases, such as when a packet is modified during the sending process.
        

## 0.16.14

-   New features
    
    -   When you import historical data, the wildcard mode is supported.
        
    -   The `default_tail_limit_kb` startup parameter is added to specify the size of data that is collected from a file the first time Logtail reads the file. Default value: 1024. Unit: KB.
        
    -   The `batch_send_seconds` parameter is added to specify the interval at which data packets are sent during log collection.
        
    -   The `batch_send_bytes` parameter is added to specify the size of a data packet that is sent during log collection.
        
-   Optimization
    
    -   When Logtail collects container stdout, the logs that are split by Docker Engine can be automatically merged.
        

## 0.16.13

-   New features
    
    -   Log collection can be configured by using environment variables.
        
    -   The metadata of MySQL binary logs can be collected, such as the `_filename_` and `_offset_` fields.
        
    -   When Logtail is installed in a VPC, the parameters in the installation script can be automatically selected.
        
    -   When Logtail is installed, the global acceleration mode can be used. For more information, see [Configure log collection acceleration for Logtail](/help/en/sls/configure-log-collection-acceleration-for-logtail#concept-opz-gml-dgb).
        

## 0.16.11

-   Optimization
    
    -   When Logtail collects MySQL binary logs, the information of the \_filename\_ and \_offset\_ fields can be collected.
        
-   Fixed issue
    
    -   When Logtail collects container stdout in multi-line mode, exceptions may occur. This issue is fixed.
        

## 0.16.10

-   Optimization
    
    -   The method that is used to collect container stdout is upgraded.
        

## 0.16.9

-   Fixed issues
    
    -   The leak of socket fd may occur. This issue is fixed.
        
    -   The limits on the update frequency of Logtail configurations are added for container files.
        

## 0.16.8

-   New features
    
    -   The Lumberjack plugin is added to collect data from Logstash and Beats. For more information, see [Collect data from Beats and Logstash](/help/en/sls/collect-data-from-beats-and-logstash#concept-tk3-gtz-c2b).
        
    -   The inotify blacklist feature is added.
        
-   Fixed issues
    
    -   The parameters in earlier versions of installation packages are inconsistent. This issue is fixed.
        
    -   When you install Logtail in some systems, the versions of the operating systems cannot be obtained. This issue is fixed.
        

## 0.16.6

-   New features
    
    -   Host monitoring data can be collected.
        
    -   Redis monitoring data can be collected.
        
    -   DDL statements in MySQL binary logs can be collected.
        
    -   When Logtail collects container stdout and logs in container files, logs can be filtered by using Docker environment variables.
        
-   Fixed issues
    
    -   Data cannot be collected from a MySQL table that does not have a primary key. This issue is fixed.
        
    -   Event loss occurs due to unstable subscription channels of container engines in container collection mode. This issue is fixed.
        

## 0.16.5

-   New feature
    
    -   The multi-line mode is supported to collect container stdout. For more information, see [Examples of Logtail configurations for multi-line logs](/help/en/sls/collect-container-stdout-and-stderr-in-daemonset-mode#section-gf2-p8y-qsi).
        

## 0.16.4

-   New features
    
    -   The deployment scenarios of Docker and Kubernetes are supported.
        
    -   Container stdout and logs in container files can be collected. For more information, see [Use the Simple Log Service console to collect container stdout and stderr in DaemonSet mode](/help/en/sls/collect-container-stdout-and-stderr-in-daemonset-mode#task-1563727) and [Use the Simple Log Service console to collect container text logs in DaemonSet mode](/help/en/sls/use-the-log-service-console-to-collect-container-text-logs-in-daemonset-mode#task-1563382).
        

## 0.16.2

-   New feature
    
    -   The processor\_geoip plugin is added. For more information, see [Data transformation plug-ins](/help/en/sls/data-transformation-class-plug-in).
        

## 0.16.0

-   New features
    
    -   MySQL binary logs, MySQL query results, and HTTP data can be collected. For more information, see [Use Logtail plugins to collect data](/help/en/sls/overview-19#concept-apw-dvc-wdb).
        
    -   The following configuration items can be combined to parse data: regular expressions, anchors, delimiters, and filters.
