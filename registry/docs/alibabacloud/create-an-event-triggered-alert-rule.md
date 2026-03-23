CloudMonitor manages the system events and custom events of Alibaba Cloud services in a centralized manner. You can configure alert rules for the events of Alibaba Cloud services. This way, you can receive alert notifications at the earliest opportunity when exceptions occur. Then, you can analyze and troubleshoot issues in an efficient manner. This topic describes how to create a system event-triggered or custom event-triggered alert rule.

## Prerequisites

An application group is created and resources are added to the application group if you want to apply alert rules to instances by application group. For more information, see [Create an application group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-application-group#task-2000412) and [Modify an application group](/help/en/cms/cloudmonitor-1-0/user-guide/modify-an-application-group#section-r65-omj-6pn).

## Background information

The following table describes the event types and Alibaba Cloud services supported by CloudMonitor.

**Event type**

**Description**

**Supported Alibaba Cloud service**

System event

CloudMonitor provides a centralized platform that you can use to query system events generated for different Alibaba Cloud services. This allows you to track the use of Alibaba Cloud services and receive alert notifications at the earliest opportunity.

[Supported Alibaba Cloud services and system events](/help/en/cms/cloudmonitor-1-0/user-guide/appendix-2-system-events#concept-2500373)

Custom event

You can call an API operation of CloudMonitor to report anomalous events that occur in your Alibaba Cloud services to CloudMonitor. This allows you to track the use of the Alibaba Cloud services and receive alert notifications at the earliest opportunity.

All Alibaba Cloud services supported by CloudMonitor

## Create a system event-triggered alert rule

1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).
2.  In the left-side navigation pane, click **Application Groups**.
    
3.  On the **Application Groups** tab, click the name of the desired application group.
    
4.  In the left-side navigation pane of the page that appears, click **System Event**.
    
5.  On the **Event Monitoring** page, click **Save as Alert Rule**.
    
6.  In the **Create/Modify Event-triggered Alert Rule** panel, configure the parameters of the system event-triggered alert rule.
    
    Table 1. Parameters of a system event-triggered alert rule
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    **Basic Info**
    
    **Alert Rule Name**
    
    The name of the event-triggered alert rule.
    
    **Event-triggered Alert Rules**
    
    **Product Type**
    
    The Alibaba Cloud service to which the event-triggered alert rule is applied. For more information about the Alibaba Cloud services that are supported by CloudMonitor, see [Appendix 2: System events](/help/en/cms/cloudmonitor-1-0/user-guide/appendix-2-system-events#concept-2500373).
    
    **Event Type**
    
    The type of the event that triggers alerts. For more information about the types of the events that are supported by each Alibaba Cloud service, see [Appendix 2: System events](/help/en/cms/cloudmonitor-1-0/user-guide/appendix-2-system-events#concept-2500373).
    
    **Event Level**
    
    The level of the event that triggers alerts. For more information about the levels of the events that are supported by each Alibaba Cloud service, see [Appendix 2: System events](/help/en/cms/cloudmonitor-1-0/user-guide/appendix-2-system-events#concept-2500373).
    
    **Event Name**
    
    The name of the event that triggers alerts. For more information about the names of the events that are supported by each Alibaba Cloud service, see [Appendix 2: System events](/help/en/cms/cloudmonitor-1-0/user-guide/appendix-2-system-events#concept-2500373).
    
    **Keyword Filtering**
    
    The keywords that are used to filter alert rules. Valid values:
    
    -   **Contains any of the keywords**: If the alert rule contains any one of the specified keywords, CloudMonitor sends an alert notification.
        
    -   **Does not contain any of the keywords**: If the alert rule does not contain any one of the specified keywords, CloudMonitor sends an alert notification.
        
    
    **Note**
    
    For more information about how to view the content of an event, see [View system events](/help/en/cms/cloudmonitor-1-0/user-guide/view-system-events#task-2022141).
    
    **SQL Filter**
    
    The SQL statement that is used to filter the alert rule.
    
    You can use the `and` and `or` operators. For example, if you set this parameter to `Warn and i-hp368focau7dp0hw****`, CloudMonitor sends alert notifications only when the event content contains the instance `i-hp368focau7dp0hw****` and the alert level `Warn`.
    
    **Resource Range**
    
    The range of the resources to which the event-triggered alert rule is applied. Valid values:
    
    -   **All Resources**: The event-triggered alert rule is applied to all resources of the cloud service.
        
    -   **Application Group**: The event-triggered alert rule is applied to the cloud services in the specified application group. In this case, you must select an application group.
        
    
    **Notification Method**
    
    **Note**
    
    Select at least one alert notification method.
    
    **Alert Notification**
    
    CloudMonitor directly sends notifications of event-triggered alerts to the specified alert contact group. You must configure the following parameters:
    
    -   **Contact Group**: The alert contact group to which the notifications of event-triggered alerts are sent.
        
    -   **Notification Method**: The levels and notification methods of event-triggered alerts. Valid values:
        
        -   Critical (Email + Webhook)
            
        -   Warning (Email + Webhook)
            
        -   Info (Email + Webhook)
            
    
    **Message Service - Queue**
    
    The Message Service (MNS) queue to which event-triggered alerts are delivered.
    
    **Function Compute**
    
    The Function Compute function to which event-triggered alerts are delivered.
    
    **URL Callback**
    
    The callback URL that can be accessed over the Internet. CloudMonitor sends HTTP POST requests to push alert notifications to the specified URL. You can enter only an HTTP URL. For more information about how to configure alert callbacks, see [Configure callbacks for system event-triggered alerts](/help/en/cms/cloudmonitor-1-0/user-guide/configure-callbacks-for-system-event-triggered-alerts#task-2057433).
    
    To test the connectivity of an alert callback URL, perform the following steps:
    
    1.  Click **Test** next to the callback URL.
        
        In the **Webhook Test** panel, you can check and troubleshoot the connectivity of the alert callback URL based on the returned status code and test result details.
        
        **Note**
        
        To obtain the details of the test result, configure the **Test Template Type** and **Language** parameters and click **Test**.
        
    2.  Click **Close**.
        
    
    **Log Service**
    
    The Simple Log Service Logstore to which event-triggered alerts are delivered.
    
    **Mute For**
    
    The interval at which CloudMonitor resends alert notifications before an alert is cleared. Valid values: 5 Minutes, 15 Minutes, 30 Minutes, 60 Minutes, 3 Hours, 6 Hours, 12 Hours, and 24 Hours.
    
    If a metric value reaches the threshold, CloudMonitor sends an alert notification. If the metric value reaches the threshold again within the mute period, CloudMonitor does not resend an alert notification. If the alert is not cleared after the mute period ends, CloudMonitor resends an alert notification.
    
    For example, if the **Mute For** parameter is set to **12 Hours** and the alert is not cleared, CloudMonitor resends an alert notification after 12 hours.
    
7.  Click **OK**.
    

## Create a custom event-triggered alert rule

1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).
2.  In the left-side navigation pane, click **Application Groups**.
    
3.  On the **Application Groups** tab, click the name of the desired application group.
    
4.  In the left-side navigation pane of the page that appears, click **Custom Event**.
    
5.  On the **Custom Event** page, click the **Event-triggered Alert Rules** tab.
    
6.  Click **Create Alert Rule**.
    
7.  In the **Create/Modify Event-triggered Alert Rule** panel, configure the parameters of the custom event-triggered alert rule. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Alert Rule Name**
    
    The name of the event-triggered alert rule.
    
    **Event Name**
    
    The name of the custom event.
    
    **Rule Description**
    
    The details of the event-triggered alert rule. An alert notification is sent only if the alert is generated for the specified number of times within the specified period of time. The period can be 1, 2, 3, 4, or 5 minutes.
    
    **Notification Methods**
    
    The notification methods and severity level of the event-triggered alert rule. Valid values:
    
    -   Email + Webhook(CRITICAL)
        
    -   Email + Webhook(WARN)
        
    -   Email + Webhook(INFO)
        
    
    **Contact Group**
    
    The alert group that receives alert notifications.
    
    **Alert Callback**
    
    The callback URL and request method. Enter a callback URL that can be accessed over the Internet. CloudMonitor sends a POST or GET request to push an alert notification to the specified callback URL. Only HTTP requests are supported.
    
    To test the connectivity of an alert callback URL, perform the following steps:
    
    1.  Click **Test** next to the callback URL.
        
        In the **Webhook Test** panel, you can check and troubleshoot the connectivity of the alert callback URL based on the returned status code and test result details.
        
        **Note**
        
        To obtain the details of the test result, configure the **Test Template Type** and **Language** parameters and click **Test**.
        
    2.  Click **Close**.
        
    
8.  Click **OK**.
