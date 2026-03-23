This topic describes the limits of Logtail, including the limits on supported environments, log files, containers, checkpoints, Logtail configurations, machine groups, performance metrics, and error handling.

## Supported environments

**Item**

**Description**

Architecture

-   Linux Logtail supports x86\_64 and ARM64.
    
-   Windows Logtail supports x86\_32 and x86\_64.
    

Computing resources

-   CPU: At least 0.1 cores must be reserved.
    
-   Memory: At least 30 MB for server scenarios, 150 MB for Kubernetes scenarios, and 100 MB for Kubernetes Controller/Operator.
    

Actual usage depends on the collection rate, the number of monitored directories and files, and the degree of sending blockage. Ensure that the actual usage rate is less than 80% of the limit.

Operating system

For supported operating systems, see [Host type](/help/en/sls/install-run-upgrade-and-uninstall-logtail#3d35fcb477q9p).

Kubernetes

-   When you collect logs in DaemonSet mode, Kubernetes 1.10.0 or later is required. The HostToContainer mount propagation must be supported.
    
-   When you use a custom resource definition (CRD) to collect logs, Kubernetes 1.16.0 or later is required, and the alibaba-log-controller component must be installed.
    
    The apiextensions.k8s.io/v1beta1 API provided by Kubernetes 1.7.0 and later also supports CRDs. However, the stability of the API in the Beta version varies based on the specified Kubernetes version.
    
    **Important**
    
    All Logtail components have system-cluster-critical priority. Do not deploy them when cluster resources are insufficient, because they may evict existing pods on the nodes.
    

Docker

The collection of stdout and stderr from containers has the following limits:

-   You must add `"log-driver": "json-file"` to the Docker configuration file daemon.json.
    
-   For CentOS 7.4 and later except Centos 8.0, you must set `fs.may_detach_mounts` to 1. For more information, see [Bug 1468249](https://bugzilla.redhat.com/show_bug.cgi?id=1468249), [Bug 1441737](https://bugzilla.redhat.com/show_bug.cgi?id=1441737), and [issue 34538](https://github.com/moby/moby/issues/34538).
    

Storage media

Using shared network storage media such as [File Storage NAS (NAS)](/help/en/nas/product-overview/what-is-nas) or [Object Storage Service (OSS)](/help/en/oss/user-guide/what-is-oss) is not recommended, because it may cause data truncation, content inconsistency, or collection suspension. We recommend that you use Elastic Block Storage (EBS).

## Limits on log files

**Item**

**Description**

Size of a single log

By default, the maximum size of a log is 512 KB. You can change the value of the startup parameter max\_read\_buffer\_size to change the size. The maximum size of a log cannot exceed 8 MB. For more information, see [Configure the startup parameters of Logtail](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).

If a multi-line log is split based on a regular expression used to match the beginning of the first line of a log, the maximum size of each log after splitting is still 512 KB. If the size of a log exceeds 512 KB, the log is forcefully split into multiple logs for collection. For example, if the size of a log is 1,025 KB, the log is split into logs of the following sizes: 512 KB, 512 KB, and 1 KB. Then, the logs are collected in sequence and considered incomplete logs.

Log file encoding

Logtail supports log files encoded in UTF-8 and GBK. We recommend that you use UTF-8-encoded log files to improve processing performance.

**Warning**

If log files are encoded in other formats, issues such as garbled characters and data loss may occur.

Size of a log file

Unlimited.

Log file rotation

By default, the maximum number of log files in a rotation queue is 20. You can change the value of the startup parameter logreader\_max\_rotate\_queue\_size to change the number. For more information, see [Configure the startup parameters of Logtail](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).

You can specify a log path in the `xxx.log` or `xxx.log*` format.

**Important**

Ensure that the two formats do not exist at the same time in a Logtail instance. If the two formats exist at the same time, the logs in a log file may be collected using multiple Logtail configurations, and duplicate data may be collected.

If more than 20 log files are not processed, new logs will be lost. In this case, you must check whether the write quota of shards exceeds the limit and adjust concurrency-related parameters. For more information, see [Recommended parameter values](/help/en/sls/configure-the-startup-parameters-of-logtail#section-asp-6bg-net).

Log collection behavior performed when log parsing is blocked

When log parsing is blocked, Logtail keeps the descriptor of the log file open to prevent the log file from being deleted during the blocking period and log loss.

If the log file is rotated multiple times during the blocking period, Logtail puts the log file into a rotation queue.

Regular expression

Logtail uses regular expressions compatible with Perl.

JSON

Standard JSON formats defined in [RFC 7159](https://tools.ietf.org/html/rfc7159) and [ECMA-404](https://ecma-international.org/publications-and-standards/standards/ecma-404/) are supported. Non-standard JSON formats, such as `{"name": "\xE5\xAD\xA6"}`, are not supported.

Multiple Logtail configurations for one log file

By default, you can use only one Logtail configuration to collect logs from a log file. For more information about how to use multiple Logtail configurations to collect logs from a log file, see [How do I collect multiple copies of logs in a file?](/help/en/sls/what-do-i-do-if-i-want-to-use-multiple-logtail-configurations-to-collect-logs-from-a-log-file#concept-2180900)

**Important**

When you use multiple Logtail configurations to collect logs from a log file, the read I/O, computing resources, and network I/O increase accordingly.

File opening behavior

Logtail keeps the log files from which you want to collect logs and the log files in a rotation queue open to ensure the integrity of collected data. A log file is closed in the following scenarios:

-   The log file is not modified within 5 minutes.
    
-   The log file is rotated, and all logs in the log file are collected.
    
-   The Logtail configuration is updated.
    

To release the file handle within a specified period of time after a log file is deleted, regardless of whether log collection from the log file is complete or whether new logs are still written to the log file, configure the force\_release\_deleted\_file\_fd\_timeout parameter to specify a timeout period. For more information, see [Configure the startup parameters of Logtail](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).

First log collection behavior

Logtail collects data only from incremental log files. If the size of a log file exceeds the limit of 1 MB the first time the modification to the log file is detected, Logtail collects data from the last 1 MB. If the size of the log file does not exceed 1 MB, Logtail collects data from the beginning of the log file. The limit for container stdout and stderr is 512 KB.

You can change the value of the tail\_size\_kb parameter in a Logtail configuration to change the limit. For more information, see [Logtail configurations](/help/en/sls/developer-reference/logtail-configurations#concept-f3n-s5q-12b).

If a log file is not modified after a Logtail configuration is delivered, Logtail does not collect data from the log file. For more information about how to collect logs from historical log files, see [Import historical logs from log files](/help/en/sls/import-historical-logs#task-g1x-q2s-g2b).

File overwriting behavior

Logtail uses an inode and the hash value of the first 1,024 bytes of a log file to identify the log file. If a log file is overwritten and the inode or the hash value of the first 1,024 bytes of the log file changes, the log file is considered a log file from which logs are not collected, and the logs are collected from the beginning of the log file. If the inode or the hash value does not change, the logs in the log file are not collected.

File transfer behavior

If a log file is transferred and the matched Logtail configuration is not used to collect logs from the log file before the log file is transferred, the log file is considered a log file from which logs are not collected, and the logs are collected from the beginning of the log file. In this scenario, if the matched Logtail configuration is used to collect logs from the log file, the logs in the log file are not collected.

File collection history

Logtail retains the historical collection progress of historical log files in the memory to ensure that only incremental data is collected after the log files are changed. If the historical collection progress of a historical log file is retained longer than a specified period and new data is written to the log file, duplicate data is collected.

-   By default, the historical collection progress of historical log files is retained for up to one month.
    
-   If the number of historical log files in the same directory exceeds 5,000, the historical collection progress of the log files within the previous week is retained.
    
-   If the number of historical log files in the same directory exceeds 10,000, the historical collection progress of the log files within the previous day is retained.
    

Non-standard text logs

For log lines containing `\0`, versions greater than 2.1.10 or greater than 3.0.12 retain only the `\0` characters in the middle of the line and discard the leading and trailing `\0` characters. Other versions may truncate the line at the first `\0` character or retain the entire line. We recommend an upgrade. For other escape characters (such as ASCII color codes) or non-printable characters, Logtail directly sends the characters.

## Limits on containers

**Note**

Both the limits on log files and the limits on containers apply when you use Logtail to collect container logs.

**Item**

**Description**

First log collection behavior

When you collect container stdout and stderr and if the size of a log file exceeds the limit of 512 KB the first time the modification to the log file is detected, Logtail collects data from the last 512 KB. If the size of the log file does not exceed 512 KB, Logtail collects data from the beginning of the log file. You can change the value of the StartLogMaxOffset parameter in a Logtail configuration to change the limit. For more information, see [Use the Simple Log Service console to collect container stdout and stderr in DaemonSet mode](/help/en/sls/collect-container-stdout-and-stderr-in-daemonset-mode#task-1563727).

Symbolic link

When you collect logs from container files, files and directories of files cannot be symbolic links.

Container lifecycle

By default, Logtail can collect logs from a container only if the container lifecycle lasts 10 seconds or longer. When you collect logs from a container file, Logtail limits the number of log updates in the container file to 10 within a 3-minute period to ensure collection performance. You can change the values of the startup parameters docker\_config\_update\_interval and max\_docker\_config\_update\_times to change the settings. For more information, see [Configure the startup parameters of Logtail](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).

File rotation for stdout and stderr

Container stdout and stderr files are rotated by Docker or kubelet. By default, the size of stdout and stderr files rotated by kubelet is 10 MB, and the size of stdout and stderr files that are rotated by Docker is 100 MB. If the output rate of container stdout and stderr is greater than 10 MB/s, the stdout and stderr files are rotated at a higher speed. In this case, we recommend that you collect logs from container files or change the value of the containerLogMaxSize parameter to prevent log loss.

Logging driver for stdout and stderr

If you use Docker as a container runtime, you must add `"log-driver": "json-file"` to the Docker configuration file daemon.json.

## Limits on checkpoints

**Item**

**Description**

Checkpoint timeout period

In default scenarios, if a log file is not modified within 30 days, the checkpoint of the log file is automatically deleted. If `preserve:false` is configured in a Logtail configuration and a log file is not modified within 30 minutes, the checkpoint of the log file is deleted.

Checkpoint storage policy

Checkpoints are automatically stored at intervals of 15 minutes and at the point in time when Logtail exits. You can change the value of the startup parameter check\_point\_dump\_interval to change the checkpoint storage policy. For more information, see [Configure the startup parameters of Logtail](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).

Checkpoint storage path

By default, checkpoints are stored in the `/tmp/logtail_checkpoint` directory. You can change the value of the startup parameter check\_point\_filename to change the checkpoint storage path. For more information, see [Configure the startup parameters of Logtail](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).

Handling during downtime

Checkpoints are saved at regular intervals. If downtime occurs, data collection resumes from the last completely saved checkpoint. This may cause duplicate data collection. You can change the checkpoint storage policy to prevent duplicate data collection.

## Limits on Logtail configurations

**Item**

**Description**

Latency for configuration updates to take effect

Updates to Logtail configurations performed using the Simple Log Service console or by calling an API operation require approximately 30 seconds to take effect.

Dynamic loading of Logtail configurations

Logtail configurations can be dynamically loaded. An update to a Logtail configuration does not affect other Logtail configurations.

Number of Logtail configurations that can be dynamically loaded for a single Logtail instance

Unlimited. However, we recommend that you load no more than 100 Logtail configurations for a server.

Log generation using a third-party flusher

If a Logtail configuration is created in the Simple Log Service console or by calling an API operation, the Logtail configuration is associated with a logstore. Therefore, when you configure a third-party flusher in your plug-in configuration, Logtail automatically sends a copy of data to the logstore.

Multi-account and cross-account

Multi-account and cross-account log collection is supported. For more information, see [Configure a user identifier](/help/en/sls/configure-a-user-identifier#section-226-ufb-xsd) and [Use Logtail to collect container logs across Alibaba Cloud accounts](/help/en/sls/use-logtail-to-collect-container-logs-across-accounts#task-2181271).

Multi-region

By default, multi-region log collection is not supported. To collect logs from multiple regions, submit a [ticket](https://smartservice.console.alibabacloud.com/console.htm?spm=a2796.7919406.0.dcontactus3.676a2d23RjosdV#/ticket/add/?productId=1210).

Global acceleration

Global acceleration is supported. After you enable global acceleration on the Simple Log Service side, you must configure global acceleration on the Logtail side. For more information, see [Log collection acceleration](/help/en/sls/enable-the-global-acceleration-feature#concept-bfn-n54-p2b).

## Limits on machine groups

**Item**

**Description**

Number of machines

Unlimited. However, we recommend that you configure no more than 100,000 machines. Otherwise, heartbeats cannot be obtained.

Number of Logtail configurations that can be applied

Unlimited. However, we recommend that you apply no more than 1,000 Logtail configurations.

## Limits on performance metrics

**Item**

**Description**

Throughput for log processing

The default transmission speed of raw logs is limited to 20 MB/s. Log data is uploaded after it is encoded and compressed. The compression ratio ranges from 5:1 to 10:1. If the transmission speed is faster than the default value, logs may be lost. You can change the value of the startup parameter max\_bytes\_per\_sec to change the transmission speed. For more information, see [Configure the startup parameters of Logtail](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).

Maximum processing speed for logs

Single-core-enabled processing speed:

-   In simple mode, the maximum processing speed is 100 MB/s.
    
-   In full regex mode, the maximum processing speed is 20 MB/s. This is the default value. The actual processing speed varies based on the complexity of regular expressions.
    
-   In delimiter mode, the maximum processing speed is 40 MB/s.
    
-   In JSON mode, the maximum processing speed is 30 MB/s.
    

You can configure the startup parameter process\_thread\_count to configure multiple threads. This helps improve performance by 150% to 300%.

Maximum numbers of monitored directories and files

The maximum numbers of monitored directories and files are related to the mem\_usage\_limit parameter. The default value of the mem\_usage\_limit parameter is 384 MB in a host environment and 2,048 MB in a container environment. The following categories are used:

-   Maximum number of monitored directories = (Value of mem\_usage\_limit/100) × 5,000. The directories do not include the blacklist of directories specified in Logtail configurations.
    
-   Maximum number of monitored directories and files = (Value of mem\_usage\_limit/100) × 50,000. The directories do not include the blacklist of directories specified in Logtail configurations. The files include the files that do not match the Logtail configurations.
    
-   Number of directories and files monitored by a single Logtail configuration = (Value of mem\_usage\_limit/100) × 5,000. The directories do not include the blacklist of directories specified in the Logtail configuration. The files include the files that do not match the Logtail configuration.
    
-   Number of monitored subdirectories and files in a single directory = (Value of mem\_usage\_limit/100) × 5,000. The subdirectories include the blacklist of directories specified in Logtail configurations. The files include the files that do not match the Logtail configurations.
    

If the number for one of the preceding categories reaches the upper limit, Logtail no longer monitors the rest of the directories and files that correspond to the category. You can narrow the scope of monitored directories in a Logtail configuration or change the value of the startup parameter mem\_usage\_limit to increase the number of monitored directories. For more information about the mem\_usage\_limit parameter, see [Configure the startup parameters of Logtail](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).

Logtail installed on a Linux server allows you to use the inotify mechanism to monitor directories. This helps shorten the latency of log collection. The maximum number of directories, including subdirectories, which can be monitored using the inotify mechanism is 3,000.

Policy used to process excessive resource consumption

If the amount of resources occupied by Logtail remains higher than the upper limit for 5 minutes, Logtail is forcefully restarted. The restart may cause data loss or duplication.

Multi-tenant isolation

Logtail configurations are isolated. If an error occurs in a Logtail configuration, other Logtail configurations are not affected.

Log collection latency

In normal cases, Logtail can collect a log less than 1 second after the log is written to disk.

Log upload policy

Before Logtail uploads logs, Logtail aggregates the logs in the same file. Logtail starts to upload logs when the number of logs exceeds 4,000, the total size of logs exceeds 512 KB, or the log collection duration exceeds 3 seconds.

## Limits on error handling

**Item**

**Description**

Network error handling

If a network error occurs, Logtail automatically retries the data collection task and adjusts the retry interval. In extreme cases, logs may be repeatedly collected or discarded due to the following issues:

-   A packet sent by Logtail is received by Simple Log Service, and the packet response from Simple Log Service fails to be received by Logtail within 15 seconds. In this case, Logtail sends the request again, and duplicate data is collected.
    
-   A network link error causes damage to a packet received by Logtail, and the error occurs five consecutive times. In this case, Logtail discards related data.
    

Processing of threshold-crossing events

If a data transmission speed exceeds the upper limit of a logstore, Logtail blocks log collection and automatically retries the data collection task. We recommend that you increase the number of shards for the logstore.

Time errors of Logtail

If retries fail five times because the time difference between the request time and the response time is larger than 15 minutes, Logtail discards related data. A maximum of five retries are allowed. We recommend that you correct the time of your machine where Logtail resides.

Non-existence of a specified project or logstore

If retries fail five times, Logtail discards related data. A maximum of five retries are allowed. The failure may occur if you deleted your logstore by calling an API operation. We recommend that you delete the Logtail configurations and disassociate the Logtail configurations from your machine groups by calling API operations.

Failed authentication

If retries fail five times, Logtail discards related data. A maximum of five retries are allowed. The failure may occur in the following scenarios:

-   If the failure occurs when Logtail is started, the cause is that no authentication information can be obtained over an unstable network.
    
-   If the failure repeatedly occurs, the cause is that no authentication information can be obtained when your machine cannot connect to a Simple Log Service endpoint over HTTPS.
    

Other unknown errors

If retries fail five times, Logtail discards related data. A maximum of five retries are allowed.

Maximum retry period before timeout

If data fails to be transmitted and the issue lasts for more than 6 hours, Logtail discards the data.

Status self-check

If an exception occurs, Logtail restarts. For example, if an application unexpectedly exits or the resource usage exceeds the specified upper limit, Logtail restarts.

Exceeding the maximum number of monitored folders and files

Logtail cannot locate the collection path timely and accurately, which may result in data loss.

Collection significantly delayed

Log collection lags behind log generation. If unprocessed logs exceed 20, data loss may occur.
