This topic describes how to use the Simple Log Service (SLS) SDK for Node.js to perform common operations, such as creating a project, creating a logstore, writing logs, and querying logs.

## Prerequisites

-   Simple Log Service is [activated](https://www.alibabacloud.com/product/log-service?spm=a2c5t.10695662.1996646101.searchclickresult.536d31bdPTqffd).
    
-   [Configure access credentials](/help/en/sls/developer-reference/configure-sls-access-credentials).
    
-   Simple Log Service SDK for Node.js is installed. For more information, see [Install Simple Log Service SDK for Node.js](/help/en/sls/developer-reference/install-log-service-sdk-for-node-js#task-2100929).
    

## **Important**

This example uses the public endpoint of the China (Hangzhou) region: `https://cn-hangzhou.log.aliyuncs.com`. If you are accessing SLS from another Alibaba Cloud service in the same region as your project, use the internal endpoint: `https://cn-hangzhou-intranet.log.aliyuncs.com`. For more information about the regions and endpoints that SLS supports, see [Endpoints](/help/en/sls/developer-reference/service-entrance#title-bqu-zsi-7nv).

## **Parameters**

### **createProject**

#### **Request parameters**

**Parameter**

**Type**

**Required**

**Description**

**projectName**

String

Yes

The name of the project. The name must be globally unique. You cannot change the name after you create the project.

The name must meet the following requirements:

-   The name can contain lowercase letters, digits, and hyphens (-).
    
-   The name must start with a lowercase letter and end with a lowercase letter or a digit.
    
-   The name must be 3 to 63 characters in length.
    

**description**

String

Yes

The description of the project. The description can be up to 64 characters in length. It cannot contain angle brackets (<>), single quotation marks ('), backslashes (\\), or double quotation marks (").

**resourceGroupId**

String

No

The ID of the resource group. If you do not specify this parameter, the default resource group is used. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#title-xzn-rkf-j7e).

**dataRedundancyType**

String

No

The default storage redundancy type is locally redundant storage. Some regions support both locally redundant storage and zone-redundant storage. The storage redundancy type cannot be changed after a project is created. For more information, see [Storage redundancy](/help/en/sls/storage-redundancy#24b854d047fzm).

-   LRS: locally redundant storage
    
-   ZRS: zone-redundant storage
    

#### **Response parameters**

For more information about the response parameters, see [CreateProject](/help/en/sls/developer-reference/api-sls-2020-12-30-createproject).

### **createLogStore**

#### **Request parameters**

**Parameter**

**Type**

**Required**

**Description**

**projectName**

String

Yes

The name of the project. The project in Simple Log Service is used to isolate the resources of different users and control access to specific resources. See [Manage a project](/help/en/sls/manage-a-project/#title-ick-61g-1mf).

**logstoreName**

String

Yes

The name of the logstore. The name must be globally unique. You cannot change the name after you create the project.

The name must meet the following requirements:

-   Can contain lowercase letters, digits, hyphens (-), and underscores (\_).
    
-   Must start with a lowercase letter and end with a lowercase letter or a digit.
    
-   Must be 3 to 63 characters in length.
    

**ttl**

int

No

**Data Retention Period**, in days. Valid values: 1 to 3650. If you set this parameter to 3650, data is permanently stored. If the specified retention period elapses, log data is deleted.

The data retention period (**ttl**) is the sum of the following periods:

-   Hot storage period (**hotTtl**)
    
-   IA storage period (**infrequentAccessTtl**)
    
-   Archive storage period
    

**shardCount**

int

No

The number of shards. Valid values: 1 to 10. For more information, see [Shard ranges](/help/en/sls/shard#title-fny-biw-060).

**enableTracking**

bool

No

Specifies whether to enable **WebTracking**.

-   True: Enables the **WebTracking** feature, allowing the logstore to accept anonymous write requests from the internet without valid authentication. This may result in dirty data.
    
-   False (default): Disable **WebTracking**.
    

**Note**

**WebTracking** lets you quickly collect access information from various browsers, along with from iOS and Android apps. For more information, see [Use Web Tracking to collect logs](/help/en/sls/use-the-web-tracking-feature-to-collect-logs#concept-ixm-xl5-vdb).

**appendMeta**

bool

No

Specifies whether to enable the **Record Public IP Address** feature.

-   true: Appends the client IP address. After this feature is enabled, SLS automatically adds the following information to the tag field of logs.
    
    -   \_\_client\_ip\_\_: The public IP address of the client.
        
    -   \_\_receive\_time\_\_: The time when the log arrives, in UNIX timestamp format.
        
-   false (default): Does not append the client IP address.
    

**autoSplit**

bool

No

Specifies whether to enable **Automatic Shard Splitting**.

-   true (default): Enables automatic shard splitting. For more information, see [Read and write capabilities of shards](/help/en/sls/shard#title-h8s-uz5-qs0) and [Automatically split shards](/help/en/sls/manage-shards#title-qg5-sz4-ox8).
    
-   false: Disables automatic shard splitting.
    

**maxSplitShard**

int

No

**Maximum Split Count**: After you enable **Auto Shard Splitting**, a shard can be automatically split into a maximum of 256 partitions. This parameter is required if the **auto\_split** parameter is set to True.

**Important**

This parameter is required if **auto\_split** is set to true.

**encryptConf**

dict

No

The data structure for encryption configurations. It includes the `enable`, `encrypt_type`, and `user_cmk_info` parameters. For more information, see [EncryptConf](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-encryptconf) and [Data encryption](/help/en/sls/developer-reference/encrypt-data).

**telemetryType**

String

No

The type of observable data. Valid values:

-   **None**: Log data. This is the default value.
    
-   **Metrics**: Metric. In this case, only the following parameters take effect:
    
    -   **logstoreName**
        
    -   **ttl**
        
    -   **shardCount**
        
    -   **autoSplit**
        
    -   **maxSplitShard**
        
    -   **appendMeta**
        

**Important**

This parameter cannot be modified after it is created**.**

**hotTtl**

int

No

The storage period of data in the hot storage layer of a logstore, in days. The minimum value is 7. The value cannot be greater than the value of **ttl**. A value of `-1` indicates that all data within the retention period (**ttl**) is stored as hot storage.

After the hot storage period ends, data is converted to IA storage. For more information about the concepts and conversion process of hot storage, IA storage, and archive storage, see [Manage intelligent tiered storage](/help/en/sls/data-tiered-storage-overview).

-   Hot data must be stored for at least 7 days before it can be converted to IA storage. IA data must be stored for at least 30 days before it can be converted to archive storage.
    
-   Hot data must be stored for at least 30 days before it can be converted to archive storage.
    

**mode**

String

No

Simple Log Service provides two types of logstores: **Standard** and **Query**.

-   standard (default): Supports one-stop data analytics. This type is suitable for scenarios such as real-time monitoring, interactive analysis, and building a complete observability system.
    
-   query: Supports high-performance queries. The indexing traffic cost is about half that of the **Standard** type. However, this type does not support SELECT statements and is suitable for scenarios with large data volumes, long storage periods (weekly, monthly, or longer), or no log analysis.
    

For more information, see [Logstore types](/help/en/sls/manage-a-logstore#8a47f43a2a4i4).

**infrequentAccessTtl**

int

No

The storage period of data in the IA storage layer of a logstore, in days. IA data must be stored for at least 30 days before it can be converted to archive storage. For more information, see [Manage intelligent tiered storage](/help/en/sls/data-tiered-storage-overview).

#### **Response parameters**

For more information about the response parameters, see [CreateLogStore](/help/en/sls/developer-reference/api-sls-2020-12-30-createlogstore).

### **createIndex**

#### **Request parameters**

**Parameter**

**Type**

**Required**

**Description**

**projectName**

String

Yes

The name of the project. The project in Simple Log Service is used to isolate the resources of different users and control access to specific resources. See [Manage a project](/help/en/sls/manage-a-project/#title-ick-61g-1mf).

**logstoreName**

String

Yes

The name of the logstore. The logstore in Simple Log Service is used to collect, store, and query logs. See [Manage a logstore](/help/en/sls/manage-a-logstore#title-lb2-cdj-s9y).

**index**

[index](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-index)

Yes

The index configuration.

#### **Response parameters**

For more information about the response parameters, see [CreateIndex](/help/en/sls/developer-reference/api-sls-2020-12-30-createindex).

### getLogs

#### **Request parameters**

**Parameter**

**Type**

**Required**

**Description**

**projectName**

String

Yes

The name of the project. The project in Simple Log Service is used to isolate the resources of different users and control access to specific resources. See [Manage a project](/help/en/sls/manage-a-project/#title-ick-61g-1mf).

**logstoreName**

String

Yes

The name of the logstore. The logstore in Simple Log Service is used to collect, store, and query logs. See [Manage a logstore](/help/en/sls/manage-a-logstore#title-lb2-cdj-s9y).

**from**

int

Yes

The beginning of the time range to query. The value is a UNIX timestamp.

**Note**

-   The time when the logstore receives logs. The `__tag__:__receive_time__` field is a [reserved field](/help/en/sls/reserved-fields) of Simple Log Service.
    
-   The time range defined by the start time and the end time. The time range is a left-closed, right-open interval. The interval includes the start time of the time range, but not the end time. If both are the same, the interval is invalid and an error is returned.
    
-   To ensure that full data can be queried, specify a query time range that is accurate to the minute. If you also specify a time range in an analytic statement, the time range is used for query and analysis.
    
-   If you want to specify a time range that is accurate to the second, you can use [date and time functions](/help/en/sls/date-and-time-functions-1) to convert the time format. Examples:
    
    -   `* | SELECT * FROM log WHERE from_unixtime(__time__) > from_unixtime(1664186624) AND from_unixtime(__time__) < now()`
        
    -   `* | SELECT * FROM log WHERE __time__ > to_unixtime(date_parse('2022-10-19 15:46:05', '%Y-%m-%d %H:%i:%s')) AND __time__ < to_unixtime(now())`
        

**to**

int

Yes

The end of the time range to query. The value is a UNIX timestamp.

**Note**

-   The time when the logstore receives logs. The `__tag__:__receive_time__` field is a [reserved field](/help/en/sls/reserved-fields) of Simple Log Service.
    
-   The time range defined by the start time and the end time. The time range is a left-closed, right-open interval. The interval includes the start time of the time range, but not the end time. If both are the same, the interval is invalid and an error is returned.
    
-   To ensure that full data can be queried, specify a query time range that is accurate to the minute. If you also specify a time range in an analytic statement, the time range is used for query and analysis.
    
-   If you want to specify a time range that is accurate to the second, you can use [date and time functions](/help/en/sls/date-and-time-functions-1) to convert the time format. Examples:
    
    -   `* | SELECT * FROM log WHERE from_unixtime(__time__) > from_unixtime(1664186624) AND from_unixtime(__time__) < now()`
        
    -   `* | SELECT * FROM log WHERE __time__ > to_unixtime(date_parse('2022-10-19 15:46:05', '%Y-%m-%d %H:%i:%s')) AND __time__ < to_unixtime(now())`
        

**topic**

String

No

The topic of logs. The default value is an empty string. For more information, see [Log topics](/help/en/sls/topic).

**query**

String

No

The search statement or analytic statement. For more information, see [Query and analysis overview](/help/en/sls/log-analysis-overview). To use Dedicated SQL, add `set session parallel_sql=true;` to the analytic statement in the **query** parameter. Example: `* | set session parallel_sql=true; select count(*) as pv`. For information about common query and analysis issues, see [Common errors that occur when you query and analyze logs](/help/en/sls/resolve-common-errors-that-may-occur-when-i-query-and-analyze-logs).

**Note**

If the **query** parameter contains an analytic statement (SQL statement), the line and offset parameters of this API operation are invalid. Set these parameters to 0 and use the LIMIT clause in the SQL statement for paging. For more information, see [Display query and analysis results by page](/help/en/sls/paged-query).

**line**

int

No

This parameter is valid only when the **query** parameter is a search statement. It specifies the maximum number of logs to return. The minimum value is 0. The maximum value is 100. The default value is 100.

**offset**

int

No

This parameter is valid only when the **query** parameter is a search statement. It specifies the starting line of the query. The default value is 0.

**reverse**

bool

No

Specifies whether to return logs in descending order of their timestamps. The precision is to the minute.

-   true: Returns logs in descending order of their timestamps.
    
-   false (default): Returns logs in ascending order of their timestamps.
    

**Important**

-   If the **query** parameter is a search statement, the **reverse** parameter is valid and specifies the sorting method for the returned logs.
    
-   If the **query** parameter is a search and analytic statement, the **reverse** parameter is invalid. The sorting method is specified by the `order by` clause in the SQL analytic statement.
    

**powerSql**

bool

No

Whether to use **Dedicated SQL**. For more information, see [High-performance exact query and analysis (Dedicated SQL)](/help/en/sls/dedicated-sql/).

-   true: Uses Dedicated SQL.
    
-   false (default): Uses Standard SQL.
    

In addition to using the **powerSql** parameter, you can also use the **query** parameter to configure Dedicated SQL.

#### **Response parameters**

For more information about the response parameters, see [GetLogs](/help/en/sls/developer-reference/api-sls-2020-12-30-getlogs).

## Examples

### **Write Node.js code to collect logs**

In this example, a file named SLSQuickStart.js is created. The file calls API operations to create a project, create a logstore, create an index, write log data, and query log data. The following code provides an example:

```

const Client = require('@alicloud/log')
const sls = new Client({
    // In this example, the AccessKey ID and AccessKey secret are obtained from environment variables.
    accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
    accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
    // The endpoint of SLS. This example uses the endpoint of the China (Hangzhou) region. Replace it with the actual endpoint. 
    endpoint: 'cn-hangzhou.log.aliyuncs.com'
})
// Required. The name of the project.
const projectName = "aliyun-test-node-project"
// Required. The name of the logstore.
const logstoreName = "request_log"


async function test() {
    // Create a project.
    await sls.createProject(projectName, {
        description: 'test'
    })
    // Create a logstore.
    await sls.createLogStore(projectName, logstoreName, {
        // Required. The data retention period in days. A value of 3650 indicates that the data is permanently stored.
        ttl: 3600,
        // Required. The number of shards.
        shardCount: 2
    })
    // Create an index.
    const index = {
        "keys": {
            "request_method": {
                // Specifies whether the query is case-sensitive. false indicates that the query is case-insensitive.
                "caseSensitive": false,
                // Specifies whether to enable statistical analysis for the field.
                "doc_value": true,
                "token": ["\n", "\t", ";", ",", "=", ":"],
                "type": "text"
            }, "status": {
                // Specifies whether the query is case-sensitive. false indicates that the query is case-insensitive.
                "caseSensitive": false,
                // Specifies whether to enable statistical analysis for the field.
                "doc_value": true,
                "token": ["\n", "\t", ";", ",", "=", ":"],
                "type": "long"
            }
        },
    }
    await sls.createIndex(projectName, logstoreName, index)
    // Write logs.
    const logGroup = {
        logs: [
          { content: { request_method: 'GET', status: '200' }, timestamp: Math.floor(new Date().getTime() / 1000) },
          { content: { request_method: 'GET', status: '500' }, timestamp: Math.floor(new Date().getTime() / 1000) },
          { content: { request_method: 'GET', status: '200' }, timestamp: Math.floor(new Date().getTime() / 1000) },
          { content: { request_method: 'POST', status: '500'}, timestamp: Math.floor(new Date().getTime() / 1000) }
        ],
        tags: [{ tag1: 'testTag' }],
        topic: 'testTopic',
        source: 'testSource'
      };
      await sls.postLogStoreLogs(projectName, logstoreName, logGroup);
      // Query example 1: Query the log data of the last day.
      const from = new Date();
      from.setDate(from.getDate() - 1);
      const to = new Date();
      const res = await sls.getLogs(projectName, logstoreName, from, to);
      
      // Query example 2: Use a query statement to count the number of logs in the last 10 minutes.
      // const from = new Date();
      // from.setSeconds(from.getSeconds() - 600)
      // const to = new Date();
      // query = '* | select count(*) as count';
      // topic = 'testTopic';
    
      // const res = await sls.getLogs(projectName,logstoreName,from,to,{
      //     query: query,
      //     topic: topic,
      //     line: 100,
      //     offset: 0,
      //     reverse: false,
      //     powersql: false
      // });
      
      console.log(res)
}
// Run the function.
test()
```

The following code shows a sample response:

```
[
  {
    request_method: 'GET',
    status: '200',
    __topic__: 'testTopic',
    __source__: 'testSource',
    '__tag__:tag1': 'testTag',
    __time__: '1744882259'
  },
  {
    request_method: 'GET',
    status: '500',
    __topic__: 'testTopic',
    __source__: 'testSource',
    '__tag__:tag1': 'testTag',
    __time__: '1744882259'
  },
  {
    request_method: 'GET',
    status: '200',
    __topic__: 'testTopic',
    __source__: 'testSource',
    '__tag__:tag1': 'testTag',
    __time__: '1744882259'
  },
  {
    request_method: 'POST',
    status: '500',
    __topic__: 'testTopic',
    __source__: 'testSource',
    '__tag__:tag1': 'testTag',
    __time__: '1744882259'
  }
]
```

The following table provides more code examples for your reference.

**GitHub source code**

**Description**

[integration.test.js](https://github.com/aliyun/aliyun-log-nodejs-sdk/blob/master/test/integration.test.js)

Examples on how to create projects, logstores, and indexes, write logs, query logs and logstores, and obtain the distribution of logs.

### **Collect Node.js logs using Logtail**

For an example of how to use Logtail to collect log4js logs from a Node.js application, see [Collect Node.js logs](/help/en/sls/collect-node-js-logs#reference-z2j-xt5-vdb).
