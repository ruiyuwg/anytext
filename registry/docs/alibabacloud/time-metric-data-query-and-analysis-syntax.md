This topic describes the syntax and limits of query and analysis on metric data.

Simple Log Service supports the following types of syntax for query and analysis on metric data:

-   [PromQL syntax](#title-s8f-vu5-vpk): PromQL is the query language provided by Prometheus. You can use the PromQL syntax to simplify the query and analysis on metric data. For more information, see [Prometheus documentation](https://prometheus.io/docs/prometheus/latest/querying/basics/) and [PromQL function usage examples](/help/en/sls/promql-function-usage-example).
    
-   [SQL syntax](#title-uf4-p74-kui): You can use the SQL syntax to query and analyze metric data based on the encoding format of the data.
    
-   [Combination of SQL and PromQL](#title-crm-tp1-ys9): You can use the SQL syntax together with the PromQL functions that are provided by Simple Log Service to perform nested query. When you use the PromQL syntax, you can also use the machine learning syntax of Simple Log Service. For more information, see [Machine learning syntax](/help/en/sls/user-guide/overview-23#concept-cgz-n4h-kfb).
    

If you use the PromQL syntax or the combination of SQL and PromQL for query and analysis, the metric name and labels that you specify must comply with the naming conventions. For more information, see [Metric identifier](/help/en/sls/metric#section-5h5-ucp-ych).

## PromQL syntax

The following examples show how to use the PromQL syntax:

-   Query the time series in which the metric name is http\_requests\_total, the job label is apiserver, and the handler label is /api/comments.
    
    ```
    http_requests_total{job="apiserver", handler="/api/comments"}
    ```
    
-   Query the top 3 CPU users grouped by app and proc within the previous 5 minutes. app specifies applications, and proc specifies process types.
    
    ```
    topk(3, sum by (app, proc) (rate(instance_cpu_time_ns[5m])))
    ```
    
-   Query unhealthy pods.
    
    ```
    min_over_time(sum by (namespace, pod) (kube_pod_status_phase{phase=~"Pending|Unknown|Failed"})[15m:1m]) > 0
    ```
    
-   Query the sum of the CPU utilization for Kubernetes DaemonSets.
    
    ```
    sum (rate (container_cpu_usage_seconds_total{pod=~"^x.*$",cluster=~".*",namespace=~".*"}[1m])) / sum (kube_pod_container_resource_limits_cpu_cores{pod=~"^null.*$",cluster=~".*",namespace=~".*"}) * 100
    ```
    

For more information about the PromQL syntax, see [Prometheus documentation](https://prometheus.io/docs/prometheus/latest/querying/basics/), [Querying examples](https://prometheus.io/docs/prometheus/latest/querying/examples/), and [PromQL use cases](/help/en/sls/promql-and-sql-query-time-series-database-common-cases#16936574a5zv9).

## SQL syntax

The following examples show how to use the SQL syntax. For more information, see [SQL use cases](/help/en/sls/promql-and-sql-query-time-series-database-common-cases#8930378fff4li).

-   Query and analyze all data.
    
    ```
    *| SELECT * FROM "my_metric_store.prom" WHERE __name__ != '' 
    ```
    
-   For the http\_request\_count metric, query the data in which the domain value of the \_\_labels\_\_ field is www.example.com and obtain the sum of the values for the \_\_value\_\_ field.
    
    ```
    *| SELECT sum(__value__) FROM "my_metric_store.prom" WHERE __name__='http_request_count' and element_at(__labels__, 'domain')='www.example.com' 
    ```
    
-   For the http\_request\_count metric, query the data in which the domain value of the \_\_labels\_\_ field is www.example.com, aggregate the values of the \_\_value\_\_ field by hour, and obtain the sum of the values.
    
    ```
    *| SELECT sum(__value__),date_trunc('hour', __time_nano__/1000000) as t
    FROM "my_metric_store.prom" 
    WHERE __name__='http_request_count' and element_at(__labels__, 'domain')='www.example.com'
    GROUP BY t
    ORDER BY t DESC
    ```
    

The following list describes the SQL syntax:

-   The SQL syntax for metric data is the same as the SQL syntax for log data. For more information, see [Analysis syntax](/help/en/sls/log-analysis-overview#concept-nyf-cjq-zdb). When you query and analyze metric data by using the SQL syntax, the table name in a FROM clause must be in the {metrics\_store\_name}.prom format. _{metrics\_store\_name}_ specifies the name of the Metricstore that you create.
    
    **Note**
    
    You must enclose a table name in double quotation marks ("").
    
-   You can use the element\_at() function to obtain the value of a key from the \_\_labels\_\_ field. Example: element\_at(\_\_labels\_\_, 'key').
    
-   For more information about table schemas, see [Encoding format](/help/en/sls/metric#section-s08-djk-ea8).
    

## Combination of SQL and PromQL

Simple Log Service provides seven PromQL functions. Among the functions, the promql\_query, promql\_labels, promql\_label\_values, and promql\_series functions can be invoked only on the custom query and analysis page of a Metricstore. The following table describes the functions.

**Important**

-   If you use the combination of SQL and PromQL, the table name in a FROM clause must be metrics.
    
-   For more information about the API endpoints and descriptions of PromQL functions, see [Prometheus documentation](https://prometheus.io/docs/prometheus/latest/querying/api/).
    

**Function**

**Description**

**Example**

promql\_query(string)

Evaluates an instant query. You can call this function to query the closest data to the end time of a specific time range, specified by the EndTime parameter. This function is equivalent to the [/query API](https://prometheus.io/docs/prometheus/latest/querying/api/#instant-queries) of Prometheus. Parameter setting: query=<string>.

\*| SELECT promql\_query('up') FROM metrics

promql\_query\_range(string, string)

Evaluates a query on data within a time range, specified by the StartTime and EndTime parameters. This function is equivalent to the [/query\_range API](https://prometheus.io/docs/prometheus/latest/querying/api/#range-queries) of Prometheus. Parameter settings: query=<string> and step=<duration>.

\*| SELECT promql\_query\_range('up', '5m') FROM metrics

promql\_labels()

Returns all label keys.

By default, this function returns only the data within the following time range: \[<EndTime> - 5min, <EndTime>\].

\*| SELECT promql\_labels() FROM metrics

promql\_labels(string)

Supports the [match\[\]](https://prometheus.io/docs/prometheus/latest/querying/api/#getting-label-names) parameter. This parameter is used to return the label keys that correspond to [<series\_selector>](https://prometheus.io/docs/prometheus/latest/querying/basics/#time-series-selectors).

This function supports only one value for the match\[\] parameter. Example: promql\_labels('up').

By default, this function returns only the data within the following time range: \[<EndTime> - 5min, <EndTime>\].

\*| SELECT promql\_labels('up') FROM metrics

promql\_label\_values(string)

Returns the values of a label.

By default, this function returns only the data within the following time range: \[<EndTime> - 5min, <EndTime>\].

\*| SELECT promql\_label\_values('\_\_name\_\_') FROM metrics

promql\_label\_values(string, string)

Supports the [match\[\]](https://prometheus.io/docs/prometheus/latest/querying/api/#getting-label-names) parameter. This parameter is used to return the values for a specific label that corresponds to [<series\_selector>](https://prometheus.io/docs/prometheus/latest/querying/basics/#time-series-selectors).

This function supports only one value for the match\[\] parameter. You must configure the match\[\] parameter before the Label parameter. Example: promql\_label\_values('up', '\_\_label\_name\_\_') .

By default, this function returns only the data within the following time range: \[<EndTime> - 5min, <EndTime>\].

\*| SELECT promql\_label\_values('up', '\_\_label\_name\_\_') FROM metrics

promql\_series(string)

Returns the matched time series.

By default, this function returns only the data within the following time range: \[<EndTime> - 5min, <EndTime>\].

\*| SELECT promql\_series('up') FROM metrics

A PromQL function is similar to a user-defined table-valued function (UDTF) and returns a table.

-   The following table describes the schema of a table that is returned by the promql\_query(string) or promql\_query\_range(string, string) function.
    
    **Field**
    
    **Type**
    
    **Description**
    
    metric
    
    varchar
    
    The metric name of the time series. If a GROUP BY clause is included in the query statement, this field may be empty.
    
    labels
    
    map<varchar, varchar>
    
    The labels. The value is a map.
    
    time
    
    bigint
    
    The time.
    
    value
    
    double
    
    The value at a specific point in time.
    
    Query examples:
    
    -   promql\_query(string) function![query](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5465196861/p676747.png)
        
    -   promql\_query\_range(string, string) function![promql_query_range](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6465196861/p676750.png)
        
    
-   The following table describes the schema of a table that is returned by the promql\_labels(), promql\_labels(string), promql\_label\_values(string), or promql\_label\_values(string, string) function.
    
    **Field**
    
    **Type**
    
    **Description**
    
    label
    
    varchar
    
    The label keys.
    
    Query examples:
    
    -   promql\_labels() function![labels](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5465196861/p676752.png)
        
    -   promql\_labels(string) function![labels_match](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5465196861/p676754.png)
        
    -   promql\_label\_values(string) function![labelValues](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6465196861/p676756.png)
        
    -   promql\_label\_values(string, string) function![label_values_match](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5465196861/p676759.png)
        
    
-   The following table describes the schema of a table that is returned by the promql\_series(string) function.
    
    **Field**
    
    **Type**
    
    **Description**
    
    series
    
    map<varchar, varchar>
    
    The time series.
    
    Query example:![series](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5465196861/p676764.png)
    

## Limits

-   A Metricstore supports only the query API endpoints of Prometheus, such as /query and /query\_range. Other API endpoints, such as /admin, /alerts, and /rules, are not supported.
    
-   If you use the PromQL syntax or the combination of SQL and PromQL for query and analysis, the values at up to 11,000 points in time can be returned.
