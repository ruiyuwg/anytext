Simple Log Service (SLS) offers a service log feature that allows the generation of various types of service logs. This topic outlines the different service log types and their respective fields.

## Log types

If you enable the service log feature, you must select the types of the service logs that you want to generate. The following table describes the service log types.

**Important**

To ensure the compatibility of a custom query statement, we recommend that you specify a log type in the `__topic__: XXX` format.

**Log type**

**Overview**

**Logstore**

**Log details**

**Description**

Detailed Logs

Records the operations that are performed on the resources in your project, including create, modify, delete, read, and write operations.

**Note**

Logs that are transferred over the JDBC protocol are excluded.

internal-operation\_log

[Operation logs](#section-gnn-3pr-m2b)

The detailed logs of all API requests, including requests that are sent in the SLS console and by using consumer groups and SDKs.

Important Logs

Records the consumption delay events of consumer groups and events that are related to the errors, heartbeats, and statistics of Logtail by logstore.

internal-diagnostic\_log

[Consumption delay logs of consumer groups](#section-c5n-ppr-m2b)

The consumption delay logs of consumer groups. These logs are generated at 2-minute intervals. If you want to query the consumption delay logs of a consumer group, you must specify `__topic__: consumergroup_log` in the query statement.

[Logtail alert logs](#section-sxm-qpr-m2b)

The alert logs that record errors on Logtail.

Alert logs are generated at 30-second intervals. If the same error occurs multiple times within 30 seconds, only one alert log is generated. The alert log contains the total number of times that the error occurs and one error message. If you want to query Logtail alert logs, you must specify `__topic__: logtail_alarm` in the query statement.

[Logtail collection logs](#section-ybn-rpr-m2b)

The collection logs that record statistics about Logtail configurations.

These logs are generated at 10-minute intervals. If you want to query Logtail collection logs, you must specify `__topic__: logtail_profile` in the query statement.

[Logtail status logs](#section-wdh-xtt-ngb)

The status logs of Logtail. Logtail reports status at regular intervals.

These logs are generated at 1-minute intervals. If you want to query Logtail status logs, you must specify `__topic__: logtail_status` in the query statement.

Job Operational Logs

Records the running metrics and operations of data transformation (new version) jobs, Scheduled SQL jobs, data import jobs, and data shipping (new version) jobs for a specified project.

internal-diagnostic\_log

[Operational logs of Scheduled SQL jobs](#section-6td-x93-z0a)

A Scheduled SQL instance corresponds to a Scheduled SQL log. After a Scheduled SQL instance stops running, a log is reported.

If you want to query Scheduled SQL operational logs, you must specify `__topic__: scheduled_sql_alert` in the query statement.

[Operational logs of data transformation (new version) jobs, data import jobs and data shipping (new version) jobs](#section-61m-ss5-zib)

These logs are generated at 1-minute intervals. If job-related data sources have no data, no logs are reported.

If you want to query job operational logs, you must specify `__topic__: etl_metrics` in the query statement.

## Detailed logs

Detailed logs are classified into the following categories based on the Method field: read operation logs, write operation logs, and resource operation logs. The following table describes the categories of detailed logs.

**Category**

**Request method**

Read operation log

Read operation logs are generated when you call the following API operations:

-   GetHistograms
    
-   GetLogs
    
-   PullLogs
    
-   GetCursor
    
-   GetCursorTime
    

Write operation log

Write operation logs are generated when you call the following API operations:

-   PostLogStoreLogs
    
-   PutWebTracking
    
-   WebTrackingImg
    
-   BatchPostLogStoreLogs
    
-   WebTracking
    
-   PutData
    

Resource operation log

Resource operation logs are generated when you call the following API operations:

API operations such as CreateProject and DeleteProject

### Common fields in detailed logs

**Field**

**Description**

**Example**

APIVersion

The version of the API.

0.6.0

AccessKeyId

The AccessKey ID that is used to access SLS.

LTA\*\*\*\*TRx

CallerType

The type of the API caller.

Subuser

InvokerUid

The ID of the Alibaba Cloud account that is used to call the API operation.

175\*\*\*\*532

Latency

The latency of the request. Unit: microseconds.

123279

LogStore

The name of the logstore.

logstore-1

Method

The API operation for which the log is recorded.

GetLogStoreLogs

NetOutFlow

The volume of read traffic. Unit: bytes.

120

NetworkOut

The volume of read traffic that is received over the Internet. Unit: bytes.

10

Project

The name of the project.

project-1

RequestId

The ID of the request.

8AEADC8B0AF2FA2592C9\*\*\*\*

SourceIP

The IP address of the client that sends the request.

47.100.\*\*.\*\*

Status

The HTTP status code in the response to the request.

200

UserAgent

The agent that is used by the client to call the API operation.

sls-java-sdk-v-0.6.1

### Fields specific to read operation logs

**Field**

**Description**

**Example**

BeginTime

The start time of the request. The value is a UNIX timestamp.

1523868463

DataStatus

The response to the request. Valid values include Complete, OK, and Unknown.

OK

EndTime

The end time of the request. The value is a UNIX timestamp.

1523869363

Offset

The read offset that you specify when you call the GetLogs operation.

20

Query

The original query statement.

UserAgent: \[consumer-group-java\]\*

RequestLines

The number of rows requested by the caller.

100

ResponseLines

The number of returned rows.

100

Reverse

Indicates whether logs are returned in descending order by timestamp.

-   1: Logs are returned in descending order by timestamp.
    
-   0: Logs are returned in ascending order by timestamp.
    

0

TermUnit

The number of delimited keywords that are included in the search statement.

0

Topic

The topic of the log.

topic-1

### Fields specific to write operation logs

**Field**

**Description**

**Example**

InFlow

The size of the raw data that you want to write. Unit: bytes.

200

InputLines

The number of lines that you want to write.

10

NetInflow

The size of the compressed data that you want to write. Unit: bytes.

100

Shard

The ID of the shard to which data is written.

1

Topic

The topic of the log.

topic-1

## Consumption delay logs of consumer groups

**Field**

**Description**

**Example**

consumer\_group

The name of the consumer group.

consumer-group-1

fallbehind

The interval between the current consumption checkpoint and the point in time at which the last write operation log is recorded. Unit: seconds.

12345

logstore

The name of the logstore.

logstore-1

project

The name of the project.

project-1

shard

The ID of the shard whose data is consumed.

1

## Logtail alert logs

**Field**

**Description**

**Example**

alarm\_count

The number of times that alerts are generated in the specified time window.

10

alarm\_message

The sample raw log that triggers the alert.

M\_INFO\_COL,all\_status\_monitor,T22380,0,2018-04-17 10:48:25.0,AY66K,AM5,2018-04-17 10:48:25.0,2018-04-17 10:48:30.561,i-23xebl5ni.1569395.715455,901,00789b

alarm\_type

The type of the alert.

REGISTER\_INOTIFY\_FAIL\_ALARM

logstore

The name of the logstore.

logstore-1

os

The operating system. Example: Linux or Windows.

Linux

project

The name of the project.

project-1

source\_ip

The IP address of the server on which Logtail is installed.

47.100.\*\*.\*\*

version

The version of Logtail.

0.14.2

## Logtail collection logs

Logtail collection logs are classified into the following two subtypes based on the file\_name field:

-   Statistics about a Logtail configuration for a log file.
    
-   Statistics about a Logtail configuration for a logstore. In the configuration, the file\_name field is set to `logstore_statistics`.
    

The following table describes the fields in Logtail collection logs.

**Field**

**Description**

**Example**

logstore

The name of the logstore.

logstore-1

config\_name

The name of the Logtail configuration. The name must be in the following format: `##Logtail configuration version##Project name$Configuration name`.

##1.0##project-1$logstore-1

error\_line

The raw log that causes an error.

M\_INFO\_COL,all\_status\_monitor,T22380,0,2018-04-17 10:48:25.0,AY66K,AM5,2018-04-17 10:48:25.0,2018-04-17 10:48:30.561,i-23xebl5ni.1569395.715455,901,00789b

file\_dev

The device ID of the log file.

**Note**

If the `file_name` field is set to `logstore_statistics`, this field is invalid.

123

file\_inode

The inode of the log file.

**Note**

If the `file_name` field is set to `logstore_statistics`, this field is invalid.

124

file\_name

The full path of the log file or the value of `logstore_statistics`.

/abc/file\_1

file\_size

The size of the log file. Unit: bytes.

12345

history\_data\_failures

The number of times that data fails to be processed.

0

last\_read\_time

The last read time in the specified time window. The value is a UNIX timestamp.

1525346677

project

The name of the project.

project-1

logtail\_version

The version of Logtail.

0.14.2

os

The operating system.

Windows

parse\_failures

The number of lines that fail to be parsed in the specified time window.

12

read\_avg\_delay

The average of the difference between the actual file size and the offset value that is generated each time log data is read in the specified time window.

65

read\_count

The number of reads in the specified time window.

10

read\_offset

The last read offset of the log file. Unit: bytes.

12345

regex\_match\_failures

The number of times that regular expressions fail to be matched.

1

send\_failures

The number of times that logs fail to be sent in the specified time window.

12

source\_ip

The IP address of the server on which Logtail is installed.

47.100.\*\*.\*\*

succeed\_lines

The number of lines that are processed.

123

time\_format\_failures

The number of times that log times fail to be matched.

122

total\_bytes

The total size of data that is read. Unit: bytes.

12345

The following table describes the fields that are specific to logstore statistics collected when the `file_name` field is set to `logstore_statistics`.

**Field**

**Description**

**Example**

send\_block\_flag

Indicates whether the send queue is blocked when the specified time window ends.

false

send\_discard\_error

The number of packets that are discarded due to data errors or insufficient permissions in the specified time window.

0

send\_network\_error

The number of packets that fail to be sent due to network errors in the specified time window.

12

send\_queue\_size

The number of unsent packets in the current send queue when the specified time window ends.

3

send\_quota\_error

The number of packets that fail to be sent because Logtail quota is exceeded in the specified time window.

0

send\_success\_count

The number of packets that are sent in the specified time window.

12345

sender\_valid\_flag

Indicates whether the send flag of the current logstore is valid when the specified time window ends. Valid values:

-   true: The flag is valid.
    
-   false: The flag is disabled due to network or quota errors.
    

true

max\_send\_success\_time

The last time when data was sent in the specified time window. The value is a UNIX timestamp.

1525342763

max\_unsend\_time

The last time when packets in the send queue failed to be sent in the specified time window. The value is a UNIX timestamp. If the send queue is empty, the value is 0.

1525342764

min\_unsend\_time

The first time when packets in the send queue failed to be sent in the specified time window. The value is a UNIX timestamp. If the send queue is empty, the value is 0.

1525342764

## Logtail status logs

**Field**

**Description**

**Example**

cpu

The CPU load of the Logtail process.

0.001333156

hostname

The hostname.

abc2.\*\*\*\*

instance\_id

The ID of the instance. This ID is randomly assigned.

05AFE618-0701-11E8-A95B-00163E025256\_10.11.12.13\_151745\*\*\*\*

ip

The IP address of the host.

47.100.\*\*.\*\*

load

The average system load.

0.01 0.04 0.05 2/376 5277

memory

The memory space that is occupied by the Logtail process. Unit: MB.

12

detail\_metric

The metrics in the JSON format. For more information, see [detail\_metric](#table-hry-zzl-64w).

[detail\_metric](#table-hry-zzl-64w)

os

The operating system.

Linux

os\_cpu

The CPU utilization of the system.

0.004120005

os\_detail

The details of the operating system.

​2.6.32-220.23.8.tcp1.34.el6.x86\_64

user

The user name.

user

user\_defined\_id

The user-defined ID.

aliyun-log-id

uuid

The universally unique identifier (UUID) of the server.

​64F28D10-D100-492C-8FDC-0C62907F\*\*\*\*

version

The version of Logtail.

0.14.2

project

The project to which the Logtail configuration belongs.

my-project

The following table describes the fields that are included in the detail\_metric field.

**Field**

**Description**

**Example**

config\_count

The number of Logtail configurations.

1

config\_get\_last\_time

The last time when the Logtail configuration was obtained.

2021-07-20 16:19:22

config\_update\_count

The number of Logtail configuration updates after Logtail was started.

1

config\_update\_item\_count

The total number of configuration items updated after Logtail was started.

1

config\_update\_last\_time

The time of the last Logtail configuration update after Logtail was started.

2021-07-20 16:18:42

env\_config

Indicates whether environment variables are used to create the Logtail configuration.

false

event\_tps

The transactions per second (TPS).

1

last\_read\_event\_time

The last time when data was read.

2021-07-20 16:18:42

last\_send\_time

The last time when data was sent.

2021-07-20 16:18:42

multi\_config

Indicates whether multiple Logtail configurations are enabled to collect logs from the same file.

false

net\_err\_stat

The number of times that network sending errors occurred in the previous 1, 5, and 15 minutes.

0,0,0

open\_fd

The number of log files that are open.

1

plugin\_enabled

Indicates whether Logtail plug-ins are enabled.

-   true: Logtail plug-ins are enabled.
    
-   false: Logtail plug-ins are disabled.
    

false

poll\_modify\_size

The number of monitored log files that are modified.

1

polling\_dir\_cache

The number of scanned directories.

1

polling\_file\_cache

The number of scanned files.

1

process\_bytes\_ps

The size of log data that is processed per second. Unit: bytes.

1000

process\_lines\_ps

The number of logs that are processed per second.

1000

process\_queue\_full

The number of processing queues that reach the maximum processing capacity.

1

process\_queue\_total

The total number of processing queues.

10

process\_tps

The number of data processing transactions per second.

0

reader\_count

The number of log files that are being processed.

1

region

The region where Logtail resides.

cn-hangzhou

register\_handler

The number of directories to be monitored.

1

send\_bytes\_ps

The size of raw log data that is sent per second. Unit: bytes.

11111

send\_lines\_ps

The number of logs that are sent per second.

1000

send\_net\_bytes\_ps

The volume of network data that is sent per second. Unit: bytes.

1000

send\_queue\_full

The number of send queues that reach the maximum sending capacity.

1

send\_queue\_total

The total number of send queues.

12

send\_request\_concurrency

The maximum number of packets that can be concurrently sent from send queues.

10

send\_tps

The number of data sending transactions per second.

0.075

sender\_invalid

The number of abnormal send queues.

0

start\_time

The start time.

2021-07-20 16:19:22

used\_sending\_concurrency

The number of packets that are concurrently sent.

0

## Operational logs of Scheduled SQL jobs

**Field**

**Description**

**Example**

\_\_topic\_\_

The topic of the log. Valid value: scheduled\_sql\_alert.

scheduled\_sql\_alert

project

The project to which the Scheduled SQL job belongs.

my-project-name

job\_name

The name of the Scheduled SQL job.

sql-16xxxxxxx-xxxxxx

schedule\_id

The ID of the Schedule SQL job.

77\*\*\*\*ca

job\_type

The type of the Scheduled SQL job. Valid value: ScheduledSQL.

ScheduledSQL

instance\_id

The ID of the instance of the Scheduled SQL job.

7e\*\*\*\*dc

create\_time

The time when the instance was created. Unit: seconds.

1652343365

schedule\_time

The scheduled time for the instance. Unit: seconds.

1652343360

trigger\_time

The time when the instance starts to run. Unit: seconds.

1652343365

\_\_time\_\_

The time when the instance stops running. Unit: seconds.

1652343366

status

The status of the instance. Valid values: FAILED and SUCCEEDED.

FAILED

error\_code

The cause why the instance failed to run.

SQLFailed

error\_message

The details of the error that the instance failed to run.

sql syntax error

fallbehind

The interval between the start time and scheduled time of the instance. This field indicates the latency of the instance. Unit: seconds.

85

succeed\_lines

-   If the instance successfully runs, this value indicates the number of lines that are written.
    
-   If the instance fails to run, the value is 0.
    

100

## Operational logs of data transformation (new version) jobs, data import jobs and data shipping (new version) jobs

**Field**

**Description**

**Example**

\_\_topic\_\_

The topic of the log. Valid value: etl\_metrics.

etl\_metrics

metric\_type

The type of the job operational log. Valid value: ConnectorMetrics.

ConnectorMetrics

project

The project to which the job belongs.

my-sls-project

job\_name

The name of the job.

job-16\*\*\*\*53

instance\_id

The ID of the instance of the job.

10e\*\*\*\*b4f6

\_etl\_:connector\_meta

The task metadata of the data source or destination. For more information, see [\_etl\_:connector\_meta](#table-5qe-ctm-pz3).

None

\_etl\_:connector\_metrics

The task running metrics of the data source or destination. For more information, see [\_etl\_:connector\_metrics](#table-3az-kyo-d7q).

None

The following table describes the subfields that are included in the \_etl\_:connector\_meta field.

**Field**

**Description**

**Example**

action

The operation that is performed by the task. Valid values:

-   ingest: reads data from the data source.
    
-   deliverer: writes data to the destination.
    

ingest

connector

The type of the data source or destination.

-   sls: Simple Log Service
    
-   oss: Object Storage Service (OSS)
    
-   maxcompute: MaxCompute
    
-   cms: CloudMonitor
    
-   cloudtrail: AWS CloudTrail
    
-   kafka: Apache Kafka
    
-   elasticsearch: Elasticsearch
    
-   mysql: open source, third-party, or Alibaba Cloud MySQL
    
-   mssql: open source, third-party, or Alibaba Cloud SQL Server
    

oss

instance

The name of the data source instance or the destination instance.

my-oss-bucket

task\_id

The ID of the task.

1669277

task\_name

The name of the task.

1652765276578\_task\_0

task\_type

The type of the task. Valid value: CONNECTOR.

CONNECTOR

The following table describes the subfields that are included in the \_etl\_:connector\_metrics field.

**Field**

**Description**

**Example**

state

The status of the task.

-   0: The task is running.
    
-   1: An error is reported, which may slow down the running progress.
    
-   2: The task failed and the running progress is blocked.
    

0

error

The error message of the task.

If no error message exists, the field is not displayed in the log.

fail to pull logs, unauthorized

lags

The progress of the task.

This field is available only for task that is used to read data. The lags field is displayed in the log only if the value of the action field is ingest. The value of this field depends on the type of the data source that is specified by the connector field.

-   If the value of the connector field is sls, the value of the lags field indicates the consumption delay by shard. Unit: seconds.
    
-   If the value of connector field is kafka, the value of the lags field indicates the consumption lags by topic.
    
-   If the value of the connector field is cms, the value of the lags field indicates the delay of data reading from CloudMonitor. Unit: seconds.
    

0.813

desc

This field is available only for task that is used to read data. The desc field is displayed in the log only if the value of the action field is ingest. The value of this field depends on the type of the data source that is specified by the connector field.

-   If the value of the connector field is sls, the value of the desc field value is s (time unit).
    
-   If the value of the connector field is kafka, the value of the desc field is the description of lags.
    
-   If the value of the connector field is cms, the value of the desc field is s (time unit).
    

s

events

The number of data entries that are processed within the specified time range.

13245

failed

The number of data entries that failed to be processed within the specified time range.

3

native\_bytes

The size of raw data that is processed within the specified time range.

7539125

events\_bytes

The size of parsed data that is processed within the specified time range.

13295475

pub\_net\_bytes

The volume of traffic that is processed over the Internet within the specified time range.

45678

req\_count

The number of requests that are sent to the data source or destination within the specified time range.

89

rep\_time

The average request latency of the data source or destination within the specified time range.

38

rate\_limit\_hits

The number of time that the requests sent to the data source or destination are throttled within the specified time range.

1

extras

Other related information. This field is displayed in the log only if the value of the field exists.

The value of this field depends on the type of the data source that is specified by the connector field.

{"events":"898","objectName":"shenzhen/2022/05/18/15/19\_1652858350000000000\_315eb857efeb9f00.snappy","objectSize":"212792"}
