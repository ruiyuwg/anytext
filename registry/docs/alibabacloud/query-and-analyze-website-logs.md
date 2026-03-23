This topic describes how to query and analyze website logs in the Simple Log Service console.

## Prerequisites

Website access logs are collected. A Logtail configuration is created. For more information, see [Collect text logs from servers](/help/en/sls/collect-host-logs).

## Step 1: Create indexes

You can query and analyze logs only after you create indexes. Simple Log Service supports full-text indexes and field indexes. For more information, see [Create indexes](/help/en/sls/create-indexes). In this topic, field indexes are created for website access logs.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  In the left-side navigation pane, click **Log Storage**. In the **Logstores** list, click the Logstore that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5148375171/p768903.png)
    
4.  In the upper-right corner of the page, choose **Index Attributes** > **Attributes**. If the indexing feature is not enabled, click **Enable**.
    
5.  Configure field indexes and click **OK**. You can manually add field indexes one by one or click **Automatic Index Generation**. Simple Log Service automatically generates field indexes based on the first log in the preview results of data collection.
    
    **Important**
    
    -   The indexing feature is applicable only to the log data that is written to the current Logstore after you configure indexes. If you want to query historical data, you can use the reindexing feature. For more information, see [Reindex logs for a Logstore](/help/en/sls/reindex-logs-for-a-logstore#task-2424026).
        
    -   If you want to execute the SELECT SQL statement for analysis, you must turn on Enable Analytics for the fields that you want to analyze when you configure indexes.
        
    -   Indexes are automatically configured for some reserved fields in Simple Log Service. For more information, see [Reserved fields](/help/en/sls/reserved-fields#concept-adr-ktr-gfb).
        
    
    ![字段索引](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1133466161/p210834.png)
    

## Step 2: Query and analyze logs

For more information about how to query and analyze logs in the console, see [Query and analyze logs](/help/en/sls/quick-guide-to-query-and-analysis). You must use an analytic statement together with a search statement in the `Search statement|Analytic statement` format. A search statement can be executed alone. However, an analytic statement must be executed together with a search statement.

**Important**

By default, only 100 rows of data are returned after you execute a query statement. You can use the LIMIT clause to change the number of returned rows. For more information, see [LIMIT clause](/help/en/sls/limit-clause#reference-kfl-2mq-d2b).

### **Search statement**

-   To query the log entries that contain Chrome, execute the following search statement:
    
    ```
    Chrome
    ```
    
-   To query the log entries whose request duration is greater than 60 seconds, execute the following search statement:
    
    ```
    request_time > 60
    ```
    
-   To query the log entries whose request duration ranges from 60 seconds to 120 seconds, execute the following search statement:
    
    ```
    request_time in [60 120]
    ```
    
-   To query the log entries that record successful GET requests (status code: 200 to 299), execute the following search statement:
    
    ```
    request_method : GET and status in [200 299]
    ```
    
-   To query the log entries whose value of the `request_uri` field is `/request/path-2`, execute the following search statement:
    
    ```
    request_uri:/request/path-2/file-2
    ```
    

### **Analysis statement**

-   Calculate the page views (PVs) of a website.
    
    Use the [count function](/help/en/sls/aggregate-function#section-ofd-ty2-ncw) to calculate the PVs of a website.
    
    ```
    * | SELECT count(*) AS PV
    ```
    
    ![访问pv](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1133466161/p224709.png)
    
-   Calculate the PVs of a website by 1 minute.
    
    Use the [date\_trunc function](/help/en/sls/date-and-time-functions-1#section-zpc-jv2-4fb) to truncate a time by minute and use the GROUP BY clause to group analysis results by time. Then, use the [count function](/help/en/sls/aggregate-function#section-ofd-ty2-ncw) to calculate the number of PVs per minute and use the ORDER BY clause to sort the analysis results by time.
    
    ```
    * | SELECT count(*) as PV, date_trunc('minute', __time__) as time GROUP BY time ORDER BY time
    ```
    
    ![网站PV](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1133466161/p224710.png)
    
-   Calculate the number of requests for each request method by 5 minutes.
    
    Use `__time__ - __time__ %300` to truncate a time by 5 minutes and use the GROUP BY clause to group analysis results by time. Then, use the [count function](/help/en/sls/aggregate-function#section-ofd-ty2-ncw) to calculate the number of requests every 5 minutes and use the ORDER BY clause to sort the analysis results by time.
    
    ```
    * | SELECT request_method, count(*) as count, __time__ - __time__ %300 as time GROUP BY time, request_method ORDER BY time
    ```
    
    ![请求次数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2133466161/p224711.png)
    
-   Compare the number of PVs of the current week with the number of PVs of the previous week.
    
    Use the [count function](/help/en/sls/aggregate-function#section-ofd-ty2-ncw) to calculate the total number of PVs. Then, use the [ts\_compare function](/help/en/sls/interval-valued-and-periodicity-valued-comparison-functions#section-hcx-rhd-p2b) to obtain the ratio of the PVs of the current week to the PVs of the last week. In the following query statement, `website_log` is the Logstore name.
    
    ```
    * | SELECT diff[1] as this_week, diff[2] as last_week, time FROM (SELECT ts_compare(pv, 604800) as diff, time FROM (SELECT COUNT(*) as pv, date_trunc('week', __time__) as time FROM website_log GROUP BY time ORDER BY time) GROUP BY time)
    ```
    
    ![环比上周PV](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2133466161/p224805.png)
    
-   Collect the distribution statistics of client IP addresses.
    
    Use the [ip\_to\_province function](/help/en/sls/ip-functions#section-ejv-2jx-gml) to obtain the province to which an IP address belongs, and use the GROUP BY clause to group analysis results by province. Then, use the [count function](/help/en/sls/aggregate-function#section-ofd-ty2-ncw) to calculate the number of occurrences of each IP address, and use the ORDER BY clause to sort the analysis results by the number of occurrences.
    
    ```
    * | SELECT count(*) as count, ip_to_province(client_ip) as address GROUP BY address ORDER BY count DESC
    ```
    
    ![客户端分布](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2133466161/p224714.png)
    
-   Calculate the top 10 accessed request URIs.
    
    Use the GROUP BY clause to group analysis results by request URI. Use the [count function](/help/en/sls/aggregate-function#section-ofd-ty2-ncw) to calculate the number of access requests for each URI. Then, use the ORDER BY clause to sort the analysis results by the number of access requests.
    
    ```
    * | SELECT count(*) as PV, request_uri as PATH GROUP BY PATH ORDER BY PV DESC LIMIT 10
    ```
    
    ![请求路径](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2133466161/p224715.png)
    
-   Query the log entries whose value of the `request_uri` field ends with `%file-7`.
    
    **Important**
    
    In query statements, the wildcard characters asterisk (\*) and question mark (?) are used for fuzzy searches. The wildcard characters must be used in the middle or at the end of a word. If you want to query fields that end with a specific character, you can use the LIKE operator in an analytic statement.
    
    ```
    * | select * from website_log where request_uri like '%file-7'
    ```
    
    `website_log` in the preceding query statement is the Logstore name.
    
    ![模糊查询](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2133466161/p224716.png)
    
-   Calculate the statistics of request URIs that are accessed.
    
    Use the [regexp\_extract function](/help/en/sls/regular-expression-functions-1#section-0wa-zya-8tj) to extract the file part from the `request_uri` field. Then, use the [count function](/help/en/sls/aggregate-function#section-ofd-ty2-ncw) to calculate the number of access requests for each URI.
    
    ```
    * | SELECT regexp_extract(request_uri, '.*\/(file.*)', 1) file, count(*) as count group by file
    ```
    
    ![分析uri](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3355367261/p224727.png)
    
-   Query the log entries whose value of the `request_uri` field contains `%abc%`.
    
    ```
    * | SELECT * where request_uri like '%/%abc/%%' escape '/'
    ```
    
    ![模糊查询](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1432198161/p240990.png)
    

## Sample website access logs

```
__tag__:__client_ip__:192.0.2.0
__tag__:__receive_time__:1609985755
__source__:198.51.100.0
__topic__:website_access_log
body_bytes_sent:4512
client_ip:198.51.100.10
host:example.com
http_host:example.com
http_user_agent:Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_8; ja-jp) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27
http_x_forwarded_for:198.51.100.1
instance_id:i-02
instance_name:instance-01
network_type:vlan
owner_id:%abc%-01
referer:example.com
region:cn-shanghai
remote_addr:203.0.113.0
remote_user:neb
request_length:4103
request_method:POST
request_time:69
request_uri:/request/path-1/file-0
scheme:https
server_protocol:HTTP/2.0
slbid:slb-02
status:200
time_local:07/Jan/2021:02:15:53
upstream_addr:203.0.113.10
upstream_response_time:43
upstream_status:200
user_agent:Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.33 (KHTML, like Gecko) Ubuntu/9.10 Chromium/13.0.752.0 Chrome/13.0.752.0 Safari/534.33
vip_addr:192.0.2.2
vpc_id:3db327b1****82df19818a72
```
