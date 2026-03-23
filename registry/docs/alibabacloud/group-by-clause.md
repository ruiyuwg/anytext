The `GROUP BY` clauses are often used with [aggregate functions](/help/en/sls/aggregate-function#LogService-user-guide-0103) to categorize rows in query results based on one or more column values. This creates a summary row for each unique combination of values, improving data analysis. Additionally, `GROUP BY` can be combined with `ROLLUP`, `CUBE`, and `GROUPING SETS` to enhance grouping capabilities and provide more analysis options.

## Basic syntax

## GROUP BY

The GROUP BY clause groups the analysis results.

```
SELECT 
 key1,
  ...
 aggregate_function
 GROUP BY 
 key,...
```

Parameters:

-   `key1`: The column you want to group by its value. It supports grouping by log field names or the result columns of aggregate functions. The `GROUP BY` clause supports single or multiple columns.
    
-   `aggregate_function`: The [aggregate function](/help/en/sls/aggregate-function#LogService-user-guide-0103) applied to each group, such as `count`, `min`, `max`, `avg`, and `sum`.
    

## GROUP BY ROLLUP

The `GROUP BY ROLLUP` clause creates a summary for each group and a total for all groups. For example, the result set of `GROUP BY ROLLUP (a, b)` includes `(a, b)`, `(a, null)`, and `(null, null)`.

```
SELECT
key1,
 ...
aggregate_function 
GROUP BY ROLLUP (key1,...)
```

Parameters:

-   `key1`: The column you want to group by its value. It supports grouping by log field names or the result columns of aggregate functions. The `GROUP BY` clause supports single or multiple columns.
    
-   `aggregate_function`: The [aggregate function](/help/en/sls/aggregate-function#LogService-user-guide-0103) applied to each group, such as `count`, `min`, `max`, `avg`, and `sum`.
    

## GROUP BY CUBE

The `GROUP BY CUBE` clause groups by all possible combinations of columns. For example, the result set of `GROUP BY CUBE (a, b)` includes `(a, b)`, `(null, b)`, `(a, null)`, and `(null, null)`.

```
SELECT 
key1,
...
aggregate_function 
GROUP BY CUBE (key1,...)
```

Parameters:

-   `key1`: The column you want to group by its value. It supports grouping by log field names or the result columns of aggregate functions. The `GROUP BY` clause supports single or multiple columns.
    
-   `aggregate_function`: The [aggregate function](/help/en/sls/aggregate-function#LogService-user-guide-0103) applied to each group, such as `count`, `min`, `max`, `avg`, and `sum`.
    

## GROUP BY GROUPING SETS

The `GROUP BY GROUPING SETS` clause groups columns sequentially. For example, the result set of `GROUP BY GROUPING SETS (a, b)` includes `(a, null)` and `(null, b)`.

```
SELECT 
key1,
... 
aggregate_function
GROUP BY GROUPING SETS (key1,...)
```

Parameters:

-   `key1`: The column you want to group by its value. It supports grouping by log field names or the result columns of aggregate functions. The `GROUP BY` clause supports single or multiple columns.
    
-   `aggregate_function`: The [aggregate function](/help/en/sls/aggregate-function#LogService-user-guide-0103) applied to each group, such as `count`, `min`, `max`, `avg`, and `sum`.
    

## Examples

**Important**

In SQL statements, when using the `GROUP BY` clause, you can only select the following in the `SELECT` statement:

-   The columns specified in the `GROUP BY` clause.
    
-   The results of aggregate calculations on any column, such as `COUNT()`, `SUM()`, etc.
    

Selecting columns not included in the `GROUP BY` clause directly is not permitted because their values may not be unique after grouping, leading to ambiguity. For example, the following statement is not valid:

```
* | SELECT status, request_time, COUNT(*) AS PV GROUP BY status
```

This is because `request_time` is not part of the `GROUP BY` clause and is not aggregated.

The correct format is:

```
* | SELECT status, arbitrary(request_time), COUNT(*) AS PV GROUP BY status
```

`arbitrary(request_time)` is a method to aggregate `request_time`, indicating that a random `request_time` value is selected from each group. This approach complies with SQL syntax rules and meets the query requirements.

-   ### **Example 1:** Count page views (PVs) by status code
    
    -   Query statement
        
        ```
        * | SELECT status, count(*) AS PV GROUP BY status
        ```
        
    -   Query results![group by](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3387850461/p302708.png)
        
-   ### **Example 2:** Count hourly PVs for website access
    
    -   Query statement
        
        The `__time__` field is a reserved field in Simple Log Service, representing the time column. `time` is an alias for `date_trunc('hour', __time__)`. For more information, see [date\_trunc function](/help/en/sls/date-and-time-functions-1#section-zpc-jv2-4fb).
        
        ```
        * |
        SELECT
          count(*) AS PV,
          date_trunc('hour', __time__) AS time
        GROUP BY
          time
        ORDER BY
          time
        LIMIT
          1000                       
        ```
        
    -   Query results![group by](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3387850461/p302709.png)
        
-   ### **Example 3:** Count PVs in 5-minute intervals
    
    -   Query statement
        
        Since the `date_trunc` function counts at fixed intervals, you can use the modulo operation for custom time-based statistical analysis. For example, `%300` represents a modulo operation for grouping data into 5-minute intervals.
        
        ```
        * |
        SELECT
          count(*) AS PV,
          __time__-__time__ % 300 AS time
        GROUP BY
          time
        LIMIT
          1000
        ```
        
    -   Query results![group by](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3387850461/p302710.png)
        

-   ### **Example 4:** Group by request method and status, calculating access data for each method and count for each status
    
    -   Query statement
        
        ```
        * |
        SELECT
          request_method,
          status,
          count(*) AS PV
        GROUP BY
          GROUPING SETS (request_method, status)
        ```
        
    -   Query results![GROUPING SETS](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0531770461/p336724.png)
        
-   ### **Example 5:** Group by request method and status using the sets `**(null, null)**`**,** `**(request_method, null)**`**,** `**(null, status)**`**, and**`**(request_method, status)**`, and calculate the access count for each group
    
    -   Query statement
        
        ```
        * |
        SELECT
          request_method,
          status,
          count(*) AS PV
        GROUP BY
         CUBE (request_method, status)
        ```
        
    -   Query results![CUBE](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3387850461/p336770.png)
        

-   ### **Example 6:** Group by request method and status using the sets `**(request_method, status)**`**,** `**(request_method, null)**`**, and**`**(null, null)**`, and calculate the access count for each group
    
    -   Query statement
        
        ```
        * |
        SELECT
          request_method,
          status,
          count(*) AS PV
        GROUP BY
         ROLLUP (request_method, status)
        ```
        
    -   Query results![ROLLUP](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3387850461/p336803.png)
