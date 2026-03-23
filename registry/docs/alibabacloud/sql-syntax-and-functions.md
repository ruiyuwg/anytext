Simple Log Service allows you to analyze data in the search results by using SQL statements. This topic describes the basic syntax of SQL analytic statements.

## Basic syntax

Each query statement consists of a search statement and an analytic statement. The search statement and the analytic statement are separated with a vertical bar (`|`). Format:

```
Search statement|Analytic statement
```

A search statement can be independently executed. An analytic statement must be executed together with a search statement. The log analysis feature is used to analyze data in the search results or all data in a Logstore.

**Important**

-   We recommend that you specify up to 30 search conditions in a search statement.
    
-   If you do not specify a FROM or WHERE clause in an analytic statement, all data of the current Logstore is automatically analyzed. Analytic statements do not support offsets and are not case-sensitive. You do not need to append a semicolon (;) to an analytic statement.
    

**Statement**

**Description**

Search statement

A search statement specifies one or more search conditions. A search statement can be a keyword, a numeric value, a numeric value range, a space, or an asterisk (\*).

If you specify a space or an asterisk (\*) as the search statement, no conditions are used for searching and all logs are returned.

Analytic statement

An analytic statement is used to aggregate or analyze data in the search results or all data in a Logstore. For more information about the functions and syntax supported by Simple Log Service for analyzing logs, see the following topics:

-   [SQL functions](/help/en/sls/sql-function/)
    
-   [SQL clauses](/help/en/sls/sql-syntax/)
    
-   [Nested subqueries](/help/en/sls/nested-subquery)
    
-   [Join query and analysis operations on a Logstore and a MySQL database](/help/en/sls/join-queries-on-a-logstore-and-a-mysql-database)
    

Sample SQL analytic statement:

```
* | SELECT status, count(*) AS PV GROUP BY status
```

## SQL functions and SQL clauses

In most cases, SQL functions are used to calculate, convert, and format data. For more information, see [SQL functions](/help/en/sls/sql-function/). For example, you can use SQL functions to calculate the sum and average of values, perform operations on strings, and process dates. In most cases, SQL functions are embedded in SQL clauses.

SQL clauses are used to create complete SQL search statements or data processing statements to identify the sources, conditions, groups, and orders of data. For more information, see [SQL clauses](/help/en/sls/sql-syntax/).

### **Example 1.** Query logs of the previous day

The [current\_date](/help/en/sls/date-and-time-functions-1#title-haf-yb6-4po) function returns the current date. The [date\_add](/help/en/sls/date-and-time-functions-1#title-fmc-baq-7l8) function subtracts a specific interval from the current date. The results are displayed in a table, which allows you to view data in an intuitive manner. ([Demo](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8DQpTRUxFQ1QNCiAgKg0KRlJPTSAgbG9nDQpXSEVSRQ0KICBfX3RpbWVfXyA8IHRvX3VuaXh0aW1lKGN1cnJlbnRfZGF0ZSkNCiAgQU5EIF9fdGltZV9fID4gdG9fdW5peHRpbWUoZGF0ZV9hZGQoJ2RheScsIC0xLCBjdXJyZW50X2RhdGUpKQ%3D%3D))

-   Query statement
    
    ```
    * |
    SELECT
      *
    FROM  log
    WHERE
      __time__ < to_unixtime(current_date)
      AND __time__ > to_unixtime(date_add('day', -1, current_date))
    ```
    
-   Results![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4146135371/p895315.png)
    

### **Example 2. Query the distribution of source IP addresses for logs**

The [ip\_to\_province](/help/en/sls/ip-functions#title-vfw-dpo-y8k) function returns the provinces by IP address. The `GROUP BY` clause aggregates the provinces. Then, the [count](/help/en/sls/aggregate-function#title-9tl-8ms-d3x) function calculates the number of requests from each province. The results are displayed in a pie chart. ([Demo](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8DQpTRUxFQ1QNCiAgKg0KRlJPTSAgbG9nDQpXSEVSRQ0KICBfX3RpbWVfXyA8IHRvX3VuaXh0aW1lKGN1cnJlbnRfZGF0ZSkNCiAgQU5EIF9fdGltZV9fID4gdG9fdW5peHRpbWUoZGF0ZV9hZGQoJ2RheScsIC0xLCBjdXJyZW50X2RhdGUpKQ%3D%3D))

-   Query statement
    
    ```
    * |
    select  
      count(1) as c,
      ip_to_province(remote_addr) as address
    group by
      address
    limit
      100
    ```
    

### **Example 3. Query the inbound and outbound NGINX traffic**

The [date\_trunc](/help/en/sls/date-and-time-functions-1#title-tz0-yz4-43k) function truncates the values of the `__time__` field by hour. The `__time__` field is a system field that specifies the log collection time. The default value of the \_\_time\_\_ field is a timestamp that is accurate to the second. The [date\_format](/help/en/sls/date-and-time-functions-1#title-y3f-fqi-d36) function formats the truncated time values. The `GROUP BY` clause aggregates the time values. The [sum](/help/en/sls/aggregate-function#title-88h-pgn-zjm) function calculates the total volume of traffic per hour. The results are displayed in a line chart, in which the x-axis is set to `time` and the y-axis on the left is set to `net_out` and `net_in`. ([Demo](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8DQpTRUxFQ1QNCiAgKg0KRlJPTSAgbG9nDQpXSEVSRQ0KICBfX3RpbWVfXyA8IHRvX3VuaXh0aW1lKGN1cnJlbnRfZGF0ZSkNCiAgQU5EIF9fdGltZV9fID4gdG9fdW5peHRpbWUoZGF0ZV9hZGQoJ2RheScsIC0xLCBjdXJyZW50X2RhdGUpKQ%3D%3D))

-   Query statement
    
    ```
    * |
    select
      sum(body_bytes_sent) as net_out,
      sum(request_length) as net_in,
      date_format(date_trunc('hour', __time__), '%m-%d %H:%i') as time
    group by
      date_format(date_trunc('hour', __time__), '%m-%d %H:%i')
    order by
      time
    limit
      10000
    ```
    
-   Results
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4146135371/p895288.png)
    

### Example 4. Query the top 10 most accessed URLs in NGINX

The [split\_part](/help/en/sls/string-functions-1#title-755-t6x-3iz) function splits the `request_uri` field into `arrays` by using the question mark (`?`) and obtains the request paths from the first string of the arrays. The `GROUP BY` clause aggregates the request paths. The [count](/help/en/sls/aggregate-function#title-9tl-8ms-d3x) function calculates the number of times that each path is accessed. The `ORDER BY` clause sorts the paths in descending order based on the number of times that each path is accessed. The results are displayed in a column chart. ([Demo](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8DQpTRUxFQ1QNCiAgKg0KRlJPTSAgbG9nDQpXSEVSRQ0KICBfX3RpbWVfXyA8IHRvX3VuaXh0aW1lKGN1cnJlbnRfZGF0ZSkNCiAgQU5EIF9fdGltZV9fID4gdG9fdW5peHRpbWUoZGF0ZV9hZGQoJ2RheScsIC0xLCBjdXJyZW50X2RhdGUpKQ%3D%3D))

-   Query statement
    
    ```
    * |
    select
      count(1) as pv,
      split_part(request_uri, '?', 1) as path
    group by
      path
    order by
      pv desc
    limit
      10
    ```
    
-   Results
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4146135371/p895286.png)
    

### Example 5. Query the category and PV trend of request methods

The [date\_trunc](/help/en/sls/date-and-time-functions-1#title-tz0-yz4-43k) function truncates time values by minute. The GROUP BY clause aggregates and groups the truncated time values to calculate the number of page views (PVs) by `request_method`. The ORDER BY clause sorts the time values in ascending order. The results are displayed in a flow chart. In the chart, the x-axis indicates time values and the y-axis indicates the number of PVs. The aggregate column is `request_method`. ([Demo](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8DQpTRUxFQ1QNCiAgKg0KRlJPTSAgbG9nDQpXSEVSRQ0KICBfX3RpbWVfXyA8IHRvX3VuaXh0aW1lKGN1cnJlbnRfZGF0ZSkNCiAgQU5EIF9fdGltZV9fID4gdG9fdW5peHRpbWUoZGF0ZV9hZGQoJ2RheScsIC0xLCBjdXJyZW50X2RhdGUpKQ%3D%3D))

-   Query statement
    
    ```
    * |
    select
      date_format(date_trunc('minute', __time__), '%m-%d %H:%i') as t,
      request_method,
      count(*) as pv
    group by
      t,
      request_method
    order by
      t asc
    limit
      10000
    ```
    
-   Results
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4146135371/p895284.png)
    

### Example 6. Query the number of PVs for the current day and the day-over-day comparison in PVs between the current day and the previous day

The count function calculates the number of PVs for the current day. The compare function returns the day-over-day comparison in PVs between the current day and the previous day. ([Demo](https://sls.aliyun.com/doc/playground/demo.html?dest=%2Flognext%2Fproject%2Fnginx-demo-log%2Flogsearch%2Fnginx-access-log%3Fencode%3Dbase64%26queryString%3DKiB8IHNlbGVjdCBkaWZmIFsxXSBhcyB0b2RheSwgcm91bmQoKGRpZmYgWzNdIC0xLjApICogMTAwLCAyKSBhcyBncm93dGggRlJPTSAoIFNFTEVDVCBjb21wYXJlKHB2LCA4NjQwMCkgYXMgZGlmZiBGUk9NICggU0VMRUNUIENPVU5UKDEpIGFzIHB2IEZST00gbG9nICkgKQ%3D%3D%26queryTimeType%3D6%26isShare%3Dtrue&maxWidth=true))

-   Query statement
    
    ```
    * |
    select
      diff [1] as today,
      round((diff [3] -1.0) * 100, 2) as growth
    FROM
      (
        SELECT
          compare(pv, 86400) as diff
        FROM
          (
            SELECT
              COUNT(1) as pv
            FROM
              log
          )
      )
    ```
    
-   Results![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9755835371/p895273.png)
    

### Example 7. Forecast the number of PVs based on NGINX access logs

The `time - time % 60` expression subtracts the remainder of time values divided by 60 from the time values to obtain `timestamps` that are accurate to the minute. The `GROUP BY` clause aggregates the `timestamps`. The [count](/help/en/sls/aggregate-function#title-9tl-8ms-d3x) function calculates the number of PVs per minute and the results are used as the subquery in a new query. The [ts\_predicate\_simple](/help/en/sls/prediction-and-anomaly-detection-functions#title-ezb-vsd-s63) function forecasts the number of PVs within the next 6 minutes. The results are displayed in a time series chart. ([Demo](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8DQpTRUxFQ1QNCiAgKg0KRlJPTSAgbG9nDQpXSEVSRQ0KICBfX3RpbWVfXyA8IHRvX3VuaXh0aW1lKGN1cnJlbnRfZGF0ZSkNCiAgQU5EIF9fdGltZV9fID4gdG9fdW5peHRpbWUoZGF0ZV9hZGQoJ2RheScsIC0xLCBjdXJyZW50X2RhdGUpKQ%3D%3D))

-   Query statement
    
    ```
    * |
    select
      ts_predicate_simple(stamp, value, 6)
    from
      (
        select
          __time__ - __time__ % 60 as stamp,
          COUNT(1) as value
        from
          log
        GROUP BY
          stamp
        order by
          stamp
      )
    LIMIT
      1000
    ```
    
-   Results
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4146135371/p895262.png)
    

### **Example 8. Collect** data based on the http\_user\_agent field, and **sort and display the data by the number of PVs**

The data is grouped and aggregated based on the `http_user_agent` field. The number of requests from each agent and the total response size returned to the clients are queried. The unit of the total response size is `bytes`. The [round](/help/en/sls/mathematical-calculation-functions#title-qza-f6e-ws1) function converts the size in bytes to the size in `MB` and rounds the size to two decimal places. The `CASE WHEN` expression categorizes the `status` string into layers, including `2xx`, `3xx`, `4xx`, and `5xx`, and calculates the percentage of each layer. The results are displayed in a table, which allows you to view the data and the meanings of the data in an intuitive manner. ([Demo](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8DQpTRUxFQ1QNCiAgKg0KRlJPTSAgbG9nDQpXSEVSRQ0KICBfX3RpbWVfXyA8IHRvX3VuaXh0aW1lKGN1cnJlbnRfZGF0ZSkNCiAgQU5EIF9fdGltZV9fID4gdG9fdW5peHRpbWUoZGF0ZV9hZGQoJ2RheScsIC0xLCBjdXJyZW50X2RhdGUpKQ%3D%3D))

-   Query statement
    
    ```
    * |
    select
      http_user_agent as "User agent",
      count(*) as pv,
      round(sum(request_length) / 1024.0 / 1024, 2) as "Request traffic (MB)",
      round(sum(body_bytes_sent) / 1024.0 / 1024, 2) as "Response traffic (MB)",
      round(
        sum(
          case
            when status >= 200
            and status < 300 then 1
            else 0
          end
        ) * 100.0 / count(1),
        6
      ) as "Percentage of status code 2xx (%)",
      round(
        sum(
          case
            when status >= 300
            and status < 400 then 1
            else 0
          end
        ) * 100.0 / count(1),
        6
      ) as "Percentage of status code 3xx (%)",
      round(
        sum(
          case
            when status >= 400
            and status < 500 then 1
            else 0
          end
        ) * 100.0 / count(1),
        6
      ) as "Percentage of status code 4xx (%)",
      round(
        sum(
          case
            when status >= 500
            and status < 600 then 1
            else 0
          end
        ) * 100.0 / count(1),
        6
      ) as "Percentage of status code 5xx (%)"
    group by
      "User agent"
    order by
      pv desc
    limit
      100
    ```
    

### Example 9. Query the percentage for the number of error requests in NGINX logs

The number of error requests whose status code exceeds 400 and the total number of requests are obtained based on SQL statements. Then, the percentage for the number of error requests is calculated. The results are displayed in a statistical chart. ([Demo](https://sls.aliyun.com/doc/playground/demo.html?dest=/lognext/project/nginx-demo-log/logsearch/nginx-access-log?encode%3Dbase64%26queryString%3DKiB8DQpTRUxFQ1QNCiAgKg0KRlJPTSAgbG9nDQpXSEVSRQ0KICBfX3RpbWVfXyA8IHRvX3VuaXh0aW1lKGN1cnJlbnRfZGF0ZSkNCiAgQU5EIF9fdGltZV9fID4gdG9fdW5peHRpbWUoZGF0ZV9hZGQoJ2RheScsIC0xLCBjdXJyZW50X2RhdGUpKQ%3D%3D))

-   Query statement
    
    ```
    * |
    select
      round((errorCount * 100.0 / totalCount), 2) as errorRatio
    from
      (
        select
          sum(
            case
              when status >= 400 then 1
              else 0
            end
          ) as errorCount,
          count(1) as totalCount
        from
          log
      )
    ```
    
-   Results![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4146135371/p895234.png)
