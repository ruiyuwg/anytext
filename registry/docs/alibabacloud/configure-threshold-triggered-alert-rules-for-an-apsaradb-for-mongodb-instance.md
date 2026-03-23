ApsaraDB for MongoDB supports threshold-triggered alert rules for important instance metrics. If a metric's value violates the specified threshold, the system automatically sends an alert notification. This feature helps you quickly identify and resolve data anomalies. This topic describes how to configure a threshold-triggered alert rule in the MongoDB console.

## Procedure

1.  Log on to the [MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Replica Set Instances** or **Sharded Cluster Instances** based on your instance type.
    
3.  In the upper-left corner of the page, select the resource group and region of the instance.
    
4.  Click the ID of the target instance, or click **Manage** in the **Actions** column for the target instance.
    
5.  In the navigation pane on the left, click **Alert Rules**.
    
6.  In the upper-left corner of the page, click **Set Alert Rule**. You are redirected to the CloudMonitor console.
    
7.  In the CloudMonitor console, configure a threshold-triggered alert rule for the ApsaraDB for MongoDB instance.
    
    1.  On the **Alert Rules** page, click **Create Alert Rule**.
        
    2.  In the **Create Alert Rule** panel, configure the following parameters.
        
        **Parameter**
        
        **Description**
        
        **Product**
        
        The Alibaba Cloud service that you want to monitor.
        
        Based on the instance type, select **ApsaraDB For MongoDB - Standalone Instance**, **ApsaraDB For MongoDB - Replica Set**, or **ApsaraDB For MongoDB - Sharded Cluster**.
        
        **Resource Range**
        
        The resources to which the alert rule applies. Valid values are:
        
        -   **All Resources**: The alert rule applies to all resources of the specified cloud service.
            
            For example, you can set an alert that is triggered when the CPU utilization of any MongoDB instance under your account exceeds 80%. If you select All Resources, an alert notification is sent whenever this condition is met. When you select All Resources, the rule applies to a maximum of 1,000 resources. If you have more than 1,000 resources, alerts may not be triggered when the threshold is reached. In this case, you can use application groups to organize resources by business before you set alerts.
            
        -   **Application Groups**: The alert rule applies to all resources in a specified application group of the specified cloud service.
            
        -   **Instances**: The alert rule applies to a specified resource of the specified cloud service.
            
            For example, if you set an alert to be triggered when the host CPU utilization of an instance exceeds 80%, an alert notification is sent when this condition is met.
            
        
        **Rule Description**
        
        The conditions that trigger the alert rule. The alert rule is triggered when monitoring data meets these conditions. Configure the rule description by following these steps:
        
        1.  Click **Add Rule**.
            
        2.  In the **Configure Rule Description** panel, set the rule name, metric type, metric, threshold, and alert level.
            
        3.  Click **OK**.
            
        
        **Note**
        
        You can click **Add Rule** to configure multiple alert rules. The supported metrics vary based on the MongoDB instance type. For more information, see the following topics:
        
        -   [Metrics for ApsaraDB for MongoDB standalone instances](/help/en/mongodb/user-guide/apsaradb-for-mongodb-standalone-instances#concept-2492843)
            
        -   [Metrics for ApsaraDB for MongoDB replica set instances](/help/en/mongodb/user-guide/apsaradb-for-mongodb-replica-set-instances#concept-2492770)
            
        -   [Metrics for ApsaraDB for MongoDB sharded cluster instances](/help/en/mongodb/user-guide/apsaradb-for-mongodb-sharded-cluster-instances#concept-2492843)
            
        
        **Mute Period**
        
        The period for which new alert notifications are suppressed after an initial alert is sent. If the alert condition persists after the mute period, another alert notification is sent. Valid values: 5 minutes, 15 minutes, 30 minutes, 60 minutes, 3 hours, 6 hours, 12 hours, and 24 hours.
        
        When a metric reaches its threshold, an alert is sent. If the metric continues to exceed the threshold during this mute period, no more alerts are sent. If the metric has not returned to a normal state after the mute period ends, CloudMonitor sends another alert notification.
        
        **Effective Period**
        
        The time period during which the alert rule is active. CloudMonitor monitors data and sends alerts only during this period.
        
        **Alert Contact Group**
        
        The contact group to which alert notifications are sent.
        
        Alert notifications are sent to the contacts in the specified alert contact group. An alert contact group can contain one or more alert contacts.
        
        For more information about how to create alert contacts and alert contact groups, see [Create an alert contact or an alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#task-2514452).
        
        **Tag**
        
        The tag of the alert rule. A tag consists of a tag key and a tag value.
        
        **Alert Callback**
        
        A public URL that can receive alert notifications from CloudMonitor through POST requests. Only the HTTP protocol is supported. For more information about how to configure an alert callback, see [Use the alert callback feature to send notifications for threshold-triggered alerts](/help/en/cms/cloudmonitor-1-0/user-guide/use-the-alert-callback-feature-to-send-notifications-about-threshold-triggered-alerts#task-2151109).
        
        **Note**
        
        Click **Advanced Settings** to configure this parameter.
        
        **Auto Scaling**
        
        If you enable **Auto Scaling**, the corresponding scaling rule is triggered when an alert is generated. You must set the **Region**, **ESS Group**, and **ESS Rule** parameters.
        
        -   For more information about how to create a scaling group, see [Configure scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups#concept-25882-zh).
            
        -   For more information about how to create a scaling rule, see [Configure scaling rules](/help/en/auto-scaling/user-guide/manage-scaling-rules#concept-nyt-kpw-rfb).
            
        
        **Note**
        
        Click **Advanced Settings** to configure this parameter.
        
        **Log Service**
        
        If you enable **Log Service**, alert information is written to the specified Logstore in Simple Log Service when an alert is generated. You must set the **Region**, **ProjectName**, and **Logstore** parameters.
        
        For more information about how to create a project and a Logstore, see [Quick start: Use Logtail to collect and analyze ECS text logs](/help/en/sls/getting-started#concept-gpw-x2w-ydb).
        
        **Note**
        
        Click **Advanced Settings** to configure this parameter.
        
        **Simple Message Queue (formerly MNS) — Topic**
        
        If you enable **Simple Message Queue (formerly MNS) — Topic**, alert information is written to the specified topic in Simple Message Queue when an alert is generated. You must set the region and topic.
        
        For more information about how to create a topic, see [Create a topic](/help/en/mns/create-a-topic#task141).
        
        **Note**
        
        Click **Advanced Settings** to configure this parameter.
        
        **Function Compute**
        
        If you enable **Function Compute**, alert notifications are sent to Function Compute for format processing when an alert is generated. You must set the region, service, and function.
        
        For more information about how to create a service and a function, see [Quickly create a function](/help/en/functioncompute/fc-2-0/create-a-function-in-the-function-compute-console).
        
        **Note**
        
        Click **Advanced Settings** to configure this parameter.
        
        **No Data Processing**
        
        The method for handling alerts when monitoring data is not found. Valid values are:
        
        -   **Do Not Take Any Action** (default)
            
        -   **Send No-data Alerts**
            
        -   **Consider As Recovered**
            
        
        **Note**
        
        Click **Advanced Settings** to configure this parameter.
        
    3.  Click **Confirm**.
        
        After the rule is created, you can view it on the alert rules page in the CloudMonitor console or on the alert rules page in the [MongoDB console](https://mongodb.console.alibabacloud.com/).
        

## References

-   You can also configure threshold-triggered and event-triggered alert rules in the CloudMonitor console. For more information, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule#task-1920117) and [Manage system event-triggered alert rules (old)](/help/en/cms/cloudmonitor-1-0/user-guide/create-a-system-event-triggered-alert-rule-1#task-2182210).
    
-   After you configure an alert rule, you can manage it in the CloudMonitor console. For more information, see the following topics:
    
    -   [Manage alert rules](/help/en/cms/cloudmonitor-1-0/user-guide/modify-an-alert-rule#task-1935076)
        
    -   [Disable an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/disable-alert-rules-1#task-1935076)
        
    -   [Delete an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/delete-alert-rules-1#task-1935076)
        
    -   [View the alert history of a target alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/view-the-alert-history-of-an-alert-rule#task-1935076)
