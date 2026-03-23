If you want to monitor a large number of resources, you can use the alert template feature. This feature helps you save multiple alert rules on the metrics of various cloud services as a template. You can create or modify alert rules by using alert templates. This way, you do not need to configure each alert rule.

## Background information

-   Alert templates must be used together with application groups. You can create an application group, and then create and apply an alert template to the application group. This simplifies the process to create and maintain alert rules. For information about how to create an application group, see [Create an application group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-application-group#task-2000412).
    
-   Before you create alert templates, take note of the following limits:
    
    -   A maximum of 100 alert templates can be created for each Alibaba Cloud account.
        
    -   A maximum of 30 metrics can be specified in each alert template.
        

## Procedure

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Templates**.
    
3.  On the **Alert Templates** page, click **Create Alert Template**.
    
4.  In the **Create Alert Template** panel, specify a name for the template and select the cloud service that you want to monitor.
    
5.  Click **Add Rule** below the cloud service that you select to configure an alert rule.
    
    Cloud Monitor supports the following alert templates:
    
    -   Metric template
        
        The following tables describe the parameters of a threshold-triggered alert rule.
        
        **Parameter**
        
        **Description**
        
        **Rule Name**
        
        The name of the threshold-triggered alert rule.
        
        **Metric Type**
        
        The metric type of the threshold-triggered alert rule. Valid values:
        
        -   **Single Metric**: The alert rule applies to only one metric.
            
        -   **Multiple Metrics**: The alert rule applies to multiple metrics.
            
        
        **Metric Name**
        
        The name of the metric that you want to monitor. For information about how to obtain the metrics for an Alibaba Cloud service, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491).
        
        **Note**
        
        This parameter is displayed only if you set the **Metric Type** parameter to **Single Metric**.
        
        **Threshold and Alert Level**
        
        The alert level and the corresponding threshold.
        
        The notification method for alerts of the **Info** level is **Email + Webhook**.
        
        You also need to select the number of times that the metric to be monitored reaches the alert threshold before an alert notification is sent. Valid values: 1 Consecutive Cycle, 3 Consecutive Cycles, 5 Consecutive Cycles, 10 Consecutive Cycles, 15 Consecutive Cycles, 30 Consecutive Cycles, 60 Consecutive Cycles, 70 Consecutive Cycles, 90 Consecutive Cycles, 120 Consecutive Cycles, and 180 Consecutive Cycles.
        
        **Note**
        
        This parameter is displayed only if you set the **Metric Type** parameter to **Single Metric**.
        
        **Alert Level**
        
        The alert level and the corresponding alert notification methods. Valid values:
        
        Info: Email + Webhook
        
        **Note**
        
        This parameter is displayed only if you set the **Metric Type** parameter to **Multiple Metrics**.
        
        **Metric Type**
        
        The method that you want to use to specify metrics and conditions. Valid values:
        
        -   **Standard Creation**: Select multiple metrics and specify conditions.
            
        -   **Expression-based Creation**: Enter an expression to specify multiple metrics and conditions.
            
        
        **Note**
        
        This parameter is displayed only if you set the **Metric Type** parameter to **Multiple Metrics**.
        
        **Multi-metric Alert Expression**
        
        The alert rule that is created for multiple metrics.
        
        **Note**
        
        This parameter is displayed only if you set the **Metric Type** parameter to **Multiple Metrics** and the Metric Type parameter to **Standard Creation**.
        
        **Relationship Between Metrics**
        
        The relationship between multiple metrics. Valid values:
        
        -   **Generate alerts if all metrics meet the conditions (&&)**
            
        -   **Generate alerts if one of the conditions is met (||)**
            
        
        **Note**
        
        This parameter is displayed only if you set the **Metric Type** parameter to **Multiple Metrics** and the Metric Type parameter to **Standard Creation**.
        
        **Multi-metric Alert Expression**
        
        The expression that is used to specify multiple metrics and conditions.
        
        For more information about how to configure multi-metric alert rule expressions, see [Alert rule expressions](/help/en/cms/cloudmonitor-1-0/user-guide/alert-rule-expressions#concept-2276873).
        
        **Note**
        
        This parameter is displayed only if you set the **Metric Type** parameter to **Multiple Metrics** and the Metric Type parameter to **Expression-based Creation**.
        
        **Select the number of times the threshold is reached before an alert is triggered**
        
        The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this parameter, Cloud Monitor sends alert notifications. Valid values: 1 Consecutive Cycle, 3 Consecutive Cycles, 5 Consecutive Cycles, 10 Consecutive Cycles, 15 Consecutive Cycles, 30 Consecutive Cycles, 60 Consecutive Cycles, 70 Consecutive Cycles, 90 Consecutive Cycles, 120 Consecutive Cycles, and 180 Consecutive Cycles.
        
        **Method to handle alerts when no monitoring data is found**
        
        The method that is used to handle alerts when no monitoring data is found. Valid values:
        
        -   **Do not do anything**
            
        -   **Send alert notifications**
            
        -   **Treated as normal**
            
        
        **Tag**
        
        The tags of the alert template. The specified tags are automatically added to the alert content.
        
        **Alert Callback**
        
        The callback URL that can be accessed over the Internet. Cloud Monitor sends HTTP POST requests to push alert notifications to the specified URL. You can enter only an HTTP URL. For more information about how to configure alert callback, see [Use the alert callback feature to send notifications about threshold-triggered alerts](/help/en/cms/cloudmonitor-1-0/user-guide/use-the-alert-callback-feature-to-send-notifications-about-threshold-triggered-alerts#task-2151109).
        
        To test the connectivity of an alert callback URL, perform the following steps:
        
        1.  Click **Test** next to the callback URL.
            
            In the **Webhook Test** panel, you can check and troubleshoot the connectivity of the alert callback URL based on the returned status code and test result details.
            
            **Note**
            
            To obtain the details of the test result, configure the **Test Template Type** and **Language** parameters and click **Test**.
            
        2.  Click **Close**.
            
        
    -   Event template
        
        Event-triggered alert rules support only system events. The following table describes the parameters of an event-triggered alert rule.
        
        **Parameter**
        
        **Description**
        
        **Rule Name**
        
        The name of the event-triggered alert rule.
        
        **Event Type**
        
        The type of the event that triggers alerts. For more information about the types of events that are supported by each Alibaba Cloud service, see [Supported cloud services and their system events](/help/en/cms/cloudmonitor-1-0/user-guide/appendix-2-system-events#concept-2500373).
        
        **Event Level**
        
        The severity level of the event that triggers alerts. For more information about the severity levels of the events that are supported by each Alibaba Cloud service, see [Supported cloud services and their system events](/help/en/cms/cloudmonitor-1-0/user-guide/appendix-2-system-events#concept-2500373).
        
        **Event Name**
        
        The name of the event that triggers alerts. For more information about the names of the events that are supported by each Alibaba Cloud service, see [Supported cloud services and their system events](/help/en/cms/cloudmonitor-1-0/user-guide/appendix-2-system-events#concept-2500373).
        
        **Notification Method**
        
        The notification method of the event-triggered alert. Valid values:
        
        -   **Alert Notification**: Select the alert notification methods. Valid values:
            
            Info (Email + TradeManager + DingTalk Chatbot)
            
        -   **SMQ**: The Simple Message Queue (formerly MNS) (SMQ) queue to which the event alert is delivered.
            
        -   **Function Compute**: The Function Compute function to which the event alert is delivered.
            
        -   **URL Callback**: The callback URL that can be accessed over the Internet. Cloud Monitor sends a POST request to push an alert notification to the specified callback URL. You can enter only an HTTP URL. For more information about how to configure alert callbacks, see [Configure callbacks for system event-triggered alerts (old)](/help/en/cms/cloudmonitor-1-0/user-guide/configure-callbacks-for-system-event-triggered-alerts#task-2057433).
            
        -   **Simple Log Service**: The Simple Log Service Logstore to which the event alert is delivered.
            
        
    -   Group process template
        
        You can configure alert rules of the group process type only for Elastic Compute Service (ECS) resources. The following table describes the parameters of an alert rule of the group process type.
        
        **Parameter**
        
        **Description**
        
        **Process Name**
        
        The name of the alert rule of the group process type.
        
        **Matching Rule**
        
        The rule that is used to match processes. Valid values:
        
        -   **All**: The alert rule applies to all instances in an application group. If one of the processes on an instance in the application group meets the conditions, an alert is triggered.
            
        -   **All Rules**: If the processes on the instances in an application group meet all conditions, an alert is triggered.
            
        -   **Any Rule**: If the processes on the instances in an application group meet one of the conditions, an alert is triggered.
            
        
        **Match Express**
        
        The dynamic rule that is used to match processes. The alert rule can be applied to all instances in the specified application group or to instances of a specific type.
        
        **Note**
        
        This parameter is required only if you set the **Matching Rule** parameter to **All Rules** or **Any Rule**.
        
        **Number of Processes**
        
        The threshold of the number of processes.
        
    -   Host availability template
        
        You can configure alert rules of the host availability type only for ECS resources. The following table describes the parameters of an alert rule of the host availability type.
        
        **Parameter**
        
        **Description**
        
        **Task Name**
        
        The name of the availability monitoring task.
        
        **Detection Type**
        
        The method that you want to use to monitor the object. Valid values:
        
        -   **HTTP(S)**: If you select this option, enter the URL that you want to monitor.
            
        -   **TELNET**: If you select this option, enter the IP address that you want to monitor.
            
        -   **PING**: If you select this option, enter the IP address that you want to monitor.
            
        
        **Url/Host**
        
        The URL or IP address of the object that you want to monitor. The type of the value of this parameter varies based on the value of the Detection Type parameter.
        
        **Matching Rule**
        
        The method that you want to use to send a monitoring request. Valid values:
        
        -   **HEAD**
            
        -   **GET**
            
        -   **POST**
            
        
        **Match Response Content**
        
        The response content that you want to match and the method used to match the response content.
        
        If you specify response content, the site monitoring task checks whether the first 64 KB of the HTTP response body contains the response content that you specify. Valid values:
        
        -   **Generate Alerts If Response Contains**
            
        -   **Generate Alerts If Response Does Not Contain**
            
        
        **Note**
        
        This parameter is required only if you set the **Detection Type** parameter to **HTTP(S)**.
        
        **Status Code**
        
        The range of the status codes that you want to match. If the status code that is returned meets the condition, Cloud Monitor generates an alert.
        
        If the value of the **Status Code** parameter or the **Response Time** parameter reaches the corresponding threshold, an alert is triggered. Cloud Monitor sends alert notifications to the alert contact group of a specified application group.
        
        **Response Time**
        
        The threshold of the response time. If the response time reaches the threshold specified by this parameter, Cloud Monitor generates an alert.
        
        If the value of the **Status Code** parameter or the **Response Time** parameter reaches the corresponding threshold, an alert is triggered. Cloud Monitor sends alert notifications to the alert contact group of a specified application group.
        
    
6.  Click **OK**.
    
7.  Click **OK**.
    
8.  In the **Alert Template Created/Modified** message, click **OK**.
    
    **Note**
    
    If you click **Cancel**, the alert template is created but not applied to application groups. For more information, see [Apply alert templates to application groups](/help/en/cms/cloudmonitor-1-0/user-guide/apply-alert-templates-to-application-groups#task-2182073).
    
9.  In the **Apply Templates to Groups** dialog box, select one or more application groups and set the **Mute Period**, **Effective Period**, **Alert Callback**, and **Template Application Policy** parameters.
    
10.  Click **OK**.
     
11.  In the **Apply Templates to Groups** message, click **OK**.
