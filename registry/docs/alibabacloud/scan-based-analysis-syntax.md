Simple Log Service provides the scan-based analysis feature that scans logs based on specified fields to return analysis results. This feature allows you to analyze logs without the need to configure indexes for the logs. This topic describes the basic syntax of scan-based analysis.

## How it works

When Simple Log Service receives a scan-based analysis request, Simple Log Service performs the following steps:

1.  Executes the search statement to query logs.
    
    **Important**
    
    The search statement requires indexes. For example, before the `status:200 | set session mode=scan;SELECT api, count(*) AS PV GROUP BY api` statement is executed, you must create an index for the status field. You do not need to create an index for the api field.
    
2.  Scans the query results of the search statement based on the fields that are specified in the analytic statement and extracts data for the fields.
    
3.  Executes the analytic statement to aggregate and analyze the extracted data and returns analysis results.
    

## Basic syntax

When you use the scan-based analysis feature, add `set session mode=scan;` before the standard SQL syntax-based analytic statement.

```
Search statement | set session mode=scan;Analytic statement based on the standard SQL syntax
```

### **Example**

```
* and status:200 | set session mode=scan;SELECT api, count(*) AS PV GROUP BY api
```

## Limits

-   In scan-based analysis mode, all fields are considered of the varchar type.
    
    If you need to analyze fields of other data types, you can use the cast function to convert data types. For more information, see [cast function](/help/en/sls/data-type-conversion-functions#section-w7c-n7h-7k0).
    
    For example, if you want to calculate the average latency of API operations, you must use the cast function to convert the type of the latency field to the bigint type because the avg function requires numeric input.
    
    ```
    status:200 | set session mode=scan;SELECT avg(cast(latency AS bigint)) AS 'Average latency', api GROUP BY api
    ```
    
-   In scan-based analysis mode, Simple Log Service scans logs to extract data for the fields that are specified in the analytic statement. Existing field indexes do not take effect.
    
    For example, you have created a long-type index for the status field. If you execute the following statement to perform scan-based analysis, the index of the status field does not take effect.
    
    ```
    * | set session mode=scan;SELECT count(1) AS pv, api WHERE cast(status AS bigint) = 200 GROUP BY api
    ```
    
    In this scenario, we recommend that you use the following statement.
    
    **Note**
    
    If you have created an index for a field, we recommend that you place the field before the vertical bar (|) as a filter condition.
    
    ```
    status:200 | set session mode=scan;SELECT count(1) as pv, api GROUP BY api
    ```
    
-   In scan-based analysis mode, the amount of data that can be analyzed is limited. In a shard, up to 500,000 logs can be analyzed, and up to 10 million logs can be scanned. If a search statement is used, the scan limit refers to the number of logs that are returned by the search statement. If one of the preceding limits is exceeded, the system returns the analysis results of only some logs, and prompts that the analysis results are inaccurate.
    
    You can use the following methods to prevent inaccurate results:
    
    -   We recommend that you use index-based analysis for large-scale structured data. You must create field indexes and enable the log analysis feature.
        
    -   We recommend that you use search statements to filter logs and reduce the amount of data that needs to be scanned. Make sure that you have created indexes for the fields that are specified in the search statements.
        
    -   We recommend that you reduce the query time range to reduce the amount of data that needs to be scanned.
        
    
-   In scan-based analysis mode, the `*|select *` statement is not supported.
    
-   If you want to analyze data in multiple Logstores by using a JOIN clause in scan-based analysis mode, you must add Logstore names before fields. Format: `LogstoreName.key`.
    

## Comparison between index-based analysis and scan-based analysis

**Item**

**Index-based analysis**

**Scan-based analysis**

Syntax

`Search statement | Analytic statement based on the standard SQL syntax`

`Search statement | set session mode=scan; Analytic statement based on the standard SQL syntax`

Whether indexes need to be configured

You need to configure indexes for fields and enable the log analysis feature for the fields.

You do not need to configure indexes or enable the feature.

**Important**

The search statement before the vertical bar (|) requires indexes.

SQL syntax

A wide range of SQL syntax and SQL functions are supported. For more information, see [Function overview](/help/en/sls/function-overview#concept-2081019).

The SQL syntax and SQL functions supported for index-based analysis are supported. Usage limits are imposed in some scenarios. For more information, see [Limits](#section-ket-gmk-4t3).

Analysis

Hundreds of millions of rows of logs can be analyzed. For more information, see [Overview of log query and analysis](/help/en/sls/log-analysis-overview#concept-nyf-cjq-zdb).

You can enable the Dedicated SQL feature to perform enhanced analysis.

Millions of rows of logs can be analyzed.

If you want to analyze a large amount of data, we recommend that you use a search statement to filter logs first. A search statement requires indexes.

Fees

You are charged for index traffic and index storage. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).

You are charged for scans based on the scan traffic, which is equivalent to the amount of data returned after scanning. The system identifies logs based on the results of index-based query.
