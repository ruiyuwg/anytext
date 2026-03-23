Cloud Monitor is an enterprise-level, one-stop monitoring solution. Hologres is integrated with the cloud service monitoring feature of Cloud Monitor. This integration lets you use Cloud Monitor to gain a comprehensive understanding of the resource usage, service status, and health of your Hologres instances. You can receive timely anomaly alerts and respond to them to ensure your applications run smoothly. This topic describes how to use Cloud Monitor to monitor metrics and report alerts for Hologres instances.

## Prerequisites

You have [purchased a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance).

## **Usage recommendations**

[Cloud Monitor](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor) now displays metrics based on the Hologres instance type. Supported types include **Hologres (Read-only Secondary Instance)**, **Hologres (Lakehouse Acceleration)**, **Hologres (General-purpose)**, and **Hologres (Compute Group)**. Each instance type has specific metrics to help you better monitor and address service anomalies. For an improved monitoring experience, you can switch from the general **Hologres** monitoring view to the view for your specific instance type.

## **Cloud Monitor metrics**

For more information about the Hologres instance metrics that Cloud Monitor supports, see [Monitoring metrics in the Hologres console](/help/en/hologres/user-guide/hologres-metrics).

### **View monitoring metrics**

You can log on to the Cloud Monitor console to view the metrics.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com).
    
2.  In the navigation pane on the left, click **Cloud Service Monitoring**.
    
3.  In the **Big Data Computing** area, click the target instance type: \*\*Hologres (Read-only Secondary Instance)\*\*, \*\*Hologres (Lakehouse Acceleration)\*\*, \*\*Hologres (General-purpose)\*\*, or \*\*Hologres (Compute Group)\*\*. This opens the Hologres monitoring dashboard.
    
4.  Click the ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0018211271/p173029.png) icon next to the region and select the destination region.
    
5.  Click the target **Instance ID** or click **Monitoring Chart** in the **Actions** column to view the status of the instance metrics.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0697211271/p795275.png)
    
    **Note**
    
    You can specify a custom time range to view instance metrics. Monitoring data is retained for a maximum of 30 days.
    

## **Best practices**

### **One-click alerting**

Hologres supports the [one-click alerting](/help/en/cms/cloudmonitor-1-0/user-guide/enable-the-initiative-alert-feature) feature in Cloud Monitor. This feature sets default alert rules for all instances. When enabled, it creates alert rules for metrics such as CPU usage, disk usage, memory usage, and the number of connections. These rules apply to all Hologres instances under your Alibaba Cloud account. This helps you quickly detect issues by creating anomaly alerts for several common and important metrics. The default alert rules are as follows:

-   If the average connection usage (Info) is greater than or equal to 95% for three consecutive checks, an alert is sent to the **alert contact of the Alibaba Cloud account**.
    
-   If the average storage usage (Warn) is greater than 90% for three consecutive checks, an alert is sent to the **alert contact of the Alibaba Cloud account**.
    
-   If the average memory usage (Warn) is greater than or equal to 90% for three consecutive checks, an alert is sent to the **alert contact of the Alibaba Cloud account**.
    
-   If the average CPU usage (Info) is greater than or equal to 99% for three consecutive checks, an alert is sent to the **alert contact of the Alibaba Cloud account**.
    

**Note**

By default, the alert check interval is 5 minutes. This interval can be customized.

### **Create alert rules**

In addition to the default one-click alerts, you can set alerts for more monitoring metrics based on your business needs. The steps are as follows:

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Alert Service** > **Alert Rules**.
    
3.  On the **Alert Rules** page, click **Create Alert Rule** and configure the alert information as prompted. For more information, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule).
    

### **Best practices for alert settings**

The recommended alert settings for different Hologres monitoring metrics are as follows:

#### **Instance CPU usage (%)**

This metric indicates whether there is a resource bottleneck in Hologres and whether your resources are fully utilized. Recommended alerts:

-   Alert rules:
    
    -   Critical: "Instance CPU usage is greater than or equal to 99% for 60 consecutive epochs (1 epoch = 1 minute)." This rule effectively monitors the cluster's resource usage. If usage remains high for a long time, you should scale out the cluster.
        
    -   Warning: "Instance CPU usage is greater than or equal to 99% for 10 consecutive epochs (1 epoch = 1 minute)." This rule helps you promptly observe if CPU usage is maxed out due to changes in your services.
        
-   Do not configure an alert to trigger when instance CPU usage reaches 100% just once. A brief spike to 100% CPU usage does not indicate system overload or an anomaly. It represents efficient resource utilization.
    

-   Do not set the CPU alert threshold too low. Even when no tasks are running, system components may be active and consume some resources.
    

#### **Worker node CPU usage (**%**)**

This metric indicates whether there is a resource bottleneck on each worker node in Hologres and whether resources are fully utilized. Recommended alerts:

-   Alert rules
    
    -   Critical: "Worker node CPU usage is greater than or equal to 99% for 60 consecutive epochs (1 epoch = 1 minute)." This rule effectively monitors the resource usage of each worker node. If usage remains high for a long time, you should scale out the cluster.
        
    -   Warning: "Worker node CPU usage is greater than or equal to 99% for 10 consecutive epochs (1 epoch = 1 minute)." This rule helps you promptly observe if CPU usage is maxed out due to changes in your services.
        
-   Do not configure an alert to trigger when worker node CPU usage reaches 100% just once. A brief spike to 100% CPU usage does not indicate system overload or an anomaly. It represents efficient resource utilization.
    
-   Do not set the CPU alert threshold too low. Even when no tasks are running, system components may be active and consume some resources.
    

#### **Instance memory usage (%)**

This metric reflects the memory usage of the instance. Recommended alerts:

-   Alert rules
    
    -   Critical: "Instance memory usage is greater than or equal to 99% for 60 consecutive epochs (1 epoch = 1 minute)." This rule effectively monitors the cluster's memory usage. If usage remains high for a long time, you should scale out the cluster.
        
    -   Warning: "Instance memory usage is greater than or equal to 99% for 10 consecutive epochs (1 epoch = 1 minute)." This rule helps you promptly observe if memory usage is maxed out due to changes in your services.
        
-   Do not set the memory alert threshold too low. Memory is used not only for running queries but also for metadata and caching. A certain amount of memory is consumed even when the instance is idle.
    

#### **Worker node memory usage (%)**

This metric reflects the memory usage of the worker node. Recommended alerts:

-   Alert rules
    
    -   Critical: "Worker node memory usage is greater than or equal to 99% for 60 consecutive epochs (1 epoch = 1 minute)." This rule effectively monitors the cluster's memory usage. If usage remains high for a long time, you should scale out the cluster.
        
    -   Warning: "Worker node memory usage is greater than or equal to 99% for 10 consecutive epochs (1 epoch = 1 minute)." This rule helps you promptly observe if memory usage is maxed out due to changes in your services.
        
-   Do not set the memory alert threshold too low. Memory is used not only for running queries but also for metadata and caching. A certain amount of memory is consumed even when the instance is idle.
    

#### **Connection usage of the FE with the highest connection usage (**%**)**

This metric reflects the maximum connection usage of each FE node. The recommended alert rule is as follows:

Warning: "Connection usage of the FE with the highest connection usage is greater than or equal to 95% for 5 consecutive epochs (1 epoch = 1 minute)." This rule helps you effectively monitor the cluster's connection usage and clear idle connections promptly.

#### **WAL sender usage of the FE with the highest WAL sender usage (%)**

This metric reflects the maximum WAL sender usage of each FE node. The recommended alert rule is as follows:

Warning: "WAL sender usage of the FE with the highest WAL sender usage is greater than or equal to 95% for 5 consecutive epochs (1 epoch = 1 minute)." This rule helps you effectively monitor the cluster's WAL sender usage.

#### **Longest duration of a running query in the instance (milliseconds)**

This metric helps you effectively monitor whether there are any long-running queries in the instance. The recommended alert rule is as follows:

Warning: "The longest duration of a running query in the instance is greater than or equal to 3,600,000 milliseconds for 10 consecutive epochs (1 epoch = 1 minute)."

#### **Longest duration of a running query in Serverless Computing (milliseconds)**

This metric helps you effectively monitor task execution in a serverless cluster. If a task runs for too long, you can cancel it promptly. The recommended alert rule is as follows:

Warning: "The longest duration of a running query in Serverless Computing is greater than or equal to 3,600,000 milliseconds for 10 consecutive epochs (1 epoch = 1 minute)."

#### **Failed query QPS (counts)**

This metric reflects the number of failed queries in the instance. You can set an alert for failed queries to stay informed about query execution status. The recommended alert rule is as follows:

Warning: "The failed query QPS is greater than or equal to 10 counts for 10 consecutive epochs (1 epoch = 1 minute)." If there are many failed queries in your instance, check the slow query logs for failure details and take appropriate action.

#### **FE replay latency (**milliseconds**)**

This metric reflects the replay time of each FE. A long replay time indicates slow replay, which may be caused by a stuck FE. This can cause queries to get stuck and requires immediate attention. Recommended alerts:

-   Alert rule
    
    Warning: "FE replay latency is greater than or equal to 300,000 milliseconds for 10 consecutive epochs (1 epoch = 1 minute)." If an alert is triggered, you can go to Active Queries in HoloWeb to check for long-running queries and try to cancel them.
    
-   Do not set the FE replay latency threshold too low. An FE replay occurs whenever metadata is modified in the instance. Typically, an FE replay time in the range of seconds is normal.
    

#### **Primary-secondary synchronization latency (milliseconds)**

This metric is displayed only for read-only secondary instances and reflects the primary-secondary synchronization latency. The recommended alert rule is as follows:

Warning: "Primary-secondary synchronization latency is greater than or equal to 600,000 milliseconds for 10 consecutive epochs (1 epoch = 1 minute)."

#### **Number of tables with missing statistics in each DB (counts)**

This metric reflects the quality of Auto Analyze. If tables have missing statistics for a long time, you can manually run the ANALYZE command on them. For more information, see [ANALYZE and AUTO ANALYZE](/help/en/hologres/developer-reference/analyze-and-auto-analyze). Recommended alerts:

-   Alert rule
    
    Warning: "The number of tables with missing statistics in each DB is greater than or equal to 10 counts for 60 consecutive epochs (1 epoch = 1 minute)."
    
-   Do not set the threshold too low. Many tables in an instance can also slow down the execution of Auto Analyze.
    

### **Troubleshoot common monitoring issues**

If a monitoring metric fluctuates unexpectedly or an alert is triggered, you can refer to [FAQ about monitoring metrics](/help/en/hologres/support/metric-faq) to troubleshoot and resolve the issue.

## **Access monitoring metrics using APIs**

In addition to the Cloud Monitor console, Cloud Monitor provides other ways to access monitoring metrics, such as custom dashboards and APIs. These methods provide more flexible access to monitoring data.

-   To access Cloud Monitor using APIs, see [Cloud service monitoring](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-dir-cloud-products/).
    
-   To use custom dashboards, see [Manage custom dashboards](/help/en/cms/cloudmonitor-1-0/user-guide/manage-a-custom-dashboard).
    
-   To access Hologres monitoring using [ARMS](/help/en/arms/product-overview/what-is-arms), see [Integration guide](/help/en/arms/getting-started/arms-integration-center).
    

## **Grant a RAM user permissions to view Cloud Monitor data**

By default, a Resource Access Management (RAM) user cannot view metric information in Cloud Monitor. You must grant the RAM user the required permissions.

Use your Alibaba Cloud account to log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/overview) and grant the following permissions to the RAM user. For more information about how to grant permissions, see [Manage RAM user permissions](/help/en/ram/grant-permissions-to-a-ram-user#task-187800).

**Note**

Select permissions as needed.

Permission Name

Description of the permission feature

**AliyunCloudMonitorFullAccess**

Permissions to manage Cloud Monitor.

**AliyunCloudMonitorReadOnlyAccess**

Read-only permissions for Cloud Monitor.

**AliyunCloudMonitorMetricDataReadOnlyAccess**

Permissions to access time series metric data in Cloud Monitor.
