This topic describes how to create and manage rules that can be used to trigger threshold alerts in the PolarDB for MySQL console. This helps you identify and handle exceptions of PolarDB for MySQL clusters, PolarProxy, and compute nodes at the earliest opportunity.

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
2.  In the upper-left corner of the console, select the region in which the cluster that you want to manage is deployed.
3.  Find the cluster and click the cluster ID.
4.  In the left-side navigation pane, choose **Performance Monitoring**.
    
5.  Click **Add Alert Rule**.
    
6.  On the **Create Alert Rule** page, specify the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Product**
    
    The service that you want to monitor. Use the default value **PolarDB for MySQL (New)**.
    
    **Resource Range**
    
    The resources to which the alert rule applies. Valid values:
    
    -   **All Resources**: If a cluster in ApsaraDB for MySQL meets the conditions specified in Rule Description, the system sends alert notifications.
        
    -   **Application Groups**: If a cluster in the specified application groups meets the conditions specified in Rule Description, the system sends alert notifications.
        
    -   **Instances**: If the specified cluster meets the conditions specified in Rule Description, the system sends alert notifications.
        
    
    **Rule Description**
    
    This parameter specifies the content of the alert rule. If the metric value meets the specified alert condition, an alert is triggered. To configure Rule Description, perform the following steps:
    
    1.  Click **Add Rule**.
        
    2.  In the Add Rule Description panel, specify the rule name, metric type, metric, threshold, and alert level.
        
    3.  Click **Next Step**.
        
    
    **Note**
    
    For more information about how to create alert rules, see [Create a threshold-triggered alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule#table-bkh-2sk-3nl).
    
    **Mute For**
    
    The interval at which the system resends the alert notification if the issue that triggers the alert persists. The minimum value is 5 minutes and the maximum value is 24 hours.
    
    **Effective Period**
    
    The validity period of the alert rule.
    
    **Note**
    
    CloudMonitor sends alert notifications only within the validity period of the alert rule and records events when the validity period expires.
    
    **Alert Contact Group**
    
    The alert contact group to which alert notifications are sent.
    
    The alert notifications of the application group are sent to the alert contacts that belong to the specified alert contact groups. A contact group can contain one or more contacts.
    
    For information about how to create an alert contact and an alert contact group, see [Create an alert contact or alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#task-2514452).
    
    **Tag**
    
    Specifies tags for the alert rule. A tag consists of a key and a value.
    
    **Advanced Settings**
    
    **Alert Callback**
    
    Specifies a URL that can be accessed over the Internet. CloudMonitor sends HTTP POST requests to push alert notifications to the specified URL. You can enter only an HTTP URL. For more information about how to configure alert callback, see [Use the alert callback feature to send notifications about threshold-triggered alerts](/help/en/cms/cloudmonitor-1-0/user-guide/use-the-alert-callback-feature-to-send-notifications-about-threshold-triggered-alerts#task-2151109).
    
    To test the connectivity of an alert callback URL, perform the following steps:
    
    1.  Click **Test** next to the callback URL.
        
        In the **WebHook test** panel, you can check and troubleshoot the connectivity of the alert callback URL based on the returned status code and test result details.
        
        **Note**
        
        To obtain the details of the test result, configure the **Template Type** and **Language** parameters and click **Test**.
        
    2.  Click **Close**.
        
    
    **Auto Scaling(The corresponding scaling rule will be triggered when the alert occurs.)**
    
    If you turn on **Auto Scaling** and an alert is triggered, the specified scaling rule is enabled. In this case, you must configure the **Region**, **ESS Group**, and **ESS Rule** parameters.
    
    -   For information about how to create a scaling group, see [Manage scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups#concept-25882-zh).
        
    -   For more information, see [Manage scaling rules](/help/en/auto-scaling/user-guide/manage-scaling-rules#concept-nyt-kpw-rfb).
        
    
    **Log Service(If you select Log Service, the alert information will be written to Log Service.)**
    
    If you turn on **Log Service** and an alert is triggered, the alert information is written to the specified Logstore in Log Service. In this case, you must configure the **Region**, **ProjectName**, and **Logstore** parameters.
    
    For information about how to create a project and a Logstore, see [Getting Started](/help/en/sls/getting-started#concept-gpw-x2w-ydb).
    
    **Message Service - Topic**
    
    If you turn on **Message Service - Topic** and an alert is triggered, the alert information is written to the specified topic in Message Service (MNS). In this case, you must configure the Region and topicName parameters.
    
    For information about how to create a topic, see [Create a topic](/help/en/mns/create-a-topic#task141).
    
    **Method to handle alerts when no monitoring data is found**
    
    The method that you want to use to handle alerts when no monitoring data is found. Valid values:
    
    -   **Do not do anything** (default value)
        
    -   **Send alert notifications**
        
    -   **Treated as normal**
        
    
7.  Click **OK**.
