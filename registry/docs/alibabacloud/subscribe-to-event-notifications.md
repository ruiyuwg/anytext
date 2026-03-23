Tair (Redis OSS-compatible) is integrated with CloudMonitor. This integration allows for monitoring of significant system events such as **instance minor version update**, **instance failover**, and **instance migration**. You can subscribe to system events related to your resources. If a system event of a resource meets an alert condition, CloudMonitor automatically notifies the designated contacts.

## Background information

[CloudMonitor](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor#concept-2452587) is a service that monitors Internet applications and Alibaba Cloud resources. You can configure CloudMonitor to notify you of system anomalies. Then, you can automate the anomaly handling process based on alert notifications. CloudMonitor supports the following alert notification methods:

-   Send alert notifications by using emails or DingTalk chatbots.
    
-   Push events to Simple Message Queue (formerly MNS), Function Compute, Simple Log Service, or the specified callback URL. This allows you to automate the event handling process based on your business requirements.
    

## Procedure

1.  You must create an alert contact and an alert contact group, and add the alert contact to the alert contact group. For more information, see [Create an alert contact or alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#task-2514452).
    
    If you have created an alert contact and an alert contact group, skip this step.
    
2.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).
    
3.  In the left-side navigation pane, choose **Event Center** > **Event Subscription**.
    
    **Note**
    
    You can also perform the following steps to create a subscription policy by using the **System Event** menu:
    
    1.  In the left-side navigation pane, choose **Event Center** > **System Event**.
        
    2.  In the **Welcome to the New Event Center** section, click **Create Immediately** to create a subscription policy.
        
    
4.  On the **Subscription Policy** tab, click **Create Subscription Policy**.
    
5.  On the **Create Subscription Policy** page, configure the parameters. The following table describes the parameters.
    
    -   **Name**: Enter a name for the subscription policy.
        
    -   **Subscription Type**: Select **System Events**. For more information about the Redis and Tair system events supported by **CloudMonitor**, go to the [Redis event page](https://cloudmonitor.console.alibabacloud.com/metric-meta//redis/event).
        
    -   **Subscription Scope**: Set **Products** to **ApsaraDB for Redis**, **Event Type** to **Maintenance**, **Event name** to **Instance\_Failover**, and **Event Level** to **Critical**. Leave **Application grouping**, **Event Content**, and **Event Resources** unspecified. This indicates that you subscribe to the **Instance\_Failover** system event for all Tair instances across all application groups within your account.
        
    -   **Combined Noise Reduction**: Use the default settings.
        
    -   **Notification**: Create a notification configuration. Use the default notification method for **Custom Notification Method**.
        
        When you create a notification configuration, enter a notification configuration name, select **Set Notification Group Directly** for **Notification Settings**, select an alert contact group for **Contact Group**, and then click **OK**.
        
        **Note**
        
        For more information about how to create a notification configuration, see [Create a notification configuration policy](/help/en/cms/cloudmonitor-1-0/user-guide/manage-escalation-policies#section-grp-u0t-equ).
        
        CloudMonitor automatically sends alert notifications based on the notification methods for the alert contacts in the specified alert contact group. For example, if you set a mobile phone number and an email address for an alert contact and use the default notification method for **Custom Notification Method**, the alert contact receives only alert phone calls, text messages, and emails.
        
    -   **Push and Integration**: No configuration is required.
        
        **Note**
        
        For more information about how to create a push channel, see [Create a push channel](/help/en/cms/cloudmonitor-1-0/user-guide/manage-push-channels#section-hkv-zx6-bpw).
        
    
6.  Click **Submit**.
    
7.  Debug event subscription.
    
    1.  On the **Subscription Policy** tab, click **Debug Event Subscription**.
        
    2.  In the **Create Event Debugging** panel, set **Products** to **ApsaraDB for Redis** and **Name** to **Instance\_Failover**.
        
        CloudMonitor automatically generates debugging content in the JSON format.
        
        **View the sample code**
        
        ```
        {
            "product": "Redis",
            "resourceId": "acs:redis:cn-shenzhen:1764984725705461:instance/<resource-id>",
            "level": "WARN",
            "instanceName": "instanceName",
            "regionId": "cn-hangzhou",
            "name": "Instance_Failover",
            "content": {
                "InstanceName": "r-w***gsw",
                "eventId": "f5f***321",
                "publishTime": "2024-02-26T08:17:17+08:00",
                "reason": "",
                "product": "Re***",
                "instanceComment": "rch***s-3",
                "instanceId": "r-w***gsw",
                "EventType": "Ins***nce",
                "extra": {
                    "nodeZh": "",
                    "impactZh": "Instance***",
                    "reasonEn": "In***ce Fa***es(Pr***ry In***ce Una***ble)",
                    "eventTime": "2024-02-26T08:16:22+08:00",
                    "impactEn": "Tr***nt in***ce dis***ion",
                    "reasonZh": "Instance***unavailable)",
                    "nodeInfo": [],
                    "nodeEn": "",
                    "reasonCode": "Pla***ble"
                },
                "instanceType": "In***ce",
                "eventType": "Ins***nce",
                "Timestamp": "1708906637.742"
            },
            "status": "Executed"
        }
        ```
        
    3.  Click **OK**.
        
        The **Operation successful** message appears. CloudMonitor automatically sends a test alert notification to the alert contacts based on the notification methods specified in the subscription policy.
        

## Related API operations

**API operation**

**Description**

[PutEventRule](/help/en/cms/cloudmonitor-1-0/api-puteventrule#doc-api-Cms-PutEventRule)

Creates or modifies an event-triggered alert rule.

## **References**

-   [Create a notification configuration policy](/help/en/cms/cloudmonitor-1-0/user-guide/manage-escalation-policies#section-grp-u0t-equ)
    
-   [Create a push channel](/help/en/cms/cloudmonitor-1-0/user-guide/manage-push-channels#section-hkv-zx6-bpw)
    
-   [Create a system event-triggered alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-a-system-event-triggered-alert-rule-1#steps-h8j-zc2-m3j)
    
-   [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule)
    
-   [Supported cloud services and their system events](/help/en/cms/cloudmonitor-1-0/user-guide/appendix-2-system-events)
