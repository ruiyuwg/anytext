The HAVING clause is used to specify filter conditions for the results that are returned by GROUP BY clauses or aggregate functions.

## Syntax

```
HAVING bool_expression
```

**Important**

-   The HAVING clause is used to filter results that are returned by GROUP BY clauses or aggregate functions. The WHERE clause is used to filter raw data before the data is aggregated.
    
-   The HAVING clause is used before the ORDER BY clause and after the GROUP BY clause.
    

## Parameters

**Parameter**

**Description**

_bool\_expression_

The Boolean expression.

## Examples

-   Example 1: Return the request URIs whose average request duration is longer than 40 seconds.
    
    -   Query statement
        
        ```
        * |
        SELECT
          avg(request_time) AS avg_time,
          request_uri
        GROUP BY
          request_uri
        HAVING
          avg(request_time) > 40
        ```
        
    -   Query and analysis results![HAVING](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4969821461/p328422.png)
        
-   Example 2: Query the write latency of projects in service logs and return the projects whose write latency is greater than 1,000 microseconds.
    
    -   Query statement
        
        ```
        * |
        SELECT
          avg(latency) AS avg_latency,
          Project
        GROUP BY
          Project
        HAVING
          avg_latency > 1000
        ```
        
    -   Query and analysis results![HAVING](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4969821461/p328441.png)
