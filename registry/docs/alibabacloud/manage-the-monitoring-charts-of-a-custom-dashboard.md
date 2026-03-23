If you use multiple Alibaba Cloud services, you can add monitoring charts for the metrics of these services to a dashboard. Then, you can view the monitoring data of the services on the dashboard.

## Prerequisites

A dashboard is created. For more information, see [Create a custom dashboard](/help/en/cms/cloudmonitor-1-0/user-guide/manage-a-custom-dashboard#section-o9d-zsw-no1).

## Background information

Cloud Monitor provides a default dashboard that displays monitoring data for Elastic Compute Service (ECS) instances. To view the metrics of other Alibaba Cloud services, you can add monitoring charts to the dashboard. You can add a maximum of 20 monitoring charts to a dashboard.

The following table describes the types of monitoring charts that are supported by Cloud Monitor and the limits for each type of monitoring chart.

**Chart type**

**Description**

**Limit**

Line chart

Displays monitoring data in time series. You can add multiple metrics to a line chart.

Each line chart can display a maximum of 10 lines.

Area chart

Displays monitoring data in time series. You can add multiple metrics to an area chart.

Each area chart can display a maximum of 10 areas.

Table

Displays the monitoring data of the latest 3 hours in ascending or descending order. Each table can display a maximum of 1,000 data records. For example, you can use a table to display the CPU utilization of all ECS instances in descending order. You can add only one metric to a table.

Each table can display a maximum of 1,000 data records.

Heat map

Displays the real-time monitoring data of a specific metric. A heat map is used to display the distribution and comparison of real-time monitoring data that is collected for a specific metric of multiple instances. For example, you can use a heat map to display the distribution of the CPU utilization for multiple instances. You can add only one metric to a heat map.

Each heat map can display a maximum of 1,000 color blocks.

Pie chart

Displays the real-time monitoring data of a specific metric. A pie chart is used for data comparison. You can add only one metric to a pie chart.

None.

## Add a monitoring chart

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Visualization** > **Custom Dashboards**.
    
3.  On the **Custom Dashboards** page, click the name of the dashboard to which you want to add monitoring charts.
    
4.  In the upper-left corner of the page that appears, click **Add Chart**.
    
5.  In the **Add Chart** panel, select a chart type, select a cloud service, and then select metrics for the service.
    
    On the **Dashboards** tab, select an Alibaba Cloud service, specify the title of the monitoring chart, and then select a metric. Select the type of value that you want to view for the metric and the resource associated with the metric. You can add multiple metrics as required.
    
    For more information about the metrics for Alibaba Cloud services, see [Cloud service monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/cloud-service-monitoring#task-1930878).
    
6.  Click **OK**.
    

## Modify a monitoring chart

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Visualization** > **Custom Dashboards**.
    
3.  On the **Custom Dashboards** page, click the name of the dashboard whose monitoring charts you want to modify.
    
4.  In the upper-right corner of the monitoring chart that you want to modify, click the ![设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7112489461/p399197.png) icon and then click **Modify**.
    
5.  In the **Add Chart** panel, reselect the chart type, cloud service, and metrics.
    
6.  Click **OK**.
    

## Delete a monitoring chart

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Visualization** > **Custom Dashboards**.
    
3.  On the **Custom Dashboards** page, click the name of the dashboard whose monitoring charts you want to delete.
    
4.  In the upper-right corner of the monitoring chart that you want to delete, click the ![设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7112489461/p399197.png) icon and then click **Delete**.
    
5.  Click **OK**.
    

## View the monitoring charts of a dashboard

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Visualization** > **Custom Dashboards**.
    
3.  On the **Custom Dashboards** page, click the name of the dashboard whose monitoring charts you want to view.
    
4.  Select the time range to display monitoring data on the monitoring charts.
    
    **Note**
    
    You can query only the monitoring data of the latest 30 days.
    
5.  View the monitoring charts.
    
    -   Click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9188441171/p711454.png) icon in the upper-right corner. You can view all the monitoring charts of the dashboard in full-screen mode.
        
    -   Click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9188441171/p711455.png) icon in the upper-right corner. You can refresh all the monitoring charts of the dashboard in real time.
