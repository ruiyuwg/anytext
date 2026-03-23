This topic introduces the terms that are used in Simple Log Service.

## Basic resources

**Term**

**Description**

project

A project in Simple Log Service is used to isolate the resources of different users and control access to specific resources. For more information, see [Project](/help/en/sls/project#concept-t3x-hqn-vdb).

Logstore

A Logstore in Simple Log Service is used to collect, store, and query logs. For more information, see [Logstore](/help/en/sls/logstore#concept-btb-4qn-vdb).

Metricstore

A Metricstore in Simple Log Service is used to collect, store, and query metrics. For more information, see [Metricstore](/help/en/sls/metricstore#concept-2538930).

log

Logs are records of changes that occur in a system during the runtime of the system. The records contain information about the operations that are performed on specified objects and the results of the operations. The records are ordered by time. For more information, see [Log](/help/en/sls/log#concept-jcq-kpn-vdb).

log group

A log group is a collection of logs. A log group is the basic unit that is used to write and read logs. Logs in a log group contain the same metadata, such as the IP address and log source. For more information, see [Log group](/help/en/sls/log-group#concept-y1s-gg3-wgb).

metric

Metrics are stored as time series. For more information, see [Metric](/help/en/sls/metric#concept-2539048).

trace

Traces indicate the execution process of an event or a procedure in a distributed system. For more information, see [Trace](/help/en/sls/trace#concept-2078310).

shard

A shard is used to control the read and write capacities of a Logstore. In Simple Log Service, data is stored in shards. Each shard has an MD5 hash range, and each range is a left-closed, right-open interval. The ranges do not overlap with each other. Each range must be within the entire MD5 hash range \[00000000000000000000000000000000,ffffffffffffffffffffffffffffffff). For more information, see [Shard](/help/en/sls/shard#concept-wnn-rqn-vdb).

topic

A topic is a basic management unit in Simple Log Service. You can specify topics when you collect logs. This way, Simple Log Service can classify logs by topic. For more information, see [Topic](/help/en/sls/topic#concept-ukf-1rn-vdb).

endpoint

An endpoint of Simple Log Service is a URL that is used to access a project and the data of the project. To access the projects in different regions, you must use different endpoints. To access the projects in the same region over an internal network or the Internet, you must also use different endpoints. For more information, see [Endpoints](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint).

AccessKey pair

An AccessKey pair is an identity credential that consists of an AccessKey ID and an AccessKey secret. The AccessKey ID and AccessKey secret are used for symmetric encryption and identity authentication. The AccessKey ID is used to identify a user. The AccessKey secret is used to encrypt and verify a signature string. The AccessKey secret must be kept confidential. For more information, see [AccessKey pair](/help/en/sls/developer-reference/access-key#title-jdr-pib-wlv).

region

A region is a physical location where a data center of Simple Log Service is deployed. You can specify a region when you create a project. After the project is created, you cannot change the region. For more information, see [Supported regions](/help/en/sls/sls-supported-regions1#reference-2084283).

## Data collection

**Term**

**Description**

Logtail

Logtail is used by Simple Log Service to collect logs. For more information, see [Use Logtail to collect data](/help/en/sls/use-logtail-to-collect-data/#concept-ppd-yx5-vdb).

Logtail configuration

A Logtail configuration is a set of policies that are used by Logtail to collect logs. The configuration includes the log source and collection method. For more information, see [Logtail configurations](/help/en/sls/developer-reference/logtail-configurations#concept-f3n-s5q-12b).

machine group

A machine group is a virtual group that contains multiple servers. Simple Log Service uses machine groups to manage the servers from which you want to collect logs by using Logtail. For more information, see [Introduction](/help/en/sls/machine-group-overview#concept-nqh-ycp-y2b).

## Data query and analysis

**Term**

**Description**

query

You can specify filter conditions in search statements to obtain specific logs. For more information, see [Log search overview](/help/en/sls/log-search-overview#concept-wjl-x3q-zdb).

analysis

You can invoke SQL functions on query results to perform statistical and analytical operations. Then, you can obtain analysis results.

-   Simple Log Service supports the SQL-92 syntax for you to analyze logs. For more information, see [Log analysis overview](/help/en/sls/log-analysis-overview#concept-nyf-cjq-zdb).
    
-   Simple Log Service supports the SQL-92 syntax and the PromQL syntax for you to analyze metrics. For more information, see [Overview of query and analysis on metric data](/help/en/sls/time-metric-data-query-and-analysis-syntax#concept-2539032).
    

query statement

A query statement is in the `Search statement|Analytic statement` format. A search statement can be executed alone. However, an analytic statement must be executed together with a search statement. The log analysis feature is used to analyze search results or all data in a Logstore. For more information, see [Query and analysis](/help/en/sls/log-search-overview#concept-wjl-x3q-zdb).

index

An index is an inverted storage structure that consists of keywords and logical pointers that can refer to actual data. You can use an index to quickly locate data rows based on keywords. An index is similar to a data catalog. You can query data only after you configure indexes for the data. Simple Log Service provides the following types of indexes:

-   Full-text index: Simple Log Service splits an entire log into multiple words based on specified delimiters to create indexes. In a search statement, the field names (keys) and field values (values) are plain text.
    
-   Field index: After you configure field indexes, you can specify field names and field values in the Key:Value format to search for logs.
    

For more information, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb).

Standard SQL

The Standard SQL feature allows you to analyze data by using SQL statements. You can use this feature free of charge. The Standard SQL feature provides fewer resources than the Dedicated SQL feature.

Dedicated SQL

Dedicated SQL is a paid feature that is provided by Simple Log Service. You can use the Dedicated SQL feature to analyze data by using SQL statements. If you want to analyze large amounts of data, such as tens of billions to hundreds of billions of data records, you can use the Dedicated SQL feature. For more information, see [Enable Dedicated SQL](/help/en/sls/dedicated-sql/#task-2081182).

## Data transformation

**Term**

**Description**

domain-specific language (DSL)

DSL is a Python-compatible scripting language that is used for data transformation in Simple Log Service. For more information, see [Language introduction](/help/en/sls/language-introduction#concept-1130584).

transformation rule

A transformation rule is a data transformation script that is orchestrated by using the DSL for Simple Log Service. For more information, see [Syntax overview](/help/en/sls/user-guide/syntax-overview#concept-1130558).

## Data consumption and shipping

**Term**

**Description**

consumer group

You can use consumer groups to consume data in Simple Log Service. A consumer group consists of multiple consumers. Each consumer consumes different logs that are stored in a Logstore. For more information, see [Use consumer groups to consume data](/help/en/sls/log-consumption-by-consumer-group#concept-dv4-xnq-zdb).

## Alerting

**Term**

**Description**

alert

An alert indicates an alert event. If an alert is triggered based on a specific alert monitoring rule, the alert management system sends the alert event to the notification management system.

Simple Log Service also provides alert-related subsystems, features, entities, and modules, such as the alert monitoring system and alert monitoring rules.

For more information, see [The alerting feature of Log Service](/help/en/sls/user-guide/the-alerting-feature-of-log-service#concept-2061512).

alert monitoring system

The alert monitoring system is a subsystem that triggers alerts. The alert monitoring system contains alert monitoring rules and resource data.

The alert monitoring system periodically monitors and evaluates query and analysis results based on alert monitoring rules. If an alert is triggered or cleared based on an alert monitoring rule, the alert monitoring system sends an alert or recovery notification to the alert management system based on monitoring orchestration.

alert management system

The alert management system is a subsystem that denoises alerts and manages alert status. The alert management system contains alert policies, alert incidents, and alert dashboards.

The alert management system processes alerts based on alert policies. For example, the system can dispatch, suppress, deduplicate, silence, or merge alerts. After the alerts are processed, the alerts are sent to the notification management system. The alert management system allows you to switch incident phases and specify handlers for incidents.

notification management system

The notification management system is a subsystem that manages notification methods and recipients. The notification management system contains action policies, alert templates, calendars, users, user groups, on-duty groups, and notification quotas.

The notification management system sends notifications to specified recipients by using specified notification methods based on action policies. The recipients can be users, user groups, or on-duty groups. The notification management system allows you to escalate alerts and customize the content of alert notifications.
