A logstore is a storage unit in Simple Log Service (SLS) that collects, stores, and queries log data.

## **Core concepts**

### **What is a logstore**

A logstore is a data container in Simple Log Service. You can create multiple logstores in a [project](/help/en/sls/manage-a-project/) to isolate and manage logs from different services or sources.

Some cloud products and SLS features automatically create dedicated logstores for specific purposes. You cannot write other data to these logstores. For example:

-   `internal-operation_log`: Stores the [detailed operation logs](/help/en/sls/manage-service-logs#5087d66e9eepf) for Simple Log Service.
    
-   `oss-log-store`: Automatically created when you configure the storage of [OSS access logs](/help/en/sls/usage-notes-of-oss-access-log/).
    

### **Logstore specifications**

Simple Log Service (SLS) offers two logstore specifications: Standard and Query. They differ in [features](#78b378495d82r) and cost.

**Type**

**Cost (index traffic fee comparison)**

**Scenarios**

Standard

USD 0.0875/GB

Suitable for scenarios that require data analytics, real-time monitoring, and visualization capabilities, such as interactive analysis, real-time monitoring, or building observability systems.

Query Type (Query Specification)

USD 0.0146/GB

Does not support analytics. Suitable for archival scenarios such as log archiving, audit log storage, and troubleshooting that require fast retrieval of log content without analysis. Typical applications include long-term storage of large-scale logs with low access frequency.

### **Scope and permissions**

**Permissions**

-   By default, an Alibaba Cloud account has full access to all logstore operations.
    
-   By default, a Resource Access Management (RAM) user has no permissions for logstores. Request permissions from the Alibaba Cloud account holder, who can attach one of the following system policies to the RAM user.
    
    -   AliyunLogFullAccess: Grants full permissions to manage SLS.
        
    -   AliyunLogReadOnlyAccess: Grants read-only permissions for SLS.
        
    
    If the system policies do not meet your requirements, you can [create custom policies](/help/en/ram/create-a-custom-policy) to implement fine-grained permission management. For more information, see the following table.
    
    **Operation**
    
    **Required permissions**
    
    Manage a logstore
    
    -   log:ListProject
        
    -   log:GetAcceleration
        
    -   log:ListDomains
        
    -   log:GetLogging
        
    -   log:ListTagResources
        
    -   log:GetProject
        
    -   log:ListLogStores
        
    -   log:\*LogStore
        
    -   log:\*Index
        
    -   log:ListShards
        
    -   log:GetLogStoreHistogram
        
    -   log:GetLogStoreContextLogs
        
    
    Query a logstore
    
    -   log:ListProject
        
    -   log:GetAcceleration
        
    -   log:ListDomains
        
    -   log:GetLogging
        
    -   log:ListTagResources
        
    -   log:GetProject
        
    -   log:ListLogStores
        
    -   log:GetLogStore
        
    -   log:GetLogStoreHistogram
        
    -   log:GetIndex
        
    -   log:CreateIndex
        
    -   log:UpdateIndex
        
    -   log:ListShards
        
    -   log:GetLogStoreContextLogs
        
    

## **Create a basic logstore**

### **Console**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com). In the Projects section, click the project that you want to manage.
    
2.  On the **Log Storage** > **Logstores** tab, click the **+** icon.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7673447571/p1000809.png)
    
3.  On the **Create Logstore** page, configure the parameters and click **OK**.
    
    1.  Logstore Type: The default value is Standard.
        
    2.  Billing Mode:
        
        -   [Pay-by-feature (cannot be changed)](/help/en/sls/pay-as-you-go): You are billed for each resource that you use, such as storage, indexing, and read/write operations. A monthly free quota is provided to help you control costs in small-scale use cases.
            
        -   [Pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode): You pay only for the raw data that you write. Storage and mainstream features are free for 30 days. This billing mode has a simpler and more cost-effective structure.
            
        
        > The pay-by-ingested-data mode is ideal when your data retention period is close to 30 days and you require indexing comparable to a full-text index.
        
    3.  Logstore Name: The name must be unique within the project. It serves as the unique identifier for the logstore and cannot be changed after the logstore is created.
        
    4.  Data Retention Period: The default value is 30 days.
        
    5.  Keep the default values for the other parameters. For a full list of parameters, see the following table.
        
    
    **Full list of logstore parameters**
    
    **Parameter**
    
    **Description**
    
    Logstore Type
    
    SLS logstores support two specifications: Standard and Query. Choose one based on your scenario to save costs.
    
    -   The Standard specification includes the complete one-stop data analytics features of SLS. It is suitable for scenarios such as real-time monitoring, interactive analysis, and building complete observability systems.
        
    -   The index traffic unit price for the Query specification is 29% of the Standard specification. This lets you enable indexes for more fields for the same cost. The Query specification supports only keyword search and does not support statistical analysis.
        
    
    Billing Mode
    
    -   Pay-by-feature: This is the original billing mode of SLS. You are billed for the resources that you use, such as storage and indexes, and features, such as data transformation and data shipping. You are charged on a pay-as-you-go basis.
        
    -   Pay-by-ingested-data: This is a simplified billing mode of SLS. You are charged mainly for the amount of raw data that you write to SLS. After data is written to SLS, store the data and use features such as data transformation and data shipping for free for 30 days. This billing mode is simple, predictable, and controllable. It helps you make full use of SLS to mine more data value.
        
    
    Logstore Name
    
    The logstore name must be unique within a project and cannot be changed after creation.
    
    WebTracking
    
    Enables the collection of user access data from web browsers and mobile apps (iOS/Android). This feature is disabled by default.
    
    Data Retention Period
    
    The number of days to retain log data before it is automatically deleted. Valid values: 1 to 3650. A value of 3650 indicates permanent storage.
    
    Intelligent Tiered Storage
    
    Automatically moves data to lower-cost storage tiers based on its age using the lifecycle management feature.
    
    -   Hot storage:
        
        -   Hot storage is a scalable and high-availability data storage solution for frequently accessed data.
            
        -   It supports real-time data access and provides high-performance log query and analysis functions. It is suitable for business scenarios that require frequent data queries and analysis.
            
    -   IA storage class
        
        -   The IA storage class (formerly cold storage) is a storage class that can reduce your long-term storage costs while ensuring that log query, analysis, visualization, alerting, shipping, and transformation capabilities are not affected.
            
        -   It is suitable for business scenarios that require infrequent queries and analysis, such as issue tracing.
            
    -   Archive Storage
        
        -   Archive Storage provides a lower-cost, queryable, and analyzable long-term data storage solution based on the existing Hot and IA storage classes.
            
        -   It is suitable for business scenarios that require long-term storage of audit data.
            
    
    Shards
    
    Each shard supports a write throughput of 5 MB/s and a read throughput of 10 MB/s. If the data traffic exceeds the service capabilities of a shard, split the shard. If the data traffic does not reach the maximum read and write capabilities of a shard, merge shards to save costs.
    
    Automatic Sharding
    
    If the write volume to a shard exceeds its [read/write](/help/en/sls/data-read-and-write) capacity for more than 5 minutes, enable this feature to automatically increase the number of shards based on the data volume.
    
    Maximum Shards
    
    After you enable automatic sharding, a maximum of 256 shards can be automatically created.
    
    Log Public IP
    
    After logs are received, the public IP address of the client and the time when the logs arrive at the server are automatically added.
    

### **API**

[CreateLogStore](/help/en/sls/developer-reference/api-sls-2020-12-30-createlogstore)

## **Modify logstore configuration**

You can configure the following parameters when you create a logstore. This section describes how to modify them for an existing logstore.

1.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6698915571/p995244.png) Log Storage. In the Logstores list, hover over the target LogStore and choose **Modify**.
    
2.  In the Logstore Attributes panel, modify the parameters.
    

### **Set the data retention period and delete logs**

### **Console**

In the **Basic Information** section, click **Modify**, change the data retention period, and then click **Save**.

> Simple Log Service does not support deleting specific log entries. You can delete logs based on time by modifying the log retention period. Alternatively, you can delete all logs by [stopping billing or deleting the Logstore](#sectiondiv-0x2-666-fo5).

-   **Specified Days**: Specify an integer from 1 to 3,650. A value of 3,650 indicates permanent retention. When the retention period expires, the logs are deleted.
    
-   **Permanent Storage**: Permanently retains all logs in this Logstore.
    

**Note**

The change takes effect immediately, but the deletion of expired data requires some time to complete.

### **API**

[UpdateLogStore](/help/en/sls/developer-reference/api-sls-2020-12-30-updatelogstore) operation, set the value of `ttl` to adjust the log retention period.

### **Use tiered storage to optimize storage costs**

### **Console**

1.  In the **Basic Information** section, click **Modify** and enable **Intelligent Tiered Storage**.
    
2.  Configure the **Storage Policy**. The total retention period across all three storage tiers must match the Data Retention Period.
    
    -   Hot storage: at least 7 days.
        
    -   The minimum storage duration for the IA storage class is 30 days.
        
    -   Archive storage: at least 60 days.
        
    
3.  Click **Save**. For more information, see [Intelligent tiered storage](/help/en/sls/data-tiered-storage-overview).
    

### **API**

In the [UpdateLogStore](/help/en/sls/developer-reference/api-sls-2020-12-30-updatelogstore) operation, set the values of `ttl`, `hot_ttl`, and `infrequentAccessTTL` to dynamically adjust the retention policy for tiered storage.

### **Collect client-side logs**

SLS provides the web tracking feature to collect logs from various clients, such as miniapps, mobile applications (iOS and Android), and web browsers.

Use this feature in one of the following two ways:

-   Transmit data by [using STS for authentication](/help/en/sls/use-the-web-tracking-feature-to-collect-logs#6139ea2e80upx). This method is suitable for production scenarios. You do not need to modify the LogStore configuration.
    
-   Transmit data [anonymously](/help/en/sls/use-the-web-tracking-feature-to-collect-logs#c4642e645a92d) using OpenAPI. This method is suitable only for test scenarios. You must enable the switch in the Logstore. For configuration instructions, see the following content.
    

### **Console**

In the Basic Information section, click **Modify**, enable WebTracking, and then click **Save**.

### **API**

[UpdateLogStore](/help/en/sls/developer-reference/api-sls-2020-12-30-updatelogstore) operation, set the `enable_tracking` parameter to `true` to enable the web tracking feature.

### Automatically add the public IP address and arrival time to logs

After you enable this feature, the following information is automatically added to logs during data collection:

-   \_\_tag\_\_:\_\_client\_ip\_\_: the public IP address of the device from which logs are sent.
    
-   \_\_tag\_\_:\_\_receive\_time\_\_: the time when logs arrive at the SLS server. The time is a UNIX timestamp that indicates the number of seconds that have elapsed since 00:00:00 UTC on January 1, 1970.
    

### **Console**

In the Basic Properties section, click **Modify**, enable the Log Public IP switch, and then click Save.

### **API**

In the [UpdateLogStore](/help/en/sls/developer-reference/api-sls-2020-12-30-updatelogstore) operation, use the `appendMeta` parameter to enable public IP address logging.

### **Adjust collection performance using shards**

Each shard supports a write throughput of 5 MB/s or 500 writes/s and a read throughput of 10 MB/s or 100 reads/s. These are soft limits. If the limits are exceeded, the system makes the best effort to provide service but does not guarantee service quality. If the read/write traffic exceeds the read/write capacity of a shard, split the shard to increase the number of shards and thereby increase the read/write capacity.

### **Console**

In the **Basic Information** section, click **Modify**, enable **Automatic Sharding**, set the **Maximum Shards**, and then click **Save**.

> SLS lets you [split and merge](/help/en/sls/manage-shards) a specific shard.

### **API**

[SplitShard](/help/en/sls/developer-reference/api-sls-2020-12-30-splitshard).

[MergeShards](/help/en/sls/developer-reference/api-sls-2020-12-30-mergeshard).

## **Stop billing or delete a logstore**

**Warning**

After a logstore is deleted, its stored log data is permanently deleted and cannot be recovered. Proceed with caution.

### **Console**

1.  Perform cleanup before deletion.
    
    1.  Before you delete a logstore, delete all its associated Logtail configurations.
        
    2.  If data shipping is enabled for the logstore, stop writing new data to the logstore and make sure that all existing data in the logstore is shipped before you delete the logstore.
        
2.  Deletion procedure.
    
    1.  On the **Log Storage** > **Logstores** tab, hover over the target logstore and choose **Delete**.
        
    2.  In the **Warning** dialog box, click **Confirm Deletion**.
        
3.  After deletion.
    
    1.  Storage fees are incurred on the day you delete the logstore. No fees are generated from the following day onward.
        
    2.  After you delete a logstore, the export tasks, data transformation jobs, and Scheduled SQL tasks that use the logstore as a data source and the import tasks that use the logstore as a destination are also deleted.
        

### **API**

[Delete Logstore](/help/en/sls/developer-reference/api-sls-2020-12-30-deletelogstore)

## **Example configurations for common scenarios**

### Real-time monitoring and analysis for high-volume services

An online application generates a large volume of business logs in real time. When a failure occurs, quickly locate error logs and monitor key metrics, such as queries per second (QPS) and response latency, with real-time alerts.

**Recommended configuration**: **Standard logstore** + **Pay-by-ingested-data** + **Automatic shard splitting**.

**Reasoning**: A **Standard logstore** supports analysis, real-time monitoring, and visualization. For high-volume log ingestion and analysis that may require extensive indexing, **pay-by-ingested-data** is recommended. **Automatic shard splitting** ensures sufficient performance for data ingestion and analysis.

### Compliance, auditing, and security

Industry regulations require you to store user activity logs and security logs for six months or longer for auditing purposes. However, these logs are queried and analyzed infrequently.

**Recommended configuration**: **Query logstore** + **Intelligent tiered storage**.

Reasoning: A **Query logstore** supports queries only but has lower index traffic costs than a Standard logstore. **Intelligent tiered storage** classifies log data based on its age, reducing long-term storage costs.

## **References**

### LogStore Comparison in Feature-Based Billing Mode

The Query logstore supports only the pay-by-feature billing mode. The following table compares the Standard and Query logstores in this mode.

**Item**

**Standard specification**

**Query Type (Query Specification)**

Cost

[index traffic](/help/en/sls/billable-items#section-js9-o1w-m7r)

USD 0.0875/GB

USD 0.0146/GB

Feature

[Data collection](/help/en/sls/data-collection-overview) (only for business system log scenarios)

Supported

Does not support collecting cloud product logs.

[Enable intelligent tiered storage](/help/en/sls/enable-hot-and-cold-tiered-storage-for-a-logstore#concept-2092727)

Supported

Supported

[Query](/help/en/sls/log-search-overview#concept-wjl-x3q-zdb)

Supported

Supported

[Analysis](/help/en/sls/log-analysis-overview#concept-nyf-cjq-zdb) (SQL statement)

Supported

Unsupported

[contextual query](/help/en/sls/contextual-query)

Supported

Supported

[LiveTail](/help/en/sls/livetail)

Supported

Supported

[LogReduce](/help/en/sls/logreduce)

Supported

Unsupported

[Reindex](/help/en/sls/reindex-logs-for-a-logstore)

Supported

Supported

[Dashboard](/help/en/sls/dashboard/)

Supported

Unsupported

[Alerting](/help/en/sls/user-guide/the-alerting-feature-of-log-service#concept-2061512)

Supported

Only supports alerts based on query statements.

[Scheduled SQL](/help/en/sls/how-scheduled-sql-works#concept-2066172)

Supported

Unsupported

[Data transformation](/help/en/sls/data-transformation-overview#concept-1130481)

Supported

Supported

[Data shipping](/help/en/sls/data-shipping-overview)

Supported

Supported

[Standard consumption](/help/en/sls/overview-of-real-time-consumption)

Supported

Supported

### **Limitations**

The pay-by-ingested-data mode supports the complete feature set of SLS. Value-added features such as query and analysis, data transformation, intelligent alerting, and data shipping and consumption do not incur additional fees, but are subject to quotas. The following table provides details.

quota limit

Note

Data transformation

A single logstore supports a maximum data transformation volume of 100 TB per month.

Data volume for scheduled SQL

A single logstore supports a maximum Scheduled SQL data volume of 20 TB per month.

Delivered data volume

A single logstore supports a maximum data shipping volume of 100 TB per month.

Data consumption

A single logstore supports a maximum data consumption volume of 100 TB per month.

Calculating data volume for alerting jobs

A single logstore supports a maximum alerting job computation volume of 100 TB per month.

## Billing

The cost of a logstore is mainly determined by the selected **billing mode**.

-   **Pay-by-feature**: You are billed for each resource that you use, such as storage capacity, index traffic, read/write operations, and the number of shards.
    
-   **Pay-by-ingested-data**: You are charged only for the amount of raw data that you write. This mode includes 30 days of free storage and multiple free features.
    

**Key billing item prices**:

-   **Standard index traffic**: USD 0.0875/GB.
    
-   **Query index traffic**: USD 0.0146/GB.
    

**Cost optimization recommendations**:

-   If your log retention period is close to or exceeds 30 days, the **pay-by-ingested-data** mode is typically more cost-effective.
    
-   For scenarios that require only archiving and retrieval, use the Query specification to reduce indexing costs.
    
-   Configure **intelligent tiered storage** to move infrequently accessed data to lower-cost storage tiers.
    

## **FAQ**

### **Cannot create LogStore**

You can create up to 200 logstores per project by default. To create more, either delete unused logstores or request a quota increase.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com). In the Projects section, click the project that you want to manage.
    
2.  On the Project Overview page, find Resource Quota in the Basic Information section and click **Manage**. In the **Resource Quotas** panel, adjust the Logstore quota limit and click **Save** to submit your request. The request takes about one hour to complete.
    

### **Why are my logs in SLS missing?**

-   Project and LogStore not found
    
    If you manually delete a project or logstore, the logs cannot be recovered. Use [ActionTrail](/help/en/actiontrail/user-guide/query-events-in-the-actiontrail-console) to query for project or logstore deletion events within the last 90 days.
    

-   Your account has an overdue payment. If your payment is more than 7 days overdue, your SLS projects are reclaimed. All data is erased and cannot be recovered. For more information, see [Overdue payments](/help/en/sls/overdue-payments#section-o48-47o-5wk).
    

### How can I optimize log storage costs?

-   To check your Simple Log Service costs, see [View the storage capacity and consumption records of Simple Log Service](/help/en/sls/how-to-view-the-storage-capacity-and-consumption-records-of-log-service).
    
-   [Download historical logs to your local machine](/help/en/sls/download-logs) or [deliver them to OSS for storage](/help/en/sls/create-oss-shipping-tasks-new-version).
