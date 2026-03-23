The CloudLens for SLS application provides out-of-the-box dashboards that you can use to monitor and analyze the consumption of resources in Simple Log Service.

## Prerequisites

Data collection is enabled for important logs, detailed logs, job operational logs, audit logs, billing logs, error logs, and metrics in a project. For more information, see [Enable the log collection feature](/help/en/sls/enable-the-log-collection-feature-1#task-2206355).

## Entry point

1.  Log on to the [Log Service console](https://sls.console.alibabacloud.com).
2.  In the **Log Application** section, click the **Cloud Service Lens** tab. Then, click **CloudLens for SLS**.
    
3.  In the left-side navigation pane, click Access Monitoring, Collection Monitoring, Operation Monitoring, Job Monitoring, Quota Monitoring, or Billable Resource Monitoring below **Report Center**.
    
4.  In the upper-left corner of the page that appears, select the project whose reports you want to view.
    

## **Overview**

The Overview dashboard displays information about Simple Log Service projects in charts. The charts include Number of requests, Request Success Rate, Requests with Status Code 4xx, Requests with Status Code 5xx, Write traffic (raw size), Write traffic (after compression), Write traffic compression ratio, and Read Traffic.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1058625961/p707546.png)

## Access Traffic Monitoring

The **Access Traffic Monitoring** dashboard displays information about access to Simple Log Service in charts. The charts include Total Requests, Clients, Users, Top 10 SourceIPs with Most Read Traffic, Top 10 SourceIPs with Most Write Traffic, Requests, Write Traffic, Trend of Write Traffic to Shards, Trend of Read Traffic from Shards, Read/Write Traffic/Minute, and Request IP Distribution.

![访问流量监控](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6366625961/p431091.png)

## Access Exception Monitoring

The **Access Exception Monitoring** dashboard displays information about abnormal access to Simple Log Service in charts. The charts include Total Requests, Percentage of Failed Requests, Quota Exceeded, Error Status Distribution, Logstore with Excessive Write Traffic, Error Requests, and Trend of Request Latency.

![访问异常监控](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6366625961/p430749.png)

## Consumer Group Monitoring

The **Consumer Group Monitoring** dashboard displays information about consumer groups in charts. The charts include Consumer Group, Logstore, Shard, Fall Behind, Data, Consumer Group, Top 10 Latency, and Trend of Consumer Group Latency.

![消费组监控](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6366625961/p431092.png)

## Logtail Overall Status

The **Logtail Overall Status** dashboard displays information about Logtail in charts. The charts include Active Logtail, Data Traffic, Status, CPU, Logtail Overall Status, Trend of CPU, Trend of Memory, and Data Sending Traffic.

![Logtail整体状态](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6366625961/p431093.png)

## Logtail File Collection Monitoring

The **Logtail File Collection Monitoring** dashboard displays information about the files from which you want to collect logs in charts. The charts include Logtail File Collection, Machine Collection, Collection File Distribution, Trend of Log Collection, Trend of Average Latency, Trend of Parse Failure, and Trend of Send.

![Logtail文件采集状态](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6366625961/p431094.png)

## Logtail Exception Monitoring

The **Logtail Exception Monitoring** dashboard displays information about Logtail exceptions in charts. The charts include Active Logtail, Restart Logtail List, Restart Clients, and All Alarm.

![Logtail异常监控](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6366625961/p431095.png)

## Operation Monitoring

The **Operation Monitoring** dashboard displays information about Simple Log Service operation records in charts. The charts include Logstore Related Operation Count, Logstore Related Fail Operation, and Clients.

![操作监控 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6366625961/p431096.png)

## Job Monitoring

The **Job Monitoring** dashboard displays information about data import jobs of the new version, data shipping jobs of the new version, and Scheduled SQL jobs in charts. The charts include Ingest Success, Ingest Failed, Deliver Success, Deliver Failed, Ingest PubNet, Deliver PubNet, Process Speed, Process Lags, and Process Error.

![作业监控](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7813112661/p474634.png)

## Quota Monitoring

The **Quota Monitoring** dashboard displays information about quota exceeded events in charts. The charts include Overview of Resource Quota (80%) Warning, QuotaExceed, LogStore Usage Distribution, MachineGroup Usage Distribution, Logtail Config Usage Distribution, Project Write Inflow Usage Distribution, Project Overview of Basic Quota Usage, Project Overview of Write/Read Quota Usage, and Project Quota Exceeded Statistics.

![额度监控](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6366625961/p474725.png)

## **SQL Quality Monitoring**

The **SQL Quality Monitoring** dashboard displays information about the multi-dimensional analysis of user-executed SQL statements in charts. The charts include overview, SQL Metric, SQL Pattern Analysis, and Advices. This helps you monitor and optimize SQL statements and improve the query and analysis efficiency.

The dashboard consists of the following sections:

-   Overview
    
-   SQL Metric
    
-   Running Metric
    
-   SQL Pattern Analysis
    
-   Advices
    

### Overview

This section displays the SQL Health Score, SQL Report, and SQL Overall Performance charts. You can quickly understand the overall status of SQL executions.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5715333171/p763929.png)

### **SQL Health Score**

The heath score is calculated by using the following formula: `(1 - Query failure rate) × 100`.

### SQL Metric

This section displays the PV 1 Hour, Latency\_avg, UserAgent, and Latency charts. You can view the service metrics that are involved when you execute SQL statements.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5715333171/p763930.png)

### Running Metric

This section displays the ApproxConc, Latency, SQL Processed Bytes/min, and SQL Processed Rows/min charts. You can view the core metrics of the internal SQL runtime.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5715333171/p763931.png)

### SQL Pattern Analysis

This section displays top SQL patterns with the most executions and top SQL patterns with the highest resource consumption. You can identify the characteristics of SQL executions. The system extracts templates from executed SQL statements and forms SQL patterns.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5715333171/p763932.png)

### Advices

This section displays suggestions to help you improve SQL executions. The system analyzes SQL statements that have execution errors and provides suggestions based on the analysis results.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5715333171/p763933.png)

## Billable Resource Monitoring

The **Billable Resource Monitoring** dashboard displays information about billable resources of Simple Log Service in charts. The charts include Storage Size(Hot Storage), Storage Size(Cold Storage), Index Size(Log), Read/Write Traffic, Billing Items, Top Project, and Top Logstore.

![计费资源监控](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6366625961/p555682.png)
