Standard SQL may yield incomplete results with large data volumes. Dedicated SQL enhances analysis performance and data capacity by adding computing resources. It offers enhancement mode and complete accuracy mode to cater to various needs. This topic covers the concept, principles, billing, and limits of Dedicated SQL.

## Why use Dedicated SQL

### **Limitations of standard queries**

Standard queries have the following limitations when processing large-scale data:

-   Inaccurate results: Resource limitations (such as time slices, IO, data volume) may cause some data not to be loaded, affecting statistical accuracy.
    
-   Performance bottleneck: A single shard only supports 400 MB of data volume. Concurrency analysis requirements with TB-level log volumes or higher may be limited.
    
-   Resource contention: Multi-tenancy shared resources may lead to local resource contention.
    

### Core values of Dedicated SQL

#### **Enhancement mode**

Enhancement mode is suitable for scenarios with real-time and high concurrency requirements. Core features include:

-   Performance improvement: Single node processing capacity of 2 GB, supporting up to 100 concurrent threads.
    
-   Auto-scaling: Dynamically allocates resources as needed, with elastic storage and computing power.
    
-   Typical scenarios: Real-time monitoring (such as API success rate alerts), and high concurrency point query analysis.
    

#### Complete accuracy mode

Complete accuracy mode is suitable for scenarios with extremely high requirements for result precision. Core features include:

-   Zero error guarantee: Ensures complete data loading by trading time for resources.
    
-   Dedicated resources: Stable operation until completion or timeout.
    
-   Typical scenarios: Serious analysis scenarios, such as financial reconciliation, security audit, extra-long time periods, and large-scale trend analysis.
    

**Important**

The maximum SQL execution time is 55 seconds, and the concurrency limit is 5.

**Aspect**

**Enhancement mode**

**Complete accuracy mode**

Core objective

Performance acceleration

Result accuracy

Resource strategy

Shared resource pool, auto scaling

Dedicated resource pool + time for accuracy trade-off

Typical scenarios

Real-time monitoring, high concurrency analysis

Serious analysis scenarios, such as financial reconciliation, security audit, extra-long time periods, and large-scale trend analysis

Accuracy tolerance

Limited error allowed

Rigid demand for zero error

## Typical scenarios of Dedicated SQL

### SQL enhancement

Data in Simple Log Service (SLS) must be stored in a [shard](/help/en/sls/manage-shards). When using SQL analysis, the data processing capability of a single shard is limited. If the data scale is too large, performance issues or data scanning truncation may occur. Increasing the number of shards can improve read and write capabilities, but this only affects newly written data and may lead to too many clients for [real-time consumption](/help/en/sls/overview-of-real-time-consumption). SQL enhancement enables auto-scaling in resource scheduling, allowing SQL analysis capabilities to be dynamically improved. Typical scenarios include:

-   High-performance data analysis, such as real-time analysis.
    
-   Long-term data analysis, such as monthly data.
    
-   Large-scale analysis of hundreds of billions of rows.
    
-   High-concurrency analysis, including report and point query analysis with SQL concurrency over 15.
    

### SQL complete accuracy

When SLS performs large-scale data analysis, the following situations may cause data loading interruption:

-   Time slice exhaustion: Allocated time resources are used up.
    
-   Data volume exceeds threshold: The total amount of loaded data exceeds the limit.
    
-   Number of data rows exceeds threshold: The number of loaded rows exceeds the limit.
    
-   Number of IO operations exceeds threshold: The number of disk reads exceeds the limit.
    

These situations may cause some data to not be fully loaded, affecting the accuracy of the final results. SQL complete accuracy can solve these problems. Typical scenarios include:

-   Business monitoring alerts: Critical business monitoring requires accurate data analysis results.
    
-   Business operations analysis: Serious analysis scenarios, such as analysis of key indicators involving revenue, finance, retention, and conversion.
    
-   Online data services: Providing data services to external users based on SQL analysis results, requiring analysis results to be completely accurate.
    

## How Dedicated SQL is billed

Fees are calculated based on the actual CPU time used for SQL analysis. The unit is the core-hour, which represents the cost of exclusively using one CPU core of compute resources for one hour. For more information, see [Dedicated SQL billing examples](/help/en/sls/billing-examples#table-ozp-u8q-43m).

-   Pay-as-you-go: Dedicated SQL fee = CPU time (hours) × Unit price per hour
    
-   Resource plans: Prepaid resource plans are converted into resource credits (CUs) to pay for resource usage.
    

## Limits of the analysis feature

**Limit**

**Standard instance**

**Dedicated SQL instance**

**SQL enhancement**

**Complete accuracy**

Concurrency

Up to 15 concurrent queries per project.

Up to 100 concurrent queries per project.

Up to 5 concurrent queries per project.

Data volume

A single query can scan up to 400 MB of log data (excluding cached data). Data exceeding this limit is truncated and marked as incomplete query results.

A single query can scan up to 2 GB of log data (excluding cached data). Data exceeding this limit is truncated and marked as incomplete query results.

Unlimited.

Method to enable

By default, the log analysis feature is enabled.

A switch is provided for you to manually enable Dedicated SQL.

A switch is provided for you to manually enable Dedicated SQL.

Fee

Free of charge.

You are charged based on the actual CPU time.

You are charged based on the actual CPU time.

Data effectiveness mechanism

You can analyze only the data that is written to SLS after the log analysis feature is enabled.

If you need to analyze historical data, you must [reindex](/help/en/sls/reindex-logs-for-a-logstore#task-2424026) the historical data.

You can analyze only the data that is written to SLS after the log analysis feature is enabled.

If you need to analyze historical data, you must [reindex](/help/en/sls/reindex-logs-for-a-logstore#task-2424026) the historical data.

You can analyze only the data that is written to SLS after the log analysis feature is enabled.

If you need to analyze historical data, you must [reindex](/help/en/sls/reindex-logs-for-a-logstore#task-2424026) the historical data.

Return results

By default, analysis returns up to 100 rows and 100 MB of data. Exceeding 100 MB results in an error.

If you need to return more data, use the [LIMIT clause](/help/en/sls/limit-clause#undefined).

By default, analysis returns up to 100 rows and 100 MB of data. Exceeding 100 MB results in an error.

If you need to return more data, use the [LIMIT clause](/help/en/sls/limit-clause#undefined).

By default, analysis returns up to 100 rows and 100 MB of data. Exceeding 100 MB results in an error.

If you need to return more data, use the [LIMIT clause](/help/en/sls/limit-clause#undefined).

Maximum field length

The default maximum length for a single field is 2,048 bytes (2 KB) and can be adjusted up to 16,384 bytes (16 KB). Data beyond this limit will not be included in log query and analysis.

**Note**

To change this limit, adjust **Maximum Field Length**. Changes apply only to new data. For more information, see [Create indexes](/help/en/sls/create-indexes#section-r21-m4u-gpg).

The default maximum length for a single field is 2,048 bytes (2 KB) and can be adjusted up to 16,384 bytes (16 KB). Data beyond this limit will not be included in log query and analysis.

**Note**

To change this limit, adjust **Maximum Field Length**. Changes apply only to new data. For more information, see [Create indexes](/help/en/sls/create-indexes#section-r21-m4u-gpg).

The default maximum length for a single field is 2,048 bytes (2 KB) and can be adjusted up to 16,384 bytes (16 KB). Data beyond this limit will not be included in log query and analysis.

**Note**

To change this limit, adjust **Maximum Field Length**. Changes apply only to new data. For more information, see [Create indexes](/help/en/sls/create-indexes#section-r21-m4u-gpg).

Timeout period

The maximum timeout period for an analysis operation is 55 seconds.

The maximum timeout period for an analysis operation is 55 seconds.

The maximum timeout period for an analysis operation is 55 seconds.

Number of bits for double-type field values

Double-type field values are limited to 52 bits. Exceeding this can lead to precision loss in floating-point numbers.

Double-type field values are limited to 52 bits. Exceeding this can lead to precision loss in floating-point numbers.

Double-type field values are limited to 52 bits. Exceeding this can lead to precision loss in floating-point numbers.
