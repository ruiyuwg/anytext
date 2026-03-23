Simple Log Service (SLS) and Server Load Balancer (SLB) jointly launch the CloudLens for ALB application. Use the application to analyze the Layer 7 access logs of Application Load Balancer (ALB), analyze the metrics that are aggregated at one-second intervals, and generate alerts in real time. The application also provides AIOps-based automated anomaly detection. The application allows you to analyze the behavior, geographical distribution, request success rates, and response latency of clients. This topic describes the features, assets, billing, and limits of the CloudLens for ALB application.

## Features

The CloudLens for ALB application automatically aggregates real-time access logs and provides features such as intelligent inspection and real-time alerting.

-   The application allows you to manage all ALB instances within your Alibaba Cloud account in a centralized manner.
    
-   The application allows you to enable the data collection feature for the access logs of ALB instances with a few clicks and manage the collection status of the instances in a centralized manner.
    
-   The application allows you to store, query, and analyze ALB access logs in real time.
    
-   The application extracts various metrics in real time based on raw access logs. The metrics include page views (PVs), request success rates, average latency, P50 latency, P99 latency, and inbound and outbound traffic. The application can extract metrics from one or more of the following dimensions: app\_lb\_id, host, and status.
    
-   The application provides various reports, including Monitoring Center, Real-time Monitoring, and Instance Inspection. You can subscribe to the reports by using emails or the webhooks of DingTalk groups.
    
-   The application provides the intelligent inspection feature and supports global inspection and app\_lb\_id-based inspection. You can label anomalies in reports.
    
-   The application supports custom alert settings and can send alert notifications by using the following methods: Message Center, text messages, emails, voice calls, DingTalk, and custom webhooks.
    

![功能说明](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3551957561/p161893.png)

## Benefits

-   Easy-to-use: You can enable the application with a few clicks and use centralized storage for the application. You do not need to focus on the collection, storage, computing, or visualization of logs. This allows developers and O&M personnel to focus on business development and technical research without the need to worry about tedious and time-consuming log processing.
    
-   Capable of processing large amounts of data: The number of ALB access logs increases with the number of PVs for ALB instances. As a result, a large number of access logs are accumulated. When you process the large number of access logs, you must balance performance and costs. You can use the application to achieve the balance.
    
-   Real-time: Real-time data is required in scenarios such as DevOps, monitoring, and alerting. The application integrates Alibaba Cloud SLB with the big data computing capabilities of SLS. This allows the application to analyze and process real-time logs in seconds.
    
    **Important**
    
    In 99.9% cases, logs can be queried within 3 minutes after the logs are generated.
    
-   Flexible: You can enable or disable the data collection feature for each of your ALB instances. You can also specify a custom retention period for logs. The storage capacity of a logstore can be dynamically scaled to meet service requirements.
    
-   Intelligent: The application automatically inspects ALB metrics to identify and locate errors in an efficient and accurate manner. The inspection is based on the AIOps algorithms that are developed by Alibaba DAMO Academy.
    

## Assets

View the assets of the CloudLens for ALB application in the project that you specify when you enable the data collection feature. The following assets are included:

-   Logstore
    
    -   A logstore that is used to store the Layer 7 access logs of ALB instances. You can create the logstore.
        
    -   A logstore that is used to store inspection results. After you enable the data collection feature, SLS automatically generates a dedicated logstore named _The name of the logstore for access logs_\-metrics-result.
        
    
    **Important**
    
    -   Do not delete the logstore that is used to store the Layer 7 access logs of ALB instances. If you delete the logstore, access logs cannot be collected or sent to SLS.
        
    -   Do not delete the indexes of specific fields in the logstore that is used to store access logs. If you delete the indexes, metric conversion fails.
        
    
-   Metricstore
    
    A Metricstore that is used to store aggregated data about the collected metrics. After you enable the data collection feature, SLS automatically generates a dedicated Metricstore named _The name of the logstore for access logs_\-metrics.
    
    **Note**
    
    The Metricstore stores aggregated data about the collected metrics. The data volume significantly reduces after aggregation, and you can store the aggregated data for a long period of time.
    
-   Aggregation rules
    
    **Rule name**
    
    **Time granularity**
    
    **Dimension**
    
    **New metric**
    
    total
    
    10 seconds
    
    total
    
    -   pv
        
    -   body\_bytes\_sent\_avg
        
    -   body\_bytes\_sent\_sum
        
    -   request\_length\_avg
        
    -   request\_length\_sum
        
    -   upstream\_response\_time\_avg
        
    -   upstream\_response\_time\_p50
        
    -   upstream\_response\_time\_p90
        
    -   upstream\_response\_time\_p99
        
    -   request\_time\_avg
        
    -   request\_time\_p50
        
    -   request\_time\_p90
        
    -   request\_time\_p99
        
    
    app\_lb\_id
    
    10 seconds
    
    app\_lb\_id
    
    -   pv:app\_lb\_id
        
    -   body\_bytes\_sent\_avg:app\_lb\_id
        
    -   body\_bytes\_sent\_sum:app\_lb\_id
        
    -   request\_length\_avg:app\_lb\_id
        
    -   request\_length\_sum:app\_lb\_id
        
    -   upstream\_response\_time\_avg:app\_lb\_id
        
    -   upstream\_response\_time\_p50:app\_lb\_id
        
    -   upstream\_response\_time\_p90:app\_lb\_id
        
    -   upstream\_response\_time\_p99:app\_lb\_id
        
    -   request\_time\_avg:app\_lb\_id
        
    -   request\_time\_p50:app\_lb\_id
        
    -   request\_time\_p90:app\_lb\_id
        
    -   request\_time\_p99:app\_lb\_id
        
    
    app\_lb\_id\_host\_status
    
    10 seconds
    
    app\_lb\_id+host+status
    
    -   pv:app\_lb\_id:host:status
        
    -   body\_bytes\_sent\_avg:app\_lb\_id:host:status
        
    -   body\_bytes\_sent\_sum:app\_lb\_id:host:status
        
    -   request\_length\_avg:app\_lb\_id:host:status
        
    -   request\_length\_sum:app\_lb\_id:host:status
        
    -   upstream\_response\_time\_avg:app\_lb\_id:host:status
        
    -   upstream\_response\_time\_p50:app\_lb\_id:host:status
        
    -   upstream\_response\_time\_p90:app\_lb\_id:host:status
        
    -   upstream\_response\_time\_p99:app\_lb\_id:host:status
        
    -   request\_time\_avg:app\_lb\_id:host:status
        
    -   request\_time\_p50:app\_lb\_id:host:status
        
    -   request\_time\_p90:app\_lb\_id:host:status
        
    -   request\_time\_p99:app\_lb\_id:host:status
        
    
-   Inspection rules
    
    **Rule name**
    
    **Algorithm**
    
    **Metric**
    
    alb-patrol-total
    
    Time2Graph
    
    -   pv
        
    -   body\_bytes\_sent\_avg
        
    -   body\_bytes\_sent\_sum
        
    -   request\_length\_avg
        
    -   request\_length\_sum
        
    -   upstream\_response\_time\_avg
        
    -   upstream\_response\_time\_p50
        
    -   upstream\_response\_time\_p90
        
    -   upstream\_response\_time\_p99
        
    -   request\_time\_avg
        
    -   request\_time\_p50
        
    -   request\_time\_p90
        
    -   request\_time\_p99
        
    
    alb-patrol-alb
    
    Time2Graph
    
    -   pv:alb
        
    -   body\_bytes\_sent\_avg:alb
        
    -   body\_bytes\_sent\_sum:alb
        
    -   request\_length\_avg:alb
        
    -   request\_length\_sum:alb
        
    -   upstream\_response\_time\_avg:alb
        
    -   upstream\_response\_time\_p50:alb
        
    -   upstream\_response\_time\_p90:alb
        
    -   upstream\_response\_time\_p99:alb
        
    -   request\_time\_avg:alb
        
    -   request\_time\_p50:alb
        
    -   request\_time\_p90:alb
        
    -   request\_time\_p99:alb
        
    
-   Dedicated dashboards
    
    **Dashboard**
    
    **Associated logstore or Metricstore**
    
    **Description**
    
    Monitoring Overview
    
    _The name of the logstore for access logs_\-metrics
    
    Displays the overall information about the metrics of an ALB instance. The metrics include Core Indicators, Error Code, Traffic, Exception Event, PVs, Access Success Rate, and Avg Latency.
    
    Monitoring Center
    
    -   _The name of the logstore for access logs_\-metrics
        
    -   _The name of the logstore for access logs_
        
    
    Displays the real-time monitoring data of an ALB instance. The data includes PVs, Request Success Rate, Average Latency, Requests with Status Code 4xx, Status Distribution, Traffic, P50 Latency, P90 Latency, P99 Latency, Hosts with Most Requests, Hosts with Highest Latency, Hosts with Highest Failure Rate, URLs with Most Requests, URLs with Highest Latency, URLs with Highest Failure Rate, Backends with Most Requests, Backends with Highest Latency, and Backends with Highest Failure Rate.
    
    Real-time Monitoring
    
    _The name of the logstore for access logs_
    
    Displays the metrics that are aggregated at one-second intervals. Use the metrics to identify exceptions that are related to transient jitters. The metrics include QPS, Access Latency, Upstream Latency, Success Rate, Request Traffic, Response Body Traffic, Status Code 2xx, Status Code 3xx, Error Codes, Upstream Status Code 2xx, Upstream Status Code 3xx, and Upstream Error Codes.
    
    Instance Inspection
    
    -   _The name of the logstore for access logs_\-metrics
        
    -   _The name of the logstore for access logs_\-metrics-result
        
    
    Displays the information about anomalies that are detected by SLS in an ALB instance. The detection is based on the machine learning algorithms that are provided by SLS. The information includes Exceptions, High Exceptions, Exception Distributions, Middle Exceptions, Low Exceptions, Exception Distributions, Exception List, and Exception Events.
    
    Access Overview
    
    _The name of the logstore for access logs_
    
    Displays the status of an ALB instance. The status information includes PVs (Day-on-day), PVs (Week-on-week), UVs (Day-on-day), UVs (Week-on-week), PV Distribution, UV Distribution, PVs Today, PVs of 7 Days, Top 10 States with Most Requests, Percentage of Mobile Users, TOP 10 Hosts with Most Requests, TOP 10 User Agents with Most Requests, and IP Addresses with Most Requests.
    

## Billing

-   You are not charged for the log management feature of SLB.
    
-   After ALB access logs are collected and sent to SLS, you are charged for billable items such as the storage space, read traffic, number of requests, data transformation, and data shipping. The fees are included in your SLS bills. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    

## Limits

-   The SLS project must reside in the same region as the ALB instance that you use.
    
-   CloudLens for ALB is supported in the following regions.
    
    **Cloud type**
    
    **Region**
    
    Alibaba Cloud public cloud
    
    China (Qingdao), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Japan (Tokyo), US (Silicon Valley), US (Virginia), Germany (Frankfurt)
    

## Precautions

**Warning**

To use a CloudLens application, make sure that at least one project exists within your Alibaba Cloud account.

When you enable a CloudLens application, Simple Log Service automatically checks whether a project exists within your Alibaba Cloud account.

### **Check logic**

1.  The first time you enable a CloudLens application, Simple Log Service automatically checks whether a project exists within your Alibaba Cloud account. If no projects exist, Simple Log Service creates a project whose name is in the `aliyun-product-data-<Alibaba Cloud account ID>-cn-heyuan` format in the China (Heyuan) region.
    
2.  After you enable a CloudLens application, Simple Log Service automatically checks whether a project exists within your Alibaba Cloud account. If no projects exist, Simple Log Service does not create a project in the China (Heyuan) region. You can manually create a project. For more information about how to create a project, see [Manage projects](/help/en/sls/manage-a-project/#entry-m7e-hhf-r4z).
    

### **Delete a project**

-   If you want to delete the project whose name is in the `aliyun-product-data-<Alibaba Cloud account ID>-cn-heyuan` format, open [Cloud Shell](https://shell.alibabacloud.com/) and run the following command. Replace the **Alibaba Cloud account ID** based on your business scenario.
    
    ```
    aliyunlog log delete_project --project_name=aliyun-product-data-<Alibaba Cloud account ID>-cn-heyuan --region-endpoint=cn-heyuan.log.aliyuncs.com
    ```
    
-   If you want to delete other projects and logstores, follow the instructions provided in [Manage a logstore](/help/en/sls/manage-a-logstore#section-ezq-vjx-ndb) and [Manage projects](/help/en/sls/manage-a-project/#entry-m7e-hhf-r4z).
