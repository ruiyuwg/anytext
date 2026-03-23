After you add your website to an Anti-DDoS Proxy instance, you can use the log analysis feature to collect and store the logs of your website, and then query and analyze the collected logs. This topic describes how to use the log analysis feature.

## **Usage notes**

Before you use the log analysis feature, you need to know basic information about the feature, how to calculate the required log storage capacity, and log sampling descriptions. For more information, see [Overview](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/overview-of-the-log-analysis-feature).

## Prerequisites

-   An Anti-DDoS Proxy instance is purchased and your website is added to the instance. For more information, see [Add one or more websites](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/add-websites#task-2325689).
    
-   Simple Log Service is activated. If this is the first time you log on to the [Simple Log Service](https://sls.console.alibabacloud.com/lognext/profile) console, you must activate Simple Log Service as prompted.
    

## Step 1: Enable the log analysis feature

1.  Log on to the [Anti-DDoS Proxy console](https://yundun.console.alibabacloud.com/?p=ddoscoo#/overview/layer4/cn-hangzhou).
    
2.  In the top navigation bar, select the region of your instance.
    
    -   **Anti-DDoS Proxy (Chinese Mainland)**: Choose the **Chinese Mainland** region.
        
    -   **Anti-DDoS Proxy (Outside Chinese Mainland)**: Choose the **Outside Chinese Mainland** region.
        
3.  In the left-side navigation pane, choose **Investigation** > **Log Analysis**.
    
4.  On the **Log Analysis** page, click **Buy Now**.
    
5.  On the **Log Service** page, configure the parameters, click **Buy Now**, and then complete the payment.
    
    **Parameter**
    
    **Description**
    
    **Edition**
    
    Select the instance type of Anti-DDoS Proxy.
    
    **Log Storage**
    
    Select the capacity to store logs. Unit: TB.
    
    If log storage is large enough and within the validity period, logs are stored from the first day the feature is used. The logs that are generated within the following 180 consecutive days are stored. Logs from day 181 overwrite logs from day 1, which indicates that the logs generated only within the last 180 days are stored.
    
    **Important**
    
    After the log storage is exhausted, new logs cannot be stored.
    
    **Duration**
    
    Select a validity period for the feature.
    
    **Important**
    
    If the log analysis feature expires, new logs cannot be stored.
    

## **Step 2: Authorize Anti-DDoS Proxy to store logs to Simple Log Service**

1.  Go back to the **Log Analysis** page and complete the authorization as prompted.
    
    The system automatically creates the service-linked role **AliyunDDoSCOOLogArchiveRole**. Anti-DDoS Proxy uses this role to access Simple Log Service and store logs in the dedicated Logstore for Anti-DDoS Proxy.
    
2.  Select a region for the dedicated Logstore for an Anti-DDoS Proxy (Outside Chinese Mainland) instance. The logs of the instance are stored in the region that you select.
    
    You can select one of the following regions: Singapore, Indonesia (Jakarta), US (Virginia), China (Hong Kong), UK (London), Germany (Frankfurt), Japan (Tokyo), Malaysia (Kuala Lumpur).
    
    **Important**
    
    -   After you select a region, you cannot directly change the region. To change the region, you can only disable the log analysis feature and re-enable the feature. However, after you disable the feature, the Logstore and all log data is deleted. Proceed with caution.
        
    -   You do not need to select a region for the dedicated Logstore for an Anti-DDoS Proxy (Chinese Mainland) instance. By default, the logs of the instance are stored in the China (Hangzhou) region.
        
    -   After you enable the log analysis feature, Anti-DDoS Proxy creates a Logstore for your instance in the specified region in Simple Log Service. Then, Anti-DDoS Proxy collects and delivers the log data of the instance to the Logstore.
        
    

## Step 3: Enable the log collection feature

On the **Log Analysis** page, enable the log collection feature for the domain name of your website.

-   Enable the log collection feature for a domain name: Select a domain name from the **Select Domain Names** drop-down list and turn on **Status**.
    
-   Enable the log collection feature for multiple domain names at a time: Click **Batch Configure** in the upper-right corner of the page. In the **Batch Configure** panel, select multiple domain names and click **Batch Enable**.
    

After you enable the log collection feature, Simple Log Service automatically creates a dedicated [project](/help/en/sls/project#concept-t3x-hqn-vdb) for Anti-DDoS Proxy. This dedicated project is used to manage the logs of Anti-DDoS Proxy.

You can view the dedicated project on the home page of the [Simple Log Service console](https://sls.console.alibabacloud.com). The name of the dedicated project for Anti-DDoS Pro and Anti-DDoS Premium (Chinese mainland) starts with `ddoscoo-project`. The name of the dedicated project for Anti-DDoS Pro and Anti-DDoS Premium (outside the Chinese mainland) starts with `ddosdip-project`. A dedicated project contains the following resources by default:

-   A dedicated [Logstore](/help/en/sls/logstore#concept-btb-4qn-vdb) to store Anti-DDoS Pro and Anti-DDoS Premium logs. The dedicated Logstore is named `ddoscoo-logstore` for Anti-DDoS Pro and Anti-DDoS Premium (Chinese mainland) and `ddosdip-logstore` for Anti-DDoS Pro and Anti-DDoS Premium (outside the Chinese mainland).
    
-   Two preset log [dashboards](/help/en/sls/overview-of-visualization#concept-tnt-lgj-kgb) that are used to display the Log Analysis results in charts. The dashboards are DDoS Access Center and DDoS Operation Center. The information in the dashboards is the same for both Anti-DDoS Proxy (Chinese Mainland) and Anti-DDoS Proxy (Outside Chinese Mainland).
    

## Step 4: (Optional) Query and analyze logs

1.  On the **Log Analysis** page, select a domain name from the **Select Domain Names** drop-down list.
    
2.  On the **Full Logs** tab, specify a time range for the query.
    
    **Note**
    
    -   Anti-DDoS Proxy logs are retained for 180 days. By default, you can query logs only of the previous 180 days.
        
    -   The query results may contain logs that are generated 1 minute earlier or later than the specified time range.
        
    
3.  Enter a query statement in the search box, and then click **Search & Analyze**.
    
    A search and analysis statement consists of a search statement and an analytic statement, separated by a vertical bar (|). Format: `Search statement|Analytic statement`.
    
    **Statement**
    
    **Optional**
    
    **Description**
    
    The query statement.
    
    Optional
    
    A search statement specifies search conditions, such as a keyword, a numeric value, a numeric value range, an asterisk (\*), or a combination of search conditions.
    
    If you specify a space or an asterisk (\*) as the search statement, no conditions are used for searching, and all logs are returned. For more information, see [Search syntax](/help/en/sls/query-syntax/#concept-tnd-1jq-zdb).
    
    **Note**
    
    For more information about log fields, see [Fields included in full logs](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/fields-included-in-full-logs#concept-vkt-t3h-1gb).
    
    Analytics statement
    
    Optional
    
    An analytic statement is used to aggregate and compute the data in search results or all logs.
    
    If you leave the analytics statement empty, the search results are returned but analysis is not performed. For more information, see [Log analysis overview](/help/en/sls/log-analysis-overview#concept-nyf-cjq-zdb).
    
    **Note**
    
    -   In an analytic statement, you can omit the `from <table_name>` clause from standard SQL syntax, which is `from log`.
        
    -   By default, the first 100 log entries are returned. If you want to adjust this number, you can execute a LIMIT statement. For more information, see [LIMIT clause](/help/en/sls/limit-clause#reference-kfl-2mq-d2b).
        
    
    After a query statement is executed, analysis results are automatically displayed in tables. The analysis results can also be displayed in a variety of charts, such as a line chart, column chart, or pie chart. You can choose a display method as needed. For more information, see [Chart overview](/help/en/sls/chart-overview#concept-q3w-zmq-zdb)
    
    You can also configure alert rules based on the charts in a dashboard to monitor service status in real time. For more information, see [Overview](/help/en/sls/overview-16#concept-ddt-5ht-2fb).
    
    **Common query statements**
    
    -   Queries the number of visits to a domain name.
        
        ```
        * | SELECT COUNT(*) as times, host GROUP by host ORDER by times desc limit 100
        ```
        
    
    -   Queries the type of attacks that are blocked.
        
        ```
        * | select cc_action,cc_phase,count(*) as t group by cc_action,cc_phase order by t desc limit 10
        ```
        
    -   Queries the queries per second (QPS).
        
        ```
        * | select time_series(__time__,'15m','%H:%i','0') as time,count(*)/900 as QPS group by time order by time
        ```
        
    -   Queries the domain names that are attacked.
        
        ```
        * and cc_blocks:1 | select cc_action,cc_phase,count(*) as t group by cc_action,cc_phase order by t desc limit 10
        ```
        
    -   Queries the URLs that are attacked.
        
        ```
        * and cc_blocks:1 | select count(*) as times,host,request_path group by host,request_path order by times
        ```
        
    -   Queries the details of a request.
        
        ```
        * | select date_format(date_trunc('second',__time__),'%H:%i:%s') as time,host,request_uri,request_method,status,upstream_status,querystring limit 10
        ```
        
    -   Queries the details of the 5XX status codes.
        
        ```
        * and status>499 | select host,status,upstream_status,count(*)as t group by host,status,upstream_status order by t desc
        ```
        
    -   Queries the distribution of request latencies.
        
        ```
        * | SELECT count_if(upstream_response_time<20) as "<20",
        count_if(upstream_response_time<50 and upstream_response_time>20) as "<50",
        count_if(upstream_response_time<100 and upstream_response_time>50) as "<100",
        count_if(upstream_response_time<500 and upstream_response_time>100) as "<500",
        count_if(upstream_response_time<1000 and upstream_response_time>500) as "<1000",
        count_if(upstream_response_time>1000) as ">1000"
        ```
        
    

## **Step 5: (Optional) Query log reports**

Simple Log Service provides dashboards for you to analyze data in real time. After you query and analyze logs using query and analysis statements, you can save the charts of analysis results to a dashboard. Simple Log Analysis provides two preset dashboards: **DDoS Access Center** and **DDoS Operation Center**.

1.  On the **Log Analysis** page, select a domain name from the **Select Domain Names** drop-down list.
    
2.  On the **Log Reports** tab, click **Select Time Range** to specify a time range.
    
    **Note**
    
    Each chart on the dashboard is generated based on the statistics within a specific time range. For example, the default time range is 1 hour for a website access chart and 1 week for an access trend chart. After you specify a time range, all charts on the current page are displayed based on the specified time range.
    
3.  View the preset dashboards.
    
    The log reports are displayed in different types of charts. For more information about the types of charts, see [Chart overview](/help/en/sls/chart-overview#concept-q3w-zmq-zdb).
    
    -   **DDoS Access Center**: shows the basic website metrics, access trends, request source distribution, and other statistics such as access domain names and client types. The website metrics include PVs, UVs, inbound traffic, and peak bandwidth.
        
        #### **DDoS Access Center**
        
        **Chart name**
        
        **Type**
        
        **Default time range**
        
        **Description**
        
        **Example**
        
        **PV**
        
        Single value
        
        1 hour (relative)
        
        The total number of requests.
        
        100000
        
        **UV**
        
        Single value
        
        1 hour (relative)
        
        The total number of UVs.
        
        100000
        
        **Traffic In**
        
        Single value
        
        1 hour (relative)
        
        The total volume of inbound traffic of the website. Unit: MB.
        
        300 MB
        
        **Peak network in traffic**
        
        Single value
        
        Today (time frame)
        
        The maximum inbound data transmission rate of the website. Unit: byte/s.
        
        100 Bytes/s
        
        **Peak network out traffic**
        
        Single value
        
        Today (time frame)
        
        The maximum outbound data transmission rate of the website. Unit: byte/s.
        
        100 Bytes/s
        
        **Traffic network trend**
        
        Double line graph
        
        1 week (relative)
        
        The trends of inbound and outbound traffic. Unit: KB/s.
        
        None
        
        **PV/UV trends**
        
        Double line graph
        
        1 week (relative)
        
        The trends of PVs and UVs.
        
        None
        
        **Access status distribution**
        
        Pie chart
        
        1 week (relative)
        
        The distribution of requests with different status codes, such as 400, 304, and 200. Unit: count/minute.
        
        None
        
        **Access source**
        
        World map
        
        1 hour (relative)
        
        The distribution of PVs from different countries.
        
        None
        
        **Traffic in source (world)**
        
        World map
        
        1 hour (relative)
        
        The distribution of inbound traffic from different countries. Unit: MB.
        
        None
        
        **Traffic in source (China)**
        
        China map
        
        1 hour (relative)
        
        The distribution of inbound traffic from different provinces in China. Unit: MB.
        
        None
        
        **Access heatmap**
        
        AMAP
        
        1 hour (relative)
        
        The heat map that shows the geographical locations of visitors.
        
        None
        
        ****Network Ip source Top 101****
        
        Donut chart
        
        1 hour (relative)
        
        The distribution of the inbound traffic from different Internet service providers (ISPs), such as China Telecom, China Unicom, China Mobile, and CERNET. Unit: MB.
        
        None
        
        **Referer**
        
        Table chart
        
        1 hour (relative)
        
        The top 100 most used referer URLs, hosts, and the number of redirections.
        
        None
        
        ****Mobile client distribution****
        
        Donut chart
        
        1 hour (relative)
        
        The distribution of Anti-DDoS Proxy lines.
        
        None
        
        **PC client distribution**
        
        Donut chart
        
        1 hour (relative)
        
        The top 20 most used user agents, such as iPhone, iPad, Internet Explorer, and Google Chrome.
        
        None
        
        **Request content type distribution**
        
        Donut chart
        
        1 hour (relative)
        
        The top 20 most requested content types, such as HTML, form, JSON, and streaming data.
        
        None
        
        **Accessed sites**
        
        Donut chart
        
        1 hour (relative)
        
        The top 20 most visited domain names of the website.
        
        None
        
        **Top clients**
        
        Table chart
        
        1 hour (relative)
        
        Information about the top 100 clients that initiates the most requests. The information includes the IP addresses, PVs, inbound traffic, number of invalid requests, and number of attacks.
        
        None
        
        **URL with slowest response**
        
        Table chart
        
        1 hour (relative)
        
        Information about the top 100 URLs with the longest response time. The information includes the websites, URLs, response time, and the number of accesses.
        
        None
        
    -   **DDoS Operation Center**: shows the overall operations status of the website, including inbound and outbound traffic trends, requests and interception trends, attackers, and visited websites.
        
    
    You can also click **Subscribe** in the upper-right corner of the Log Reports tab to subscribe dashboards and send dashboard data to specific recipients using emails or DingTalk messages. For more information, see [Add a Subscription](/help/en/sls/subscribe-to-a-dashboard#concept-yhp-mmg-vgb).
    

## References

[Common operations on logs of Alibaba Cloud services](/help/en/sls/common-operations-on-logs-of-alibaba-cloud-services#concept-2534704)
