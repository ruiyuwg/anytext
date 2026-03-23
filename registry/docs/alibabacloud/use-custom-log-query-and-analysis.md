On the Log Analysis page of the Security Center console, you can perform custom log queries and analysis in multiple complex scenarios. This topic describes the syntax for query and analysis statements.

## Overview

You can choose **Risk Governance** > **Log Analysis** in the left-side navigation pane of the Security Center console and enter SQL statements in **Search & Analyze** to perform custom log queries and analysis. A log query statement consists of two parts: search syntax and analytics syntax, divided by vertical bars (|).

When you perform custom log queries and analysis, the search syntax and analytics syntax are optional. The following list describes the search syntax and analytics syntax:

-   Search: You can use keywords, fuzzy match conditions, numeric values, ranges, or combinations to generate search conditions. If the value of the Search part is an asterisk (\*) or is empty, data from the specified period is not filtered. In this case, all data from the specified period is used for analysis.
    
-   Analytics: It calculates and collects statistics on search results or full data. If the value of the Analytics part is empty, the results of the query are returned but no statistics are calculated.
    

## Search syntax

The search syntax of Simple Log Service supports both full-text query and field query. The query box supports features such as multi-line search and syntax highlighting.

-   **Full-text query**
    
    You can enter keywords to search for logs without the need to specify fields. To use multiple keywords, enclose each keyword within a pair of quotation marks (`"`) and separate multiple keywords with spaces or the operator `and`. Examples:
    
    -   **Query with multiple keywords specified**
        
        Search for the logs that contain `www.aliyundoc.com` and `404`. Examples:
        
        ```
        www.aliyundoc.com 404
        ```
        
        or:
        
        ```
        www.aliyundoc.com and 404
        ```
        
    -   **Conditional query**
        
        Search for the logs that contain `www.aliyundoc.com` and `error`, or the logs that contain www.aliyundoc.com and `404`. Example:
        
        ```
        www.aliyundoc.com and (error or 404)
        ```
        
    -   **Fuzzy search**
        
        Search for the logs that contain `www.aliyundoc.com` and start with `failed_`. Example:
        
        ```
        www.aliyundoc.com and failed_*
        ```
        
        **Note**
        
        A full-text query supports only suffixes with asterisks (`*`). Prefixes with asterisks (`*`) are not supported.
        
-   **Field-specific search**
    
    Data of numeric fields can be filtered by using `Field: Value` or `Field >= Value`. You can combine the two formats by using `and` or `or`. It can also be used with a full-text query by using the combination specified by `and` and `or`.
    
    Simple Log Service supports more accurate queries based on fields.
    
    -   **Multi-field query**
        
        Search for alert logs whose severity level is **serious**. Example:
        
        ```
        __topic__ : sas-security-log and level: serious
        ```
        
        Search for the SSH logons on the client whose IP address is 1.2.XX.XX. Example:
        
        ```
        __topic__:aegis-log-login and ip:1.2.XX.XX and warn_type:SSHLOGIN
        ```
        
        **Note**
        
        Each log contains the `__topic__` field that indicates a log topic. Logs are distinguished by this field. In these examples, the fields, such as `level`, `warn_type`, and `ip`, are the fields for specific types of logs.
        
    -   **Numeric field query**
        
        Search for the internal DNS query logs that have a response time of more than 1 second. Example:
        
        ```
        __topic__:local-dns and time_usecond > 1000000
        ```
        
        Range-based queries are also supported. For example, you can use range-based queries to search for internal DNS logs with a response time that is greater than 1 second but less than or equal to 10 seconds. Example:
        
        ```
        __topic__:local-dns and time_usecond in [1000000,10000000]
        ```
        
    
    For more information about the syntax, see [Log search overview](/help/en/sls/log-search-overview#concept-wjl-x3q-zdb)
    

## Analytics syntax

You can use SQL-92 statements to analyze and collect statistics on logs. For more information about the syntax and functions supported by Simple Log Service, see [Log analysis overview](/help/en/sls/log-analysis-overview#concept-nyf-cjq-zdb).

In an analytics statement, the `from log` part is similar to the `from` <table name> part in a standard SQL statement and can be omitted.

By default, Simple Log Service returns the first 100 log entries. You can modify the number of log entries that you want to return by using the LIMIT syntax. For more information, see [LIMIT clause](/help/en/sls/limit-clause#reference-kfl-2mq-d2b).

## Time-based log queries and analysis

Each log entry has a built-in field `__time__`, which indicates the time at which this log entry is generated. This field facilitates time-based statistical analysis. The value of the field is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC. Therefore, a timestamp must be converted into a supported format before it can be displayed.

-   **Select and display the time**
    
    In this example, query the most recent 10 logon logs with the IP address of `1.2.XX.XX` within a specific time range. The return value includes the time, source IP address, and logon type. Example:
    
    ```
    __topic__: aegis-log-login and ip: 1.2.XX.XX
    | select date_format(__time__, '%Y-%m-%d %H:%i:%s') as time, warn_ip, warn_type 
    order by __time__ desc 
    limit 10
    ```
    
-   **Calculate the time**
    
    Use `__time__` to calculate the number of days after the logon. Example:
    
    ```
    __topic__: aegis-log-login and ip: 1.2.XX.XX
    | select date_format(__time__, '%Y-%m-%d %H:%i:%s') as time, warn_ip, warn_type ,
    round((to_unixtime(now()) - __time__)/86400,1) as "days_passed"
    order by __time__ desc 
    limit 10
    ```
    
    In this example, `round((to_unixtime(now()) - __time__)/86400, 1)` is used to perform the calculation. First, the function uses `to_unixtime` to convert the time returned by `now()` to a UNIX timestamp. Second, it subtracts the built-in `__time__` field from the calculated value to obtain the number of seconds that have elapsed. Then, the function divides the calculated value by 86400, which is the total number of seconds in a day. Finally, the `round(data, 1)` function rounds the obtained value to one decimal place to calculate the number of days that have passed since the generation of each attack log.
    
-   **Group statistics based on a specific time**
    
    If you want to know the logon trends for a device within a specific time range, execute the following SQL statement:
    
    ```
    __topic__: aegis-log-login and ip: 1.2.XX.XX
    | select date_trunc('day', __time__) as dt,
    count(1) as PV
    group by dt
    order by dt
    ```
    
    In this example, the built-in `__time__` field is passed to the `date_trunc('day', ..)` function to align the time by day. Each log entry is grouped into the partition of the day to which it belongs to facilitate the calculation of the total number `(count(1))`. The log entries are sorted by partition time block. You can use other values for the first parameter of the `date_trunc` function to group log entries based on other time units, such as `second`, `minute`, `hour`, `week`, `month`, and `year`. For more information about the function, see [Date and time functions](/help/en/sls/date-and-time-functions-1#LogService-user-guide-0110).
    
-   **Group statistics based on a flexible time**
    
    If you want to know more flexible rules of time grouping, such as logon trends per 5 minutes for devices of your account, execute the following SQL statement:
    
    ```
    __topic__: aegis-log-login
    | select from_unixtime(__time__ - __time__% 300) as dt,
    count(1) as PV
    group by dt
    order by dt
    limit 1000                        
    ```
    
    In this example, the built-in time field is used to calculate `__time__ - __time__% 300` and the `from_unixtime` function is used for formatting. Each log entry is grouped into a 5-minute (300 seconds) partition to facilitate the calculation of the total number `(count(1))`. The log entries are sorted by partition time block to obtain the first 1,000 log entries, which is equivalent to selecting data in the first 83 hours.
    
    For more information about time-related functions, see [Date and time functions](/help/en/sls/date-and-time-functions-1#LogService-user-guide-0110). For example, the `date_parse` and `date_format` functions can convert a time format to another format.
    

## Client IP address-based log queries and analysis

The `warn_ip` field in a logon log entry indicates the source IP address of the logon.

-   Source country distribution of logons
    
    Query the distribution of the source countries from which users log on to a server. Example:
    
    ```
    __topic__: aegis-log-login and uuid: 12344567
    | SELECT ip_to_country(warn_ip) as country,
    count(1) as "Number of logons"
    group by country
    ```
    
    In this example, the `ip_to_country` function is used to retrieve the country that corresponds to `warn_ip`, which specifies the source IP address of the logon.
    
-   Identity distribution of logons
    
    You can use the `ip_to_province` function to retrieve a more detailed distribution of logons based on provinces. Example:
    
    ```
    __topic__: aegis-log-login and uuid: 12344567
    | SELECT ip_to_province(warn_ip) as province,
             count(1) as "Number of logons"
             group by province
    ```
    
    In this example, the `ip_to_province` function is used to retrieve the source province to which an IP address belongs. If the IP address is not from China, the system attempts to convert it to the province or state based on the country location of the IP address. However, if you select the China map, the province or state cannot be displayed.
    
-   Geothermal distribution of logons
    
    You can use the `ip_to_geo` function to retrieve the geothermal distribution of logons:
    
    ```
    __topic__: aegis-log-login and uuid: 12344567
    | SELECT ip_to_geo(warn_ip) as geo,
             count(1) as "Number of logons"
             group by geo
             limit 10000
    ```
    
    In this example, the `ip_to_geo` function is used to retrieve the latitude and longitude of an IP address. LIMIT is set to 10000 to retrieve the first 10,000 log entries.
    
    **Note**
    
    For more information about IP address-based features, see [IP functions](/help/en/sls/ip-functions#concept-wmd-slq-zdb). For example, you can use the `ip_to_provider` function to obtain the provider of IP addresses and the `ip_to_domain` function to determine whether an IP address is public or private.
