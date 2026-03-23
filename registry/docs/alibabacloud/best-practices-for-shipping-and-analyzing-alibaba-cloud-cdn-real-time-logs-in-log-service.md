This topic describes how to use the real-time log delivery feature to ship Alibaba Cloud CDN real-time logs to Simple Log Service (SLS) for analysis.

## Overview

The real-time log delivery feature is a log data processing service that is jointly developed by Alibaba Cloud CDN and SLS. Featuring low-latency (typically within 3 minutes) shipping, you can use this feature to push access logs from points of presence (POPs) all over the world to [SLS](https://www.alibabacloud.com/help/sls/). You can then use SLS to store and analyze user access data. Requests that flow through Alibaba Cloud CDN are logged, and a trove of data is provided for analysis. You can analyze these logs to gain insights into user composition and access speed, as well as to locate and troubleshoot content delivery issues.

## Prerequisites

-   Alibaba Cloud CDN is activated and a domain name is added for acceleration. For more information, see [Activate Alibaba Cloud CDN](/help/en/cdn/activate-alibaba-cloud-cdn#task-187531).
    
-   SLS is activated. For more information, see [Getting Started](/help/en/sls/getting-started#concept-gpw-x2w-ydb).
    
-   Real-time log delivery is configured for the accelerated domain name for which you want to analyze user access data. For more information, see [Real-time log delivery](/help/en/cdn/user-guide/configure-real-time-log-delivery#task-187634).
    

## Differences between real-time log shipping and the offline log feature

-   Log latency
    
    The real-time log delivery feature collects log data in real time, and logs are generated within 3 minutes after an event occurs. Offline log data is generated within 24 hours.
    
-   Log analysis
    
    The real-time log delivery feature integrates the log storage and log analysis capabilities of SLS. The feature provides four preset analysis report templates: basic data, error analysis, frequently requested resources, and user analysis. The feature also supports custom log analysis policies. In comparison, the offline log feature only lets you ship logs to Object Storage Service (OSS), and does not integrate log analysis capabilities.
    

## Benefits

-   Low latency
    
    Log data is generated within 3 minutes after an event occurs. This lets you analyze access logs, identify issues, and resolve them right away.
    
-   End-to-end
    
    With most traditional offline log analysis solutions, before analyzing data, you first need to download logs, upload them to a data warehouse, then clean the data, and define the data model. This increases labor costs and the time needed for analysis. The real-time log delivery feature integrates log storage and log analysis capabilities of SLS to streamline offline log analysis.
    

## Scenarios

You can use real-time log delivery to troubleshoot issues that may occur when you use Alibaba Cloud CDN to accelerate the delivery of your content. You can also use the collected log data to analyze user access statistics. The real-time log delivery feature of Alibaba Cloud CDN provides preset log analysis reports and supports custom log analysis policies to meet diverse requirements.

### Preset log analysis reports

**Log analysis report**

**Description**

Basic data

This report provides information about the overall performance of Alibaba Cloud CDN and the user access efficiency, such as hit ratio, access latency, and download speed. It also lets you quickly identify and handle service quality issues.

Access errors

This report helps you quickly locate issues when application access exceptions occur, such as URI issues, origin server failures, unavailable POPs, regional network issues, and Internet service provider (ISP) network issues.

Frequently requested resources

This report provides information about frequently requested resources and helps you gain insight into popular domain names and URIs, tells you where your customers are concentrated, along with their ISPs. The data is also useful in helping you better understand your business, such as whether operational activities attract the expected traffic volume, and whether the traffic during peak hours is higher or lower than expected. This helps you make adjustments to the overall operations of your business.

User composition

This report provides information about the user composition of your website, including the client or device, general location, and ISPs of your users. You can see which users made the most visits or downloads.

On the Real-time Logs page, find the project for which you want to analyze logs, and click **View Report**.

![CDN投递SLS适用场景](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3894791861/p466250.png)

On the data query template page, the data of all domain names is queried by default. You can also query the data of a specified domain name or URI.

![CDN投递SLS适用场景2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3894791861/p466251.png)

For more information, see the following sections:

-   [Preset report: Basic data](#section-9be-ks4-rvv)
    
-   [Preset report: Access errors](#section-lxz-2uj-h76)
    
-   [Preset report: Frequently requested resources](#section-dkx-re9-ukg)
    
-   [Preset report: User composition](#section-ag0-yva-wd4)
    
-   [Subscribe to report template data](#section-cl3-b77-q0a)
    

### Custom log analysis

If the preset log analysis reports are unable to satisfy your requirements, you can use the log analysis feature of SLS to implement custom log analysis.

For example, you can view the ranking of domain names in requests whose HTTP status code is 499 or 502.

On the Real-time Logs page, find the project for which you want to analyze logs, and click **Log analysis**.

![自定义日志分析](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3894791861/p466280.png)

On the custom log analysis page, you can enter a query statement in the search box to query log data by using complex query conditions, or click log fields on the **Raw Logs** tab to filter logs by using simple filter conditions.

![自定义日志分析2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8362667861/p466285.png)

For more information, see [Custom reports](#section-16f-rl6-swc).

## Create a real-time log delivery project

You can create a Log Service project to store real-time logs of an accelerated domain name, such as aliyun.example.com. For more information, see [Real-time log delivery](/help/en/cdn/user-guide/configure-real-time-log-delivery#task-187634).

The following figure shows a created project, where the project name is project-example, the Logstore name is project-example, and the log storage region is China (Hangzhou) whose ID is cn-hangzhou.

![创建实时日志推送project](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8362667861/p466297.png)

## Preset report: Basic data

This report provides information about the overall performance of Alibaba Cloud CDN and the user access efficiency, such as hit ratio, access latency, and download speed. It also lets you quickly identify and handle service quality issues.

This report includes the following data. You can view all data, or filter data by domain name or URI.

-   Health: the proportion of requests with a normal HTTP status code
    
-   Cache hit ratio: the average cache hit ratio by the number of bytes
    
-   Download speed: the average download speed of resources
    
-   Access status: the percentages of HTTP status codes, including abnormal HTTP status codes
    
-   Access latency distribution: the proportion of each latency segment
    
-   Bandwidth: bandwidth data that is collected every minute
    
-   PV/UV: page views and unique visitors
    
-   Request hit ratio: the hit ratio by the number of requests
    
-   Access latency: the average latency for resource download
    

![CDN基础数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8362667861/p466303.png)![CDN基础数据2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8362667861/p466307.png)

## Preset report: Access errors

This report helps you quickly locate issues when application access exceptions occur, such as URI issues, origin server failures, unavailable POPs, regional network issues, and ISP network issues.

This report includes the following data. You can view all data, or filter data by domain name or URI.

-   Top 10 error domain names: the top 10 domain names with most access errors
    
-   Top 10 error URIs: the top 10 URIs with most access errors
    
-   Request error percentage: the percentage of HTTP 4xx or 5xx status code by time
    
-   Error request distribution: the number and proportion of each HTTP status code
    
-   Errors by ISP: the number of HTTP 4xx and 5xx status codes by ISP
    
-   Errors by province: the number of HTTP 4xx and 5xx status codes by province
    
-   Error details (4xx): the number and proportion of HTTP 4xx status codes by province and ISP
    
-   Error details (5xx): the number and proportion of HTTP 5xx status codes by province and ISP
    
-   Error distribution by client: the number and proportion of HTTP 4xx or 5xx status codes corresponding to User-Agent information about each client
    

![CDN访问错误1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8362667861/p466320.png)![CDN访问错误3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8362667861/p466324.png)

## Preset report: Frequently requested resources

This report provides information about frequently requested resources and helps you gain insight into popular domain names and URIs, tells you where your customers are concentrated, along with their ISPs. The data is also useful in helping you gain a better understanding of your business, such as whether operational activities attract the expected traffic volume, and whether the traffic during peak hours is higher or lower than expected. The information can help you make adjustments to the overall operations of your business.

This report includes the following data. You can view all data, or filter data by domain name or URI.

-   Top domain names by visit: the top domain names by the proportion of total visits
    
-   Top domain names by download traffic: the top domain names by the percentage of total download traffic
    
-   Frequently requested URIs: the numbers of visits, unique visitors, and downloads for each URI
    
-   Popular access sources: popular Referer source domain names, the numbers of visits and unique visitors, and percentage
    
-   Visits across the Chinese mainland: the average number of visits by province
    
-   Download speed across the Chinese mainland: the average download speed by province
    
-   Statistics by province: the total number of visits, total download traffic, and average download speed by province
    
-   Traffic and download speed by ISP: the total download traffic and average download speed by ISP
    
-   Statistics by ISP: the total number of visits, total download traffic, and average download speed for each ISP
    

![CDN热门资源1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8362667861/p466337.png)![CDN热门资源2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8362667861/p466339.png)

## Preset report: User composition

This report provides information about the user composition of your website, including the client or device, general location, and ISPs of the users. You can analyze top users with most visits or most downloads.

This report includes the following data. You can view all data, or filter data by domain name or URI.

-   PV: page views
    
-   UV: unique visitors
    
-   Source region distribution: the number and proportion of visits for each province
    
-   Visits by client: the number and proportion of visits by client type
    
-   Visits by ISP: the number and proportion of visits by ISP
    
-   Top users with most downloads: the total number of visits, number of error visits, and total downloads by IP address
    
-   Top users with most valid visits: the total number of visits, number of error visits, and downloads by IP address, excluding invalid visits with HTTP status codes such as 4xx and 5xx
    

## Subscribe to report template data

If you want Log Service to periodically send data from a report template to you, you can use the subscription feature.

### Procedure

1.  Basic data is used as an example. Click **Subscribe** in the upper-right corner of the page, and then click **Create**.![订阅报表模板数据1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8362667861/p466353.png)
    
2.  In the dialog box that appears, configure **Subscription Name**, **Frequency**, and **Global Time**, and then click **Next**.![订阅报表模板数据2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9454908861/p466354.png)
    
3.  Select a notification method from the **Notification** drop-down list, specify relevant information, and then click **Submit**.
    
    The notification methods include Email, WebHook-DingTalk Bot, WebHook-Feishu Chat Bot, Webhook-WeCom Bot, and WeChat.
    
    ![订阅报表模板数据3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9454908861/p466355.png)
    

## Custom reports

-   Example 1: View the ranking of domain names with most HTTP 499 status codes in the last 30 days.
    
    Log analysis statement: `return_code = 499| select domain , count(*) as c group by domain order by c desc limit 10`
    
    ![示例1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8362667861/p466357.png)
    
-   Example 2: View the ranking of domain names with most HTTP 502 status codes in the last 30 days.
    
    Log analysis statement: `return_code = 502| select domain , count(*) as c group by domain order by c desc limit 10`
    
    ![示例2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8362667861/p466358.png)
    
-   Example 3: View the log data where URI is /cpu in the last 30 days.
    
    You can directly click the uri field on the **Raw Logs** tab on the left and click **/cpu** to filter the required logs.
    
    ![示例3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8362667861/p466359.png)
