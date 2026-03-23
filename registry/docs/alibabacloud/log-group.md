A store is the basic unit for data storage and querying in Simple Log Service (SLS). To support different data types, SLS provides Logstores, Metricstores, and Eventstores.

## **How to choose a store type**

Simple Log Service supports three store types: Logstores, Metricstores, and Eventstores. The main distinction among them lies in their data model compatibility. Select the store type that best matches your data. If you have no specific requirements, use a Logstore by default.

**Store type**

**Scenarios**

Logstore

-   [Log data](#b993f4a4dfd8e): A record of events or changes in a system over time. Log data consists of an ordered collection of operations and their outcomes. This broad definition covers most data types, making Logstore the default choice.
    
-   [Trace data](#23ac1a48e6cbv): Records processing information for a single request, including service invocations and processing durations.
    

Metricstore

[Time series data (metric)](#2edace544432j): A time series composed of a unique identifier and a sequence of data points. Use a Metricstore to efficiently store and query time series data.

Eventstore

[Event data](#da516cacc88v8): A record of a significant occurrence, such as a monitoring alert or the result of a periodic inspection. Use an Eventstore to store discrete, event-based data.

### **Logstore**

A Logstore is the basic unit for storing and querying log data in Simple Log Service. Each Logstore belongs to a project. You can create multiple Logstores within a project to isolate different log types from the same application. For example, to collect operation logs, application logs, and access logs for App A, create a project named app-a. Within this project, create Logstores named operation\_log, application\_log, and access\_log to store each log type separately.

You specify a Logstore when you write, query, analyze, process, consume, or deliver logs. Specific uses include the following:

-   Collect logs using the Logstore as the collection unit.
    
-   Store logs in a Logstore for processing, consumption, or delivery.
    
-   Create indexes in a Logstore to query and analyze logs.
    

### **Metricstore**

[A Metricstore](/help/en/sls/manage-a-metricstore) is the basic unit for storing and querying time series data. Each Metricstore belongs to a project. You can create multiple Metricstores for a project to meet your needs, such as creating separate ones for different types of time series data. For example, to collect basic host monitoring data, cloud service monitoring data, and business application monitoring data, create a project named demo-monitor. Then, within this project, create Metricstores named host-metrics, cloud-service-metrics, and app-metrics to store these data types separately.

You specify a Metricstore when you write, query, analyze, or consume time series data. Specific uses include the following:

-   Collect time series data using the Metricstore as the collection unit.
    
-   Use a Metricstore to store time series data and perform consumption operations.
    
-   [Query and analyze time series data](/help/en/sls/time-metric-data-query-and-analysis-syntax) using Prometheus Query Language (PromQL), SQL-92, or SQL+PromQL syntax.
    

### **Eventstore**

[An Eventstore](/help/en/sls/manage-an-eventstore) is the basic unit for storing and querying event data. Each Eventstore belongs to a project. You can create multiple Eventstores for a project to meet your needs, typically for different types of event data. For example, categorize and store infrastructure anomaly events, business application events, and custom events in separate Eventstores for storage and analysis.

You specify an Eventstore when you write, query, analyze, or consume event data. Specific uses include the following:

-   Collect event data using the Eventstore as the collection unit.
    
-   Store event data and perform consumption operations using the Eventstore as the storage unit.
    

## **References**

### **LogGroup**

A log group (LogGroup) is a collection of logs and serves as the basic unit for writing and reading data. All logs within a single LogGroup share the same metadata, such as IP address and source. When you write logs to or read logs from SLS, multiple logs are bundled into a LogGroup. This approach reduces the number of read and write operations and improves efficiency. Each LogGroup has a maximum size of 5 MB.

![日志组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9248025261/p2377.png)

### **Log data**

Log data records events or changes in a system over time and consists of an ordered collection of operations and their results for a specific object. Broadly defined, this includes text files (LogFiles), events (Events), database binary logs (BinLogs), and time series data (metrics). Simple Log Service uses a semi-structured data model to define a log, which consists of five main data domains: topic, time, content, source, and tags. The following table describes the format requirements for each data domain.

**Data domain**

**Description**

**Format**

Topic

Simple Log Service uses the reserved field (`__topic__`) to identify the log topic, which distinguishes logs generated by different services, users, or instances. For example, if System A contains frontend HTTP request processing, cache, logic processing, and storage modules, assign a topic to each module's logs, such as http\_module, cache\_module, logic\_module, and store\_module. After logs are collected into the same Logstore, you can use the topic to quickly identify their source. Set the topic in the **Global Configurations** of a [collection configuration](/help/en/sls/manage-logtail-configurations-for-log-collection).

The relationship among a Logstore, topics, and [shards](/help/en/sls/manage-shards) is as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9533733771/CAEQThiBgIDFi8m2zxkiIGU5YWY5OGNmYjEzMDQ5YWI5MDY5Yzk1MjRkMGVlYzY13963382_20230830144006.372.svg)

A string of 0 to 128 bytes, including an empty string.

If you do not need to distinguish between logs in a Logstore, set the topic to an empty string when you collect logs. An empty string is a valid topic.

Log time

The reserved field (`__time__`) identifies the log time. For more information, see [Reserved fields](/help/en/sls/reserved-fields#concept-adr-ktr-gfb).

UNIX timestamp.

Log content

The content of the log, which consists of one or more content items in `Key:Value` format.

When you use Logtail in simple mode (single-line or multi-line) to collect logs, Logtail does not parse the log content. The entire raw log is uploaded to the content field.

The following describes the `Key:Value` format:

-   Key: The field name. It must be a UTF-8 string of 1 to 128 bytes, consisting of letters, underscores, and digits. It cannot start with a digit. You cannot use the following reserved field names.
    
    -   \_\_time\_\_
        
    -   \_\_source\_\_
        
    -   \_\_topic\_\_
        
    -   \_\_partition\_time\_\_
        
    -   \_extract\_others\_
        
    -   \_\_extract\_others\_\_
        
-   Value: Any string with a maximum size of 1 MB.
    

Log source

The reserved field (`__source__`) identifies the log source, such as the IP address of the server that generated the log.

Any string of 0 to 128 bytes.

Tags

Log tags include the following:

-   Custom tags: Add these tags when you write logs by calling the [PutLogs](/help/en/sls/putlogs#undefined) API operation.
    
-   System tags: Tags that Simple Log Service adds to logs, including \_\_client\_ip\_\_ and \_\_receive\_time\_\_.
    

A dictionary of string key-value pairs. In a log, tags appear with the `__tag__:` prefix.

#### **Example**

The following example uses a website access log to show the mapping between a raw log and the data model in Simple Log Service.

-   Raw log
    
    ```
    127.0.0.1 - - [01/Mar/2021:12:36:49  0800] "GET /index.html HTTP/1.1" 200 612 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36
    ```
    
-   Log collected in simple mode. The entire raw log is saved in the content field.
    
    ![日志样例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4266315261/p272301.png)
    
-   Log collected in regular expression mode. The log content is structured by extracting the content into multiple key-value pairs based on the configured regular expression.
    
    ![日志样例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5266315261/p272326.png)
    

### **Time series data (metric)**

Time series data consists of a time series identifier and data points. Data points with the same identifier form a time series. The time series data type in Simple Log Service is compatible with the [Prometheus data model](https://prometheus.io/docs/concepts/data_model/). All data in a Metricstore is stored as time series data.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4168260671/p1004678.png)

#### **Time series identifier**

Each time series is uniquely identified by its metric name and a set of labels.

-   A metric name is a string that identifies the type of metric. The metric name must match the regular expression \[a-zA-Z\_:\]\[a-zA-Z0-9\_:\]\*. For example, http\_request\_total represents the total number of HTTP requests received.
    
-   Labels are a set of key-value pairs that identify the metric's attributes. The key must match the regular expression \[a-zA-Z\_\]\[a-zA-Z0-9\_\]\*. The value cannot contain a vertical bar (|). For example, method is POST, and URL is /api/v1/get .
    

#### **Data point**

A data point represents the value of a time series at a specific point in time. Each data point consists of a timestamp and a value. The timestamp is accurate to the nanosecond, and the value is a double.

#### **Data structure**

The write protocol for time series data is the same as that for logs and uses the Protobuf [data encoding](/help/en/sls/developer-reference/data-encoding#reference-uvb-r5q-12b) method. The time series identifier and data points are stored in the content field, as described in the following table.

**Field**

**Description**

**Example**

\_\_name\_\_

The metric name.

nginx\_ingress\_controller\_response\_size

\_\_labels\_\_

The label information. The format is `{key}#$#{value}|{key}#$#{value}|{key}#$#{value}`.

**Note**

-   Label keys must be sorted alphabetically.
    
-   Do not write labels that have empty values. For example, the label with the key \`app\` in `app#$#|controller_class#$#nginx` has an empty value. If you write this label to a Metricstore, it can cause errors during PromQL aggregations.
    

app#$#ingress-nginx|controller\_class#$#nginx|controller\_namespace#$#kube-system|controller\_pod#$#nginx-ingress-controller-589877c6b7-hw9cj

\_\_time\_nano\_\_

Timestamp. You can write timestamps with various precisions, such as seconds (s), milliseconds (ms), microseconds (us), and nanoseconds (ns). When you run SQL queries, all timestamps are standardized to microsecond (us) precision in the output to ensure consistent time calculations.

1585727297293000

\_\_value\_\_

The value.

36.0

#### **Example**

Query all raw time series data for the process\_resident\_memory\_bytes metric within a specified time range.

```
* | select * from "sls-mall-k8s-metrics.prom" where __name__ = 'process_resident_memory_bytes' limit all
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0091767571/p1004687.png)

### **Event data**

An event is a significant data record, such as a monitoring alert or the result of a periodic inspection job. Event data in Simple Log Service adheres to the [CloudEvents](https://cloudevents.io/) specification, as described in the following table.

**Field type**

**Field name**

**Required**

**Data format**

**Description**

Protocol fields

`specversion`

Yes

String

The default value is `1.0`, which complies with the CloudEvents specification.

`id`

Yes

String

The event ID. You can use `source+id` to uniquely identify the event.

`source`

Yes

String

The context in which an event occurred, such as the event source or the instance that published the event.

`type`

Yes

String

The event type, such as `sls.alert`.

`subject`

No

String

The subject of the event. This field provides additional information to the `source` field, such as the object that triggered the event.

`datacontenttype`

No

String

The event type. The default value is `application/cloudevents+json`.

`dataschema`

No

URI

The schema that the `data` field must adhere to. The default value is empty.

`data`

No

JSON

The specific event content. The format varies based on the source and type of the event.

`time`

Yes

Timestamp

The event time. For more information about the format, see [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). Example: `2022-10-17T11:20:45.984+0800`.

Extension fields

`title`

Yes

String

The event title.

`message`

Yes

String

The event description.

`status`

Yes

String

The event status. Valid values:

-   `ok`
    
-   `info`
    
-   `warning`
    
-   `error`
    

#### **Example**

The following example shows the data for an alert event:

```
{
    "specversion": "1.0",
    "id": "af****6c",
    "source": "acs:sls",
    "type": "sls.alert",
    "subject": "https://sls.console.alibabacloud.com/lognext/project/demo-alert-chengdu/logsearch/nginx-access-log?encode=base64&endTime=1684312259&queryString=c3RhdHVzID49IDQwMCB8IHNlbGVjdCByZXF1ZXN0X21ldGhvZCwgY291bnQoKikgYXMgY250IGdyb3VwIGJ5IHJlcXVlc3RfbWV0aG9kIA%3D%3D&queryTimeType=99&startTime=1684311959",
    "datacontenttype": "application/cloudevents+json",
    "data": {
        "aliuid": "16****50",
        "region": "cn-chengdu",
        "project": "demo-alert-chengdu",
        "alert_id": "alert-16****96-247190",
        "alert_name": "Nginx Access Error",
        "alert_instance_id": "77****e4-1aad9f7",
        "alert_type": "sls_alert",
        "next_eval_interval": 300,
        "fire_time": 1684299959,
        "alert_time": 1684312259,
        "resolve_time": 0,
        "status": "firing",
        "severity": 10,
        "labels": {
            "request_method": "GET"
        },
        "annotations": {
            "__count__": "1",
            "cnt": "49",
            "desc": "Nginx has had 49 GET request errors in the last five minutes",
            "title": "Nginx Access Error Alert Triggered"
        },
        "results": [
            {
                "region": "cn-chengdu",
                "project": "demo-alert-chengdu",
                "store": "nginx-access-log",
                "store_type": "log",
                "role_arn": "",
                "query": "status >= 400 | select request_method, count(*) as cnt group by request_method ",
                "start_time": 1684311959,
                "end_time": 1684312259,
                "fire_result": {
                    "cnt": "49",
                    "request_method": "GET"
                },
                "raw_results": [
                    {
                        "cnt": "49",
                        "request_method": "GET"
                    },
                    {
                        "cnt": "3",
                        "request_method": "DELETE"
                    },
                    {
                        "cnt": "7",
                        "request_method": "POST"
                    },
                    {
                        "cnt": "6",
                        "request_method": "PUT"
                    }
                ],
                "raw_result_count": 4,
                "truncated": false,
                "dashboard_id": "",
                "chart_title": "",
                "is_complete": true,
                "power_sql_mode": "auto"
            }
        ],
        "fire_results": [
            {
                "cnt": "49",
                "request_method": "GET"
            }
        ],
        "fire_results_count": 1,
        "condition": "Count:[1] > 0; Condition:[49] > 20",
        "raw_condition": "Count:__count__ > 0; Condition:cnt > 20"
    },
    "time": "2023-05-17T08:30:59Z",
    "title": "Nginx Access Error Alert Triggered",
    "message": "Nginx has had 49 GET request errors in the last five minutes",
    "status": "error"
}
```

### **Trace data**

Trace data records the end-to-end processing of a single request, including all service invocations and their durations. Each piece of trace data corresponds to a trace. A trace represents the execution path of a transaction or process through a distributed system. According to the OpenTracing standard, a trace is a directed acyclic graph (DAG) of Spans. Each Span represents a named, timed, and continuous execution segment within the trace. For more information, see [Trace data format](/help/en/sls/trace-data-formats).
