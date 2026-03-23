The ORDER BY clause is used to sort query and analysis results based on specified column names.

## Syntax

```
ORDER BY Column name [DESC | ASC]
```

**Note**

-   You can specify multiple column names to sort data in different orders. Example: `ORDER BY Column Name 1 [DESC | ASC], Column Name 2 [DESC | ASC]`.
    
-   If you do not specify the DESC or ASC keyword, the system sorts the query and analysis results in ascending order by default.
    
-   If a specified column has duplicate values, the sorting results may vary each time the query and analysis results are sorted. If you want to ensure consistent sorting results, you can specify multiple columns for sorting.
    

## Parameters

**Parameter**

**Description**

Column name

The name of the log field or the name of the column whose values are returned by an aggregate function. The ORDER BY clause sorts results based on the log field or column that you specify.

DESC

Data is sorted in descending order.

ASC

Data is sorted in ascending order.

## Examples

-   Example 1: Count the numbers of requests that correspond to different HTTP status codes and sort the query and analysis results in descending order by the numbers.
    
    -   Query statement
        
        ```
        * |
        SELECT
          count(*) AS PV,
          status
        GROUP BY
          status
        ORDER BY
          PV DESC
        ```
        
    -   Query and analysis results![order by](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5300921461/p302718.png)
        
-   Example 2: Calculate the average write latency of each Logstore and sort the query and analysis results in descending order by the average latencies.
    
    -   Query statement
        
        ```
        * |
        SELECT
          avg(latency) AS avg_latency,
          LogStore
        GROUP BY
          LogStore
        ORDER BY
          avg_latency DESC
        ```
        
    -   Query and analysis results![order by](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5300921461/p302722.png)
        
-   Example 3: Count the numbers of requests that correspond to different request durations and sort the query and analysis results in ascending order by the request durations.
    
    In the following query statement, content, time, and request\_time are fields in JSON logs.
    
    **Important**
    
    When you query and analyze JSON logs, make sure that the following requirements are met. For more information, see [Query and analyze JSON logs](/help/en/sls/query-and-analyze-json-logs#task-2024311).
    
    -   You must add the parent path to a field name in JSON logs. Example: content.time.request\_time.
        
    -   You must use double quotation marks ("") to enclose a field name in JSON logs in an analytic statement. Example: "content.time.request\_time".
        
    
    -   Query statement
        
        ```
        * |
        SELECT
          "content.time.request_time",
          count(*) AS count
        GROUP BY
          "content.time.request_time"
        ORDER BY
          "content.time.request_time"
        ```
        
    -   Query and analysis results![Request duration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8814749361/p232779.png)
