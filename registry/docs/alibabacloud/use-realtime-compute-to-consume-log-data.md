You can use Realtime Compute for Apache Flink to create a Simple Log Service source table to consume log data in Simple Log Service. This topic describes how to use Realtime Compute for Apache Flink to create a Simple Log Service source table and how to extract the attribute fields involved in the creation process.

## Background information

The following table describes the settings that you must configure for Realtime Compute for Apache Flink to consume log data.

Category

Description

Supported type

You can configure a source table and a result table.

Running mode

Only the streaming mode is supported.

Metric

Metrics are not supported.

Data format

None.

API type

SQL statements are supported.

Whether log data can be updated or deleted in a result table

You cannot update or delete log data in a result table. You can only insert log data into a result table.

For more information about how to use Realtime Compute for Apache Flink to consume log data, see [Getting started with a Flink SQL deployment](/help/en/flink/realtime-flink/getting-started/getting-started-for-a-flink-sql-deployment).

## Prerequisites

-   If you want to use a Resource Access Management (RAM) user or a RAM role to consume log data,make sure that the RAM user or RAM role has the required permissions on the Realtime Compute for Apache Flink console. For more information, see [Permission management](/help/en/flink/realtime-flink/user-guide/permission-management/).
    
-   A Realtime Compute for Apache Flink workspace is created. For more information, see [Activate Realtime Compute for Apache Flink](/help/en/flink/realtime-flink/getting-started/activate-fully-managed-flink#task-2506778).
    
-   A project and a Logstore are created. For more information, see [Create a project and a Logstore](/help/en/sls/getting-started#section-2l7-ol2-zro).
    

## Limits

-   Only Realtime Compute for Apache Flink that uses Ververica Runtime (VVR) 2.0.0 or later supports the Simple Log Service connector.
    
-   The Simple Log Service connector supports only the at-least-once semantics.
    
-   Only Realtime Compute for Apache Flink that uses VVR 4.0.13 or later supports automatic failovers of deployments due to the change of shard numbers.
    
-   We recommended that you do not set the deployment parallelism for a source node to a value greater than the number of shards. If the deployment parallelism for a source node is greater than the number of shards, resources may be wasted. In Realtime Compute for Apache Flink that uses VVR 8.0.5 or earlier, if the number of shards changes, automatic failovers of deployments may become invalid and specific shards may not be consumed.
    

## Create a Simple Log Service source table and a result table

**Important**

You must develop a complete SQL draft before you use Realtime Compute for Apache Flink to consume log data in Simple Log Service. A complete SQL draft contains a source table and a result table. After log data in the source table is processed, the results are inserted into the result table by using the `INSERT INTO` statement.

For more information about how to develop an SQL draft in Realtime Compute for Apache Flink, see [Develop an SQL draft](/help/en/flink/realtime-flink/user-guide/develop-an-sql-draft).

Simple Log Service stores log data in real time. Realtime Compute for Apache Flink can read the data in streaming mode as input data. The following code provides an example of a log:

```
__source__:  11.85.*.199
__tag__:__receive_time__:  1562125591
__topic__:  test-topic
request_method:  GET
status:  200
```

### **Sample code**

The following code provides an example of an SQL draft that you can develop in Realtime Compute for Apache Flink to consume log data in Simple Log Service.

**Important**

If the names of tables, columns, and reserved fields in an SQL draft conflict with each other, you must enclose the names in backticks (\`).

```
CREATE TEMPORARY TABLE sls_input(
  request_method STRING,
  status BIGINT,
  `__topic__` STRING METADATA VIRTUAL,
  `__source__` STRING METADATA VIRTUAL,
  `__timestamp__` BIGINT METADATA VIRTUAL,
   __tag__ MAP<VARCHAR, VARCHAR> METADATA VIRTUAL,
  proctime as PROCTIME()
) WITH (
  'connector' = 'sls',
  'endpoint' ='cn-hangzhou-intranet.log.aliyuncs.com',
  'accessId' = '${secret_values.ak_id}',
  'accessKey' = '${secret_values.ak_secret}',
  'starttime' = '2023-08-30 00:00:00',
  'project' ='sls-test',
  'logstore' ='sls-input'
);

CREATE TEMPORARY TABLE sls_sink(
  request_method STRING,
  status BIGINT,
  `__topic__` STRING,
  `__source__` STRING,
  `__timestamp__` BIGINT ,
  receive_time BIGINT
) WITH (
  'connector' = 'sls',
  'endpoint' ='cn-hangzhou-intranet.log.aliyuncs.com',
  'accessId' = '${ak_id}',
  'accessKey' = '${ak_secret}',
  'project' ='sls-test',
  'logstore' ='sls-output'
);

INSERT INTO sls_sink
SELECT 
  request_method,
  status,
  `__topic__` ,
  `__source__` ,
  `__timestamp__` ,
  cast(__tag__['__receive_time__'] as bigint) as receive_time
FROM sls_input; 
```

### **Parameters in the WITH clause**

-   Common parameters
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    connector
    
    The type of the table.
    
    STRING
    
    Yes
    
    None
    
    Set the value to sls.
    
    endPoint
    
    The endpoint of Simple Log Service.
    
    STRING
    
    Yes
    
    None
    
    Enter the internal endpoint of Simple Log Service. For more information, see [Endpoints](/help/en/sls/endpoints#reference-wgx-pwq-zdb).
    
    **Note**
    
    -   By default, Realtime Compute for Apache Flink cannot access the Internet. In this case, Alibaba Cloud provides NAT gateways to enable communications between virtual private clouds (VPCs) and the Internet. For more information, see the "How does Realtime Compute for Apache Flink access the Internet?" section of the [Reference](/help/en/flink/realtime-flink/support/reference#section-zjs-qq7-k4j) topic.
        
    -   We recommend that you do not access Simple Log Service over the Internet unless necessary. To access Simple Log Service over the Internet, use HTTPS and enable the global acceleration feature. For more information, see the "Endpoint for global acceleration" section of the [Endpoints](/help/en/sls/endpoints#section-kp3-42h-cgb) topic.
        
    
    project
    
    The name of the Simple Log Service project.
    
    STRING
    
    Yes
    
    None
    
    N/A
    
    logStore
    
    The name of a Logstore or Metricstore of Simple Log Service.
    
    STRING
    
    Yes
    
    None
    
    Data in a Logstore is consumed in the same way as in a Metricstore.
    
    accessId
    
    The AccessKey ID of your Alibaba Cloud account.
    
    STRING
    
    Yes
    
    None
    
    For more information, see the "How do I view information about the AccessKey ID and AccessKey secret of the account?" section of the [Reference](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe) topic.
    
    **Important**
    
    To protect your AccessKey pair, we recommend that you configure the AccessKey ID by using the key management method. For more information, see [Manage variables and keys](/help/en/flink/realtime-flink/user-guide/manage-keys).
    
    accessKey
    
    The AccessKey secret of your Alibaba Cloud account.
    
    STRING
    
    Yes
    
    None
    
    For more information, see the "How do I view information about the AccessKey ID and AccessKey secret of the account?" section of the [Reference](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe) topic.
    
    **Important**
    
    To protect your AccessKey pair, we recommend that you configure the AccessKey secret by using the key management method. For more information, see [Manage variables and keys](/help/en/flink/realtime-flink/user-guide/manage-keys).
    
-   Parameters only for source tables
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    startupMode
    
    The startup mode of the source table.
    
    STRING
    
    No
    
    timestamp
    
    Valid values:
    
    -   timestamp: Logs are consumed from the specified start time. This is the default value.
        
    -   latest: Logs are consumed from the latest offset.
        
    -   earliest: Logs are consumed from the earliest offset.
        
    
    **Note**
    
    If you set the consumeFromCheckpoint parameter to true, logs are consumed from a checkpoint stored in the specified consumer group. The startup mode specified by this parameter does not take effect.
    
    startTime
    
    The time at which logs start to be consumed.
    
    STRING
    
    No
    
    Current time
    
    Format: yyyy-MM-dd hh:mm:ss.
    
    This parameter takes effect only if the startupMode parameter is set to timestamp.
    
    **Note**
    
    The startTime and stopTime parameters are configured based on the \_\_receive\_time\_\_ attribute field in a Simple Log Service source table but are not based on the \_\_timestamp\_\_ attribute field.
    
    stopTime
    
    The time at which log consumption is stopped.
    
    STRING
    
    No
    
    None
    
    Format: yyyy-MM-dd hh:mm:ss.
    
    **Note**
    
    If you want Realtime Compute for Apache Flink to exit after log consumption is complete, you must configure the exitAfterFinish parameter together with this parameter and set the exitAfterFinish parameter to true.
    
    consumerGroup
    
    The name of the consumer group.
    
    STRING
    
    No
    
    None
    
    A consumer group records the consumption progress. You can specify a custom consumer group name. The format of the name is not fixed.
    
    **Note**
    
    A consumer group cannot be shared by multiple deployments for collaborative consumption. We recommend that you specify different consumer groups for different Realtime Compute for Apache Flink deployments. If you specify the same consumer group for different Realtime Compute for Apache Flink deployments, all data is consumed. When Realtime Compute for Apache Flink consumes data of Simple Log Service, the data is not sharded in a Simple Log Service consumer group. Therefore, if the deployments share the same consumer group, all messages in the consumer group are consumed by each deployment.
    
    consumeFromCheckpoint
    
    Specifies whether to consume logs from the checkpoint that is stored in the specified consumer group.
    
    STRING
    
    No
    
    false
    
    Valid values:
    
    -   true: If you set this parameter to true, you must specify a consumer group. After you specify a consumer group, Realtime Compute for Apache Flink consumes logs from the checkpoint that is stored in the consumer group. If no checkpoint exists in the consumer group, Realtime Compute for Apache Flink consumes logs from the time specified by the startTime parameter.
        
    -   false: Realtime Compute for Apache Flink does not consume logs from the checkpoint that is stored in the specified consumer group. This is the default value.
        
    
    **Note**
    
    Only Realtime Compute for Apache Flink that uses VVR 6.0.5 or later supports this parameter.
    
    directMode
    
    Specifies whether to enable the direct connection mode of Simple Log Service.
    
    STRING
    
    No
    
    false
    
    Valid values:
    
    -   true: The direct connection mode is enabled.
        
    -   false: The direct connection mode is disabled. This is the default value.
        
    
    maxRetries
    
    The number of retries that are allowed when data fails to be read from Simple Log Service.
    
    STRING
    
    No
    
    3
    
    N/A
    
    batchGetSize
    
    The number of log groups from which data is read in a request.
    
    STRING
    
    No
    
    100
    
    The value of the batchGetSize parameter cannot exceed 1000. Otherwise, an error is returned.
    
    exitAfterFinish
    
    Specifies whether Realtime Compute for Apache Flink exits after data consumption is complete.
    
    STRING
    
    No
    
    false
    
    Valid values:
    
    -   true: Realtime Compute for Apache Flink exits after data consumption is complete.
        
    -   false: Realtime Compute for Apache Flink does not exit after data consumption is complete. This is the default value.
        
    
    **Note**
    
    Only Realtime Compute for Apache Flink that uses VVR 4.0.13 or later supports this parameter.
    
    query
    
    The query statement that is used to preprocess data before data consumption in Simple Log Service.
    
    STRING
    
    No
    
    None
    
    If you configure the query parameter, Realtime Compute for Apache Flink can filter out data from Simple Log Service before Realtime Compute for Apache Flink consumes data in Simple Log Service. This helps prevent Realtime Compute for Apache Flink from consuming all data in Simple Log Service. This reduces costs and improves data processing efficiency.
    
    For example, if you execute the `**'query' = '*| where request_method = ''GET'''**` statement, Realtime Compute for Apache Flink matches the data whose value of the request\_method field is equal to the value of the GET clause before Realtime Compute for Apache Flink reads data from a Logstore of Simple Log Service.
    
    **Note**
    
    Simple Log Service Processing Language (SPL) is required if you execute the query statement to preprocess data. For more information, see [SPL overview](/help/en/sls/spl-overview/).
    
    **Important**
    
    -   Only Realtime Compute for Apache Flink that uses VVR 8.0.1 or later supports this parameter.
        
    -   For more information about the regions in which Simple Log Service supports this feature, see [Consume logs based on rules](/help/en/sls/rule-based-consumption).
        
    -   This feature is free of charge in public preview phase. You may be charged for Simple Log Service in the future. For more information, see the "Billing" section of the [Consume logs based on rules](/help/en/sls/rule-based-consumption#r5nzl) topic.
        
    
-   Parameters only for result tables
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    topicField
    
    Specifies a field name. The value of this parameter overwrites the value of the \_\_topic\_\_ attribute field to indicate the topic of the log.
    
    STRING
    
    No
    
    None
    
    The value of this parameter must be an existing field in the table.
    
    timeField
    
    Specifies a field name. The value of this parameter overwrites the value of the \_\_timestamp\_\_ attribute field to indicate the log write time.
    
    STRING
    
    No
    
    Current time
    
    The value of this parameter must be an existing field of the INT type in the table. If no field is specified, the current time is used by default.
    
    sourceField
    
    Specifies a field name. The value of this parameter overwrites the value of the \_\_source\_\_ attribute field to indicate the origin of the log. For example, the value is the IP address of the machine that generates the log.
    
    STRING
    
    No
    
    None
    
    The value of this parameter must be an existing field in the table.
    
    partitionField
    
    Specifies a field name. A hash value is calculated based on the value of this parameter when data is written to Simple Log Service. Data that includes the same hash value is written to the same shard.
    
    STRING
    
    No
    
    None
    
    If you do not specify this parameter, each data entry is randomly written to an available shard.
    
    buckets
    
    The number of buckets that are regrouped based on the hash value when the partitionField parameter is specified.
    
    STRING
    
    No
    
    64
    
    Valid values: \[1,256\]. The value of this parameter must be an integer power of 2. The number of buckets must be greater than or equal to the number of shards. Otherwise, no data is written to specific shards.
    
    **Note**
    
    Only Realtime Compute for Apache Flink that uses VVR 6.0.5 or later supports this parameter.
    
    flushIntervalMs
    
    The interval at which data writing is triggered.
    
    STRING
    
    No
    
    2000
    
    Unit: milliseconds.
    
    writeNullProperties
    
    Specifies whether to write null values as empty strings to Simple Log Service.
    
    BOOLEAN
    
    No
    
    true
    
    Valid values:
    
    -   true: Null values are written as empty strings to Simple Log Service. This is the default value.
        
    -   false: Null values are not written to Simple Log Service.
        
    
    **Note**
    
    Only Realtime Compute for Apache Flink that uses VVR 8.0.6 or later supports this parameter.
    

### **Extract attribute fields**

Realtime Compute for Apache Flink can extract log fields, custom fields, and the following attribute fields.

Field

Type

Description

\_\_source\_\_

STRING METADATA VIRTUAL

The message source.

\_\_topic\_\_

STRING METADATA VIRTUAL

The message topic.

\_\_timestamp\_\_

BIGINT METADATA VIRTUAL

The log time.

\_\_tag\_\_

MAP<VARCHAR, VARCHAR> METADATA VIRTUAL

The message tag.

For the `"__tag__:__receive_time__":"1616742274"` attribute, the `__receive_time__` and 1616742274 fields are recorded as key-value pairs in a map. You can include `__tag__['__receive_time__']` in an SQL statement to query the tag.

To extract attribute fields, you must define headers in an SQL statement. Example:

```
create table sls_stream(
  __timestamp__ bigint HEADER,
  __receive_time__ bigint HEADER
  b int,
  c varchar
) with (
  'connector' = 'sls',
  'endpoint' ='cn-hangzhou.log.aliyuncs.com',
  'accessId' = '${secret_values.ak_id}',
  'accessKey' = '${secret_values.ak_secret}',
  'starttime' = '2023-08-30 00:00:00',
  'project' ='sls-test',
  'logstore' ='sls-input'
);
```

## **References**

For more information about how to use the DataStream API of Realtime Compute for Apache Flink to consume log data, see [DataStream API](/help/en/flink/realtime-flink/developer-reference/log-service-connector#section-hsg-jaz-idw).
