Apply the following methods to accelerate log query and analysis in Simple Log Service.

## Increase the number of shards or enable Dedicated SQL

-   Increase the number of shards to improve data read and write capabilities. However, this method takes effect only for incremental data. Shards are computing resources. The calculation speed increases based on the number of shards. Make sure that the number of data entries scanned per shard does not exceed 50 million. You can split a shard to increase the number of shards. For more information, see [Split a shard](/help/en/sls/manage-shards#section-awx-35f-vdb). For more information about the billing of shards, see [Billing examples of active shards based on billing methods](/help/en/sls/why-am-i-charged-for-active-shards#6634017ef6iya).
    
-   [Dedicated SQL](/help/en/sls/dedicated-sql/) supports higher concurrency for analysis and larger data scans.
    

## Shorten the time range and reduce the data volume

-   A long time range slows down a query operation.
    
    If you want to accelerate the calculation speed, shorten the time range of a query operation.
    
-   A large amount of data slows down a query operation.
    
    Reduce the data volume of a query operation.
    

## Repeat queries

If query results are inaccurate, you can repeatedly query data. Each time you perform a query operation, the underlying acceleration mechanism analyzes existing query results. After you repeatedly query data, the system can return more accurate results.

## Optimize analytic statements

A time-consuming query statement features the following characteristics:

-   The GROUP BY clause is used to group analysis results based on one or more columns of the string type.
    
-   The GROUP BY clause is used to group analysis results based on more than five columns.
    
-   Operations that generate strings are included in the statement.
    

You can use the following methods to optimize analytic statements:

-   Do not include operations that generate strings.
    
    For example, if you use the date\_format function to generate a timestamp in a specified format, the query efficiency is low. Use the date\_trunc or time\_series function to generate a timestamp. Example:
    
    ```
    * | select date_format(from_unixtime(__time__) , '%H_%i') as t, count(1) group by t
    ```
    
-   Do not group analysis results based on one or more columns of the string type.
    
    For example, if you use the GROUP BY clause to group analysis results based on one or more columns of the string type, the workload for hash calculation is heavy. The workload for hash calculation accounts for more than 50% of the overall workload for calculation. Examples:
    
    -   Efficient query statement
        
        ```
        * | select count(1) as pv , from_unixtime(__time__-__time__%3600) as time group by __time__-__time__%3600
        ```
        
    -   Inefficient query statement
        
        ```
        * | select count(1) as pv , date_trunc('hour',__time__) as time group by time
        ```
        
    
    The two query statements are used to calculate the number of logs per hour. In the second statement, the timestamps are converted into strings. Then, the analysis results are grouped based on the strings. For example, 2021-12-12 00:00:00 is a timestamp in the string format. In the first statement, the timestamps on the hour are obtained, the analysis results are grouped based on the timestamps, and then the timestamps are converted into strings.
    
-   If you want to group analysis results based on multiple columns, place a field that has a larger number of values before a field that has a smaller number of values.
    
    For example, if the number of values for a specific field is 13 and the number of values for the uid field is 100 million, we recommend that you place the uid field before the specific field in the GROUP BY clause. Examples:
    
    -   Efficient query statement
        
        ```
        * | select province,uid,count(1) group by uid,province
        ```
        
    -   Inefficient query statement
        
        ```
         * | select province,uid,count(1) group by province,uid
        ```
        
    
-   Use approximate functions.
    
    Approximate functions deliver better performance than exact functions. Approximate functions sacrifice precision for speed. Examples:
    
    -   Efficient query statement
        
        ```
         * |select approx_distinct(ip)
        ```
        
    -   Inefficient query statement
        
        ```
         * | select count(distinct(ip))
        ```
        
    
-   Use multiple distinct aggregate functions in low-cardinality scenarios.
    
    Multiple distinct operations require copying the raw data multiple times, which causes high network overhead. To optimize this, you can enable the `enable_opt_distinct_aggs` session switch. For example:
    
    -   Efficient query and analysis statement
        
        ```
        * | select count(1), count(distinct projectId), count(distinct logstore) from log
        ```
        
    -   Inefficient query and analysis statement
        
        ```
        * | set session enable_opt_distinct_aggs=true; select count(1), count(distinct projectId), count(distinct logstore) from log
        ```
        
    
-   Specify only the columns that you want to query in an analytic statement. Do not query all columns.
    
    In an analytic statement, query only the columns that are required in the calculation. If you want to query all columns, use the search syntax. Examples:
    
    -   Efficient query statement
        
        ```
        * |select a,b c 
        ```
        
    -   Inefficient query statement
        
        ```
        * |select *
        ```
        
    
-   Place the columns that are not used for grouping in an aggregate function.
    
    For example, the values of the userid and username columns must match each other. You need to only specify the userid column in the GROUP BY clause to group data. Examples:
    
    -   Efficient query statement
        
        ```
         * | select userid, arbitrary(username), count(1) group by userid 
        ```
        
    -   Inefficient query statement
        
        ```
        * | select userid, username, count(1) group by userid,username
        ```
        
    
-   Do not use the IN clause.
    
    Do not use the IN clause in an analytic statement. You can use the OR clause in a search statement. Examples:
    
    -   Fast query and analysis statements
        
        ```
        key: a or key: b or key: c | select count(1)
        ```
        
    -   Inefficient query statement
        
        ```
        * | select count(1) where key in ('a','b')
        ```
