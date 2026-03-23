CloudLens for ALB provides multiple dashboards to display the information about an Application Load Balancer (ALB) instance in different dimensions. The dashboards are Monitoring Overview, Monitoring Center, Real-time Monitoring, Instance Inspection, and Access Overview.

## Prerequisites

An ALB instance is created, and log collection is enabled for the instance. For more information, see [Enable data collection](/help/en/sls/enable-data-collection-1#task-2021473).

## Entry point

1.  Log on to the [Log Service console](https://sls.console.alibabacloud.com).
2.  In the **Log Application** section, click the **Cloud Service Lens** tab. Then, click **CloudLens for ALB**.
    
3.  In the left-side navigation pane, click **Report Center**.
    
4.  In the upper-left corner of the page that appears, select the ALB instance.
    

## Monitoring Overview

The **Monitoring Overview** dashboard displays the overall information about the metrics of an ALB instance. The metrics include Core Indicators, Error Code, Traffic, Exception Event, PVs, Access Success Rate, Traffic, and Avg Latency. ![Monitoring Overview](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4074617561/p400338.png)

## Monitoring Center

The **Monitoring Center** dashboard displays the real-time monitoring data of an ALB instance. The data includes PVs, Request Success Rate, Average Latency, Requests with Status Code 4xx, Status Distribution, Traffic, P50 Latency, P90 Latency, P99 Latency, Hosts with Most Requests, Hosts with Highest Latency, Hosts with Highest Failure Rate, URLs with Most Requests, URLs with Highest Latency, URLs with Highest Failure Rate, Backends with Most Requests, Backends with Highest Latency, and Backends with Highest Failure Rate. ![Monitoring Center](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4074617561/p400636.png)

## Real-time Monitoring

The **Real-time Monitoring** dashboard displays the metrics of an ALB instance that are aggregated at one-second intervals. The metrics include QPS, Access Latency, Upstream Latency, Success Rate, Request Traffic, Response Body Traffic, Status Code 2xx, Status Code 3xx, Error Codes, Upstream Status Code 2xx, Upstream Status Code 3xx, and Upstream Error Codes.

![Real-time Monitoring](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4074617561/p400342.png)

## Instance Inspection

The **Instance Inspection** dashboard displays the information about anomalies that are detected by Simple Log Service in an ALB instance. The detection is based on the machine learning algorithms that are provided by Simple Log Service. The information includes Exceptions, High Exceptions, Exception Distributions, Middle Exceptions, Low Exceptions, Exception Distributions, Exception List, and Exception Events.

![Instance Inspection](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4074617561/p401292.png)

## Access Overview

The **Access Overview** dashboard displays the status of an ALB instance. The status information includes PVs (Day-on-day), PVs (Week-on-week), UVs (Day-on-day), UVs (Week-on-week), PV Distribution, UV Distribution, PVs Today, PVs of 7 Days, Top 10 States with Most Requests, Percentage of Mobile Users, TOP 10 Hosts with Most Requests, TOP 10 User Agents with Most Requests, and IP Addresses with Most Requests. ![Access Overview](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4074617561/p400433.png)
