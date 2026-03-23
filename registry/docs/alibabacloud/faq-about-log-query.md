This topic provides answers to some frequently asked questions about log query.

## How do I identify the source machine from which logs are collected when I query logs?

-   If a Logtail configuration is applied to an IP address-based machine group, you can use the internal IP address to identify the source machine. For more information, see [Create an IP address-based machine group](/help/en/sls/create-an-ip-address-based-machine-group).
    
-   Before you execute the statement `__tag__:__hostname__:XXX`, you must create an index for the `__tag__:__hostname__` field and turn on Enable Analytics for the field. For more information about how to create indexes, see [Create indexes](/help/en/sls/create-indexes). For more information about `__tag__` fields, see [Reserved fields](/help/en/sls/reserved-fields). For example, you can use the following statement to query the number of times that different hostnames appear in logs.
    
    ```
    * | select '__tag__:__hostname__' , count(1) as count group by '__tag__:__hostname__'
    ```
    

## How do I query logs by using an IP address?

-   Query logs by using an IP address.
    
    ```
    __tag__:__client_ip__:192.0.2.1
    ```
    
-   Query logs whose IP addresses start with 192.0.2.
    
    ```
    __source__:192.0.2.*
    ```
    
-   Query logs whose IP addresses match `192.168.XX.XX`. You can also use a regular expression to perform fuzzy match. For more information, see [How do I query logs by using fuzzy match?](/help/en/sls/how-do-i-query-logs-by-using-fuzzy-match#section-am6-sxf-dav)
    
    ```
    * | select * from log where key like '192.168.%.%'
    ```
    

## How do I use two conditions to query logs?

If you want to use two conditions to query logs, specify two statements at a time.

For example, if you want to query logs whose status field is neither `OK` nor `Unknown` in a Logstore, you can use `not OK not Unknown` to obtain the logs that meet the conditions.

## How do I query logs in Simple Log Service?

You can use one of the following methods to query logs in Simple Log Service:

-   Use the Simple Log Service console to query logs. For more information about how to query and analyze logs in the Simple Log Service console, see [Query and analyze logs](/help/en/sls/quick-guide-to-query-and-analysis#task-tqc-ddm-gfb).
    
-   Use Simple Log Service SDK to query logs. For more information, see [Overview of Simple Log Service SDK](/help/en/sls/developer-reference/overview-of-log-service-sdk#reference-n3h-2sq-zdb).
    
-   Use RESTful API operations to query logs. For more information, see [GetLogs](/help/en/sls/developer-reference/api-sls-2020-12-30-getlogs).
    

## I can use Simple Log Service SDK to query logs, but a timeout or network error occurs when I use the SDK to perform SQL analysis. What do I do?

A possible reason is that the network firewall of your client intercepts the requests that contain a keyword used in SQL analysis.

We recommend that you change the Simple Log Service endpoint that is used to an endpoint that starts with HTTPS to check whether the error is caused by the network firewall of your client.

## Why are field values truncated when I query and analyze logs?

In Simple Log Service, field length limits and truncation are determined by system rules.

#### **Default rules for field length limits**

-   For query: The maximum length of a field value is 524,288 bytes (512 KB).
    
-   For analysis: A field value has a default maximum length of 2,048 bytes (2 KB), and can be adjusted up to 16,384 bytes (16 KB).
    

If a field value exceeds these limits, it will be automatically truncated, and the excess part is not retained for query or analysis.

#### **Adjust field length limits**

You can adjust the maximum field length for analysis. The adjustment only applies to incremental log data.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/), and click the target project.
    
2.  On the **Log Storage** > **Logstores** tab, click the target logstore.
    
3.  Click **Attributes**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7784364471/p942356.png)
    
4.  On the **Search & Analysis** page, adjust the **Maximum Field Length**, then click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7784364471/p942363.png)
    

## How do I analyze non-indexed fields?

If you want to analyze logs but have not configured indexes or cannot configure indexes for the required fields, you can perform the following operations to resolve the issue:

-   #### **Configure indexes or reindex data**
    
    -   If you want to analyze newly written logs, you can configure indexes for the required fields and turn on Enable Analytics for the fields. For more information, see [Create indexes](/help/en/sls/create-indexes).
        
    -   If you want to analyze historical logs, you must reindex the required fields in the historical logs. For more information, see [Reindex logs for a Logstore](/help/en/sls/reindex-logs-for-a-logstore).
        
-   #### **Enable the scan feature**
    
    If you cannot configure indexes, you can enable the scan feature to analyze logs. For more information, see [Scan-based analysis overview](/help/en/sls/scan-based-analysis-syntax) and [Scan logs](/help/en/sls/scan-logs).
    

## How do I change the number of rows that can be returned by an SQL query?

By default, Simple Log Service appends the `LIMIT 100` clause to a query statement when you execute the query statement. If you want to change the number of rows that can be returned, you can modify the LIMIT clause. For more information, see [LIMIT clause](/help/en/sls/limit-clause).
