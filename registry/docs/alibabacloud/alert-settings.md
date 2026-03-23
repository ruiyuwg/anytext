To ensure that you do not miss important notifications, we recommend that you configure alert rules for key monitoring metrics. When the performance metrics such as CPU utilization and memory usage of your Tair (Redis OSS-compatible) instance are abnormal or when a master-replica switchover is triggered for the instance, CloudMonitor promptly sends alerts to you.

## Background information

CloudMonitor is a service that can be used to monitor Alibaba Cloud resources and Internet applications. It offers an all-in-one enterprise-grade monitoring solution that is ready to use out of the box. For more information, see [What is CloudMonitor?](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor#concept-2452587) You can create alert rules and specify metrics based on which alerts are configured. When the alert rules of a specified metric are triggered, alerts are generated and sent to alert contacts in an alert contact group.

**Note**

CloudMonitor sends alerts to alert contacts in alert contact groups. Before you add an alert contact to an alert contact group, you must create the alert contact or alert contact group. For more information, see [Create an alert contact or alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#task-2514452).

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Alert Settings**.
    
3.  On the **Alarm Settings** page, view metrics of the current instance.
    
    You can also click **Alert Settings** in the upper-right corner to go to the CloudMonitor console to add or manage alert rules. Configuration methods:
    
    -   [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule#task-1920117): When the value of a metric exceeds the specified threshold, the system sends an alert. For example, if the CPU utilization of an instance exceeds the threshold of 90%, the system sends an alert. This alerting mechanism enables you to stay informed about the health and performance of your resources and respond to exceptions in a timely manner.
        
        **Note**
        
        When you create an **alert rule**, select the appropriate **service** type from the following options:
        
        -   Tair DRAM-based instances and Redis Open-Source Edition instances: [Redis/Tair DRAM(Standard)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_kvstore/kvstore_standard), [Redis/Tair DRAM(Cluster)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_kvstore/kvstore_sharding?spm=a2c4g.11186623.0.0.121a44c7bU80Kv), and [Redis/Tair DRAM(Read/Write Splitting)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_kvstore/kvstore_splitrw)
            
        -   Tair persistent memory-optimized instances: [Tair Persistent Memory(Standard)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_tair/tair_pena), [Tair Persistent Memory(Cluster)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_tair/tair_pena_cluster), and [Tair Persistent Memory(Read/Write Splitting)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_tair/tair_pena_splitrw)
            
        -   Tair ESSD/SSD-based instances: [Tair ESSD/SSD(Standard)](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_tair/tair_pdb) and [Tair ESSD/SSD Cluster](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_tair/tair_pdb_cluster)
            
        
        In most cases, workloads are sensitive to fluctuations in the CPU utilization, memory usage, and network traffic of instances. We recommend that you specify alert thresholds for key metrics. The following metrics and thresholds are provided for your reference:
        
        -   CPU utilization: greater than 60%.
            
        -   Memory usage: greater than 80%.
            
        -   Inbound bandwidth usage and outbound bandwidth usage: greater than 80%.
            
        
        For more information about the monitoring metrics supported by CloudMonitor, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).
        
    -   [Subscribe to event notifications](/help/en/redis/user-guide/subscribe-to-event-notifications#task-2078077): If an instance fails, performs a master-replica switchover, or runs a proactive O&M task such as instance migration, the system sends an alert. This allows you to resolve issues in a timely manner. Alerts are triggered by events such as InstanceMaintenance (proactive O&M) and instance exceptions.
        
    

## FAQ

### **What does the Blocked Clients metric in the alert settings mean?**

The **Node/Blocked Clients** metric that is provided for creating an alert rule indicates the number of client connections that are in a blocked state due to the execution of blocking commands on an instance. Blocking commands include BRPOP, BLPOP, BZPOPMIN, BZPOPMAX, and XREAD.

## References

-   [View performance monitoring data](/help/en/redis/user-guide/view-monitoring-data)
    
-   [View and manage scheduled events](/help/en/redis/user-guide/query-and-manage-pending-events#task-1963135)
    
-   [High availability](/help/en/redis/user-guide/master-replica-switchovers/#concept-2025502)
