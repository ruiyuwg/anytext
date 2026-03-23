E-MapReduce (EMR) automatically collects metrics of services and synchronizes the metrics to CloudMonitor. This topic describes how to view metrics of services in the EMR console. This topic also describes how to configure metric thresholds for triggering alerts and customize a dashboard in the CloudMonitor console.

## Prerequisites

An EMR cluster is created. For more information, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).

## View metrics in the EMR console

1.  Go to the Metric Monitoring subtab.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
        
    2.  In the top navigation bar, select the region in which your cluster resides and select a resource group based on your business requirements.
        
    3.  On the **EMR on ECS** page, find the desired cluster and click the cluster name in the **Cluster ID/Name** column.
        
    4.  On the page that appears, click the **Monitoring and Diagnostics** tab.
        
    5.  Click the **Metric Monitoring** subtab.
        
2.  On the **Metric Monitoring** subtab, select an item from the **Dashboard** drop-down list.
    
    ![Dashboard](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2487640471/p508783.png)
    
    You can perform the following operations:
    
    -   View the definition of a metric: Move the pointer over the ![search](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3723784761/p508786.png) icon of a metric to view the definition of the metric in the chart.
        
    -   View metrics by node: For some services, you can view their metrics by node.![HDFS](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2487640471/p508785.png)
        
    -   View metrics by time: Select a time window in the Select Time section to view metrics in the specified time window.![time](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3723784761/p508821.png)
        
    -   View required metrics: If multiple metrics are displayed in a chart, you can click your desired metric names in the lower part of the chart to view the metrics.![Multi label](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2487640471/p508824.png)
        
    

## View metrics of EMR services in the CloudMonitor console

-   You can view the metrics that are synchronized to CloudMonitor. In the upper-right corner of the **Metric Monitoring** subtab, click **View More Metrics**. On the page that appears,
    
-   you can view and search for metrics of EMR services in the CloudMonitor console. For more information, see [Create a threshold-triggered alert rule](/help/en/emr/emr-on-ecs/user-guide/create-a-threshold-alarm-rule#task-2067227).
    
-   If the default chart does not meet your requirements, you can customize a dashboard. For more information, see [Manage the monitoring charts of a custom dashboard](/help/en/cms/cloudmonitor-1-0/user-guide/manage-the-monitoring-charts-of-a-custom-dashboard#task-1963801).
    

## Subscribe to metric alerts

-   In the upper-right corner of the **Metric Monitoring** subtab, click **Subscribe to Metric Alerts** to go to the Alert Rules page of the CloudMonitor console. On this page, you can configure alerts based on the metrics that are synchronized from EMR.
    
-   For example, you can configure an alert rule to enable CloudMonitor to send you a message immediately if the storage usage of the Hadoop Distributed File System (HDFS) exceeds 80%. For more information, see [Create a threshold-triggered alert rule](/help/en/emr/emr-on-ecs/user-guide/create-a-threshold-alarm-rule#task-2067227).
