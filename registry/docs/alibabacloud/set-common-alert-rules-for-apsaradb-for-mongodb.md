ApsaraDB for MongoDB provides the instance monitoring and alerting feature. This topic describes how to configure common metrics such as disk usage, input/output operations per second (IOPS), connection usage, and CPU utilization.

## Background information

-   As the business data increases, more performance resources of ApsaraDB for MongoDB instances are consumed. In some cases, performance resources may be exhausted.
    
-   In some scenarios, the performance resources of an ApsaraDB for MongoDB instance may be abnormally consumed. For example, when a large number of slow queries occur, the CPU usage of the instance increases. In addition, when a large amount of data is written, the disk space of the instance is exceptionally consumed.
    
    **Important**
    
    Instances that have insufficient disk space may be locked.
    

You can configure alert rules for key performance metrics of instances to help you detect abnormal data and troubleshoot errors.

## Procedure

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the upper-left corner of the page, select the resource group and region to which the instance belongs.
    
3.  In the left-side navigation pane, click **Replica Set Instances** or **Sharded Cluster Instances** based on the instance type.
    
4.  Click the ID of an instance, or click ![More icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7734103461/p349570.png) in the **Actions** column corresponding to the instance and select **Manage**.
    
5.  In the left-side navigation pane of the instance details page, click **Alert Rules**.
    
6.  Click **Set Alert Rule**. You are redirected to the CloudMonitor console.
    
7.  In the left-side navigation pane, choose Alerts > Alert Rules.Then, click **Create Alert Rule** in the upper-left corner.
    
8.  In the **Create Alert Rule** panel, configure the parameters described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Product**
    
    The name of the Alibaba Cloud service that can be monitored by CloudMonitor. Examples of valid values:
    
    -   ApsaraDB for MongoDB - Replica Set
        
    -   ApsaraDB for MongoDB - Sharded Cluster
        
    -   ApsaraDB for MongoDB - Standalone Instance
        
    
    **Resource Range**
    
    The range of the resources on which you want the alert rule to take effect. Valid values:
    
    -   **All Resources**: The alert rule applies to all resources of the specified cloud service.
        
    -   **Application Groups**: The alert rule applies to all resources in the specified application group of the specified cloud service.
        
    -   **Instances**: The alert rule applies to the specified resources of the specified cloud service.
        
    
    **Rule Description**
    
    The content of the alert rule. If a metric meets the specified condition, the alert rule is triggered. To specify the condition, perform the following steps:
    
    1.  Click **Add Rule**.
        
    2.  In the **Add Rule Description** panel, specify the rule name, metric type, metric, threshold, and alert level.
        
    3.  Click **OK**.
        
    
    **Note**
    
    For more information about how to specify complex alert conditions, see [Alert rule expressions](/help/en/cms/cloudmonitor-1-0/user-guide/alert-rule-expressions#concept-2276873).
    
    **Mute for**
    
    The interval at which you want CloudMonitor to resend alert notifications if the alert is not cleared. Valid values: 5 Minutes, 15 Minutes, 30 Minutes, 60 Minutes, 3 Hours, 6 Hours, 12 Hours, and 24 Hours.
    
    If a metric value reaches the threshold, CloudMonitor sends an alert notification. If the metric value reaches the threshold again within the mute period, CloudMonitor does not resend an alert notification. If the alert is not cleared after the mute period ends, CloudMonitor resends an alert notification.
    
    For example, if the **Mute For** parameter is set to **12 Hours** and the alert is not cleared, CloudMonitor resends an alert notification after 12 hours.
    
    **Effective Period**
    
    The period of time during which you want the alert rule to take effect. CloudMonitor monitors the specified resources based on the alert rule only within the specified period of time.
    
    **Alert Contact Group**
    
    The contact group to which you want CloudMonitor to send alert notifications.
    
    The alert notifications of the application group are sent to the contacts that belong to the specified contact group. An alert contact group can contain one or more alert contacts.
    
    For more information about how to create an alert contact and a contact group, see [Create an alert contact or alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#task-2514452).
    
    **Tag**
    
    The tags of the alert rule. A tag consists of a name and a value.
    
    For more information about how to configure advanced settings, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule).
    
9.  Click **Confirm**. The alert rule automatically takes effect.
