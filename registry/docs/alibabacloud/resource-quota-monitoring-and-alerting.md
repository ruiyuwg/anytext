CloudMonitor provides the quota monitoring and alerting feature. Quota monitoring helps you obtain real-time insights into your resource quota usage based on a comprehensive set of metrics. Quota alerting allows you to configure alert rules for quotas and notifies you when metrics such as CPU utilization, exceed the specified threshold. This topic describes how to view metric data, configure quota alerts, and subscribe to a metric to receive relevant data by using CloudMonitor or Application Real-Time Monitoring Service (ARMS).

## **Prerequisites**

A resource quota is created. For information about how to create a resource quota, see [Overview](/help/en/pai/user-guide/resource-quota-overview).

#### **Metrics**

Quota monitoring provides metrics on the performance of CPU, memory, disk, network, and GPU. Supported dimensions include quota and node dimensions. The following table describes specific key metrics. For information about all supported metrics, visit the [PAI-Quota TimeSeries Metrics](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_pai_quota/quota) page.

**Metric**

**Description**

QUOTA\_CPU\_REQUEST

The number of scheduled CPU cores of the specified quota.

QUOTA\_CPU\_TOTAL

The total number of CPU cores of the specified quota.

QUOTA\_CPU\_UTIL

The CPU utilization of the specified quota.

QUOTA\_GPU\_ACCELERATOR\_DUTTY\_UTIL

The GPU computing power usage of the specified quota.

QUOTA\_GPU\_ACCELERATOR\_MEMORY\_UTIL

The GPU memory usage of the specified quota.

QUOTA\_GPU\_ACCELERATOR\_REQUEST

The number of scheduled GPUs of the specified quota.

QUOTA\_GPU\_ACCELERATOR\_TOTAL

The total number of GPUs of the specified quota.

QUOTA\_GPU\_POWER\_USAGE

The GPU power consumption of the specified quota.

QUOTA\_MEMORY\_UTIL

The memory usage of the specified quota.

## **Use CloudMonitor**

CloudMonitor is a service that monitors Alibaba Cloud resources and Internet applications. CloudMonitor provides a one-stop, out-of-the-box, and enterprise-class monitoring solution. You can log on to the CloudMonitor console to view metic data about PAI-Quota and configure alerts. CloudMonitor also provides API operations that you can use to subscribe to metrics and create a custom monitoring dashboard. For more information, see [What is Cloud Monitor?](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor).

### **Billing**

CloudMonitor provides a specific amount of free quota. For more information, see [Pay-as-you-go](/help/en/cms/cloudmonitor-1-0/product-overview/pay-as-you-go-1).

### **View metric data**

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Visualization** > **Cloud Service Monitoring Dashboard**.
    
3.  On the **Cloud Service Monitoring Dashboard** page, select **PAI-Quota** from the drop-down list. Enter the **resource quota name** in the search box or select a resource quota name from the drop down list. The charts for the quota usage are displayed on the dashboard.
    
    You can perform the following operations on the dashboard:
    
    -   **Switch dimensions:** Filter metric data by using the **quota** and **node** dimensions.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3812389171/p796054.png)
        
    -   **Modify the time range of statistics:** ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0780849171/p792484.png)
        
    -   **Expand the chart:** In the upper-right corner of the chart, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0780849171/p716053.png) icon to view the details.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3812389171/p791664.png)
        

### **Configure quota alerts**

You can proactively monitor the quota usage and configure alert rules based on your business requirements. An alert notification is sent when a metric breaches the threshold specified in the alert rule. The following section describes how to configure quota alerts in the CloudMonitor console.

#### Step 1: Configure alert contacts

1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Contacts**.
    
3.  On the **Alert Contacts** tab, click **Create Alert Contact**.
    
    1.  In the **Set Alert Contact** panel, enter the name, email address, and webhook URL of the alert contact.
        
    2.  Click **OK**.
        
4.  On the **Alert Contact Group** tab, click **Create Alert Contact Group**.
    
    1.  In the **Create Alert Contact Group** panel, enter a name for the alert contact group and add alert contacts to the alert contact group.
        
    2.  Click **Confirm**.
        

#### **Step 2: Configure alert rules**

1.  In the left-side navigation pane of the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/), choose **Cloud Service Monitoring** > **Cloud Service Monitoring**.
    
2.  On the **Cloud Service Monitoring** page, search for [**PAI-Quota**.](https://cloudmonitor.console.alibabacloud.com/productListNav/acs_pai_quota/quota/all)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5997491371/p792686.png)
    
3.  Go to the **PAI-Quota** page, select the region where the service is deployed, and then click **Create Alert Rule**.
    
4.  In the **Create Alert Rule** panel, configure the parameters and click **Confirm**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Product**
    
    The service that you want to monitor by using CloudMonitor. In this example, select **PAI-Quota** from the drop-down list.
    
    **Resource Range**
    
    The resources to which you want to apply the alert rule. Valid values:
    
    -   **All Resources:** An alert notification is sent when a resource quota meets the condition specified by the alert rule.
        
    -   **Instances:** Click Add Instance and add the resource quotas that you want to monitor. An alert notification is sent only if the selected resource quotas meet the condition specified by the alert rule.
        
    
    **Rule Description**
    
    The condition that triggers the alert. For more information about how to configure this parameter, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule).
    
    **Mute For**
    
    The interval at which another alert notification is sent when the alert is not cleared.
    
    **Effective Period**
    
    The period of time during which the alert rule takes effect. CloudMonitor monitors the specified resource quotas and generates alerts only within the specified effective period.
    
    **Alert Contact Group**
    
    The contact group to which alert notifications are sent. Select a contact group that has alert contacts.
    
    **Tag**
    
    The tag of the custom alert rule. A tag consists of a name and a value.
    
5.  On the **PAI-Quota** page, click **View Alert Rules** to view the details of the rules that you created. Click Alert History in the Actions column to view the alert history. You can also modify alert rules.
    

You can call API operations to configure and manage quota alerts, such as viewing the alert history, managing alert templates, creating alert rules, and adding alert contacts. For information about how to call CloudMonitor API operations to configure and manage quota alerts, see [Alert service](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-dir-alert-service/).

### **Subscribe to a metric**

CloudMonitor provides a comprehensive set of API operations that you can use to subscribe to metrics and create a custom resource monitoring dashboard. For more information, see [List of operations by function](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-overview#api-overview-59386-1).

**API operation**

**Description**

[DescribeMetricLast](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetriclast)

Queries the latest monitoring data of a metric.

[DescribeMetricList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetriclist)

Queries the monitoring data of a metric for a cloud service.

[DescribeMetricData](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetricdata)

Queries the monitoring data of a metric for a cloud service.

[DescribeMetricMetaList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetricmetalist)

Queries the details of metrics that are supported in CloudMonitor.

[DescribeProjectMeta](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describeprojectmeta)

Queries the information about monitored services in CloudMonitor.

[DescribeMetricTop](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetrictop)

Queries the latest monitoring data of a metric for a cloud service. The data can be sorted in a specified order.

In this example, the [DescribeMetricList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetriclist) operation is used to show how to query the data of a specific metric of Deep Learning Containers (DLC) of PAI.

1.  Go to the [PAI-Quota TimeSeries Metrics](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_pai_quota/quota) page.
    
2.  Find the metric to which you want to subscribe and click **Obtain Metric Data** in the **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3812389171/p804957.png)
    
3.  In OpenAPI Portal, configure the key parameters. Use the default values for other parameters. The following table describes the key parameters. For information about all parameters, see [DescribeMetricList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetriclist).
    
    **Parameter**
    
    **Description**
    
    **Namespace**
    
    The namespace of the cloud service. Example: acs\_pai\_quota.
    
    **MetricName**
    
    The name of the metric that you want to monitor. Example: QUOTA\_CPU\_REQUEST.
    
    **StartTime**
    
    The start of the time range for the query. Example: 2024-05-15 00:00:00.
    
    **EndTime**
    
    The end of the time range for the query. Example: 2024-05-28 00:00:00.
    
    **Note**
    
    The time range must be less than or equal to 31 days.
    
4.  After you configure the parameters, click **Initiate Call** to view the metric data in the specified time range.
    

## **Use ARMS**

Application Real-Time Monitoring Service (ARMS) is a cloud-native observability platform. Based on the capabilities of ARMS, you can build custom Grafana dashboards for PAI-Quota or configure flexible Prometheus alerts. For more information, see [What is ARMS?](/help/en/arms/product-overview/what-is-arms).

### **Billing**

For billing information, see [Instance billing](/help/en/arms/prometheus-monitoring/product-overview/billing-description/).

### **Integrate monitoring data**

Perform the following steps:

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, click **Integration Center**.
    
3.  In the left-side navigation panel of the **Integration Center** page, click **AI**. Then, click the **Aliyun PAI-Quota** tab in the AI section.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6961604271/p825831.png)
    
4.  Optional. In the Aliyun PAI-Quota configuration panel, you can preview the monitoring dashboard and view the collection metrics and all alert rule templates.
    
    #### **Preview**
    
    Click the **Preview** tab to preview the monitoring dashboard. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6961604271/p825422.png)
    
    #### **Collect Metrics**
    
    Click the **Collect Metrics** tab to view the collection metrics. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6961604271/p820624.png)
    
    #### **Alert Rule Template**
    
    Click the **Alert Rule Template** tab to view the alert rule template. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6961604271/p825838.png)
    
5.  Click the **Start Integration** tab to start the integration of monitoring data. Then, configure the relevant parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Select Region for Storage**
    
    Select a region in which you want to store data.
    
    **Access Name**
    
    Follow the on-screen instructions in the CloudMonitor console to configure the access name.
    
    The integration process requires approximately 1 to 2 minutes.
    
6.  In the left-side navigation panel, click **Integration Management** to view information about the integrated environments.
    

### **View the Grafana dashboards**

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, click **Integration Management**.
    
3.  On the **Integrated Environments** tab of the **Integration Management** page, click **Cloud Service Region**.
    
4.  On the **Cloud Service Region** tab, click the name of the environment instance that you want to manage.
    
5.  In the **Component Management** page, find the **Addon Type** section, and click **Dashboards** to view the built-in dashboards.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6961604271/p825847.png)
    
6.  Click the dashboard name to view quota information.![d3bae3f2d8c2bc286812e5969e1b9118](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6961604271/p826569.png)
    

### **Configure Prometheus alerts**

Perform the following steps to configure Prometheus alerts:

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, click **Integration Management**.
    
3.  On the **Integrated Environments** tab of the **Integration Management** page, click **Cloud Service Region**.
    
4.  On the **Cloud Service Region** tab, click the name of the environment instance that you want to manage.
    
5.  On the **Component Management** page, click **Alert Rule** in the **Addon Type** section to view the built-in alert rules.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1970064371/p820732.png)
    
6.  The built-in alert rules generate alert events but do not send alert notifications. You can use one of the following method to send alert notifications by using emails or other platforms:
    
    -   Create a notification policy and specify matching rules for alert events. If a matching rule is triggered, alert notifications are sent to the contacts by using the specified notification methods. For more information, see [Create and manage a notification policy](/help/en/arms/alarm-operation-center/create-and-manage-notification-policies).
        
    -   Click **Edit** in the Actions column and configure a notification method.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6961604271/p820733.png) On the edit Prometheus alert rule page, you can specify the alert condition, duration, alert message and alert notification. For more information, see [Create an alert rule for a Prometheus instance](/help/en/arms/prometheus-monitoring/create-alert-rules-for-prometheus-instances).
