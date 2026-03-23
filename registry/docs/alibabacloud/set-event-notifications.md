To ensure the stability of your business running on Elastic Compute Service (ECS) instances and implement automated O&M, we recommend that you subscribe to event notifications to monitor system changes. This topic describes how to subscribe to ECS system events on the CloudMonitor console.

**Note**

If your business requires fast response to events or may involve a large number of events, we recommend that you subscribe to ECS events through EventBridge. For more information, see [Quickly subscribe to ECS events using EventBridge](/help/en/ecs/user-guide/use-eventbridge-to-quickly-subscribe-to-ecs-events).

## Background information

CloudMonitor is a monitoring service that allows you to query, manage, and monitor the system events of Alibaba Cloud services in an integrated manner. For more information about CloudMonitor, see [What is CloudMonitor](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor)

You can use CloudMonitor to configure alert rules so that you are notified when system events occur. CloudMonitor supports the following notification methods:

-   Sends SMS, emails, or DingTalk messages.
    
-   Distributes the notifications to your Message Queue, Log Service, Function Compute, or Webhook services, so that you can handle the events in an automated manner.
    

## Create a subscription policy

In this topic, a subscription policy is created for the **Instance:StateChange** system event.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Event Center** > **Event Subscription**.
    
    **Note**
    
    You can also create a subscription policy from the **System Event** menu. The steps are as follows:
    
    1.  In the navigation pane on the left, choose **Event Center** > **System Event**.
        
    2.  In the **Welcome To The New Event Center** section, click **Create Now**.
        
    
3.  On the **Subscription Policy** tab, click **Create Subscription Policy**.
    
4.  On the **Create Subscription Policy** page, configure the parameters.
    
    -   **Basic information**: Enter a name for the subscription policy.
        
    -   **Alert Subscription**:
        
        -   **Subscription Type**: Select **System Events**.
            
        -   **Subscription Scope**:
            
            -   **Products**: Select **Elastic Compute Service (ECS)** from the drop-down list.
                
            -   **Event Type**: Select **Status Notification**.
                
            -   **Event name**: Select **Instance:StateChange**.
                
            -   **Event Level**: Select **Notification (Info)**.
                
            -   **Application grouping**, **Event Content**, and **Event Resources**: Leave these parameters empty, which indicates that notifications will be sent for the **Instance:StateChange** events that occur on all ECS instances under all application groups of the account.
                
                **Note**
                
                For a list of the system events supported by ECS, see [System Event - Elastic Compute Service (ECS)](https://cloudmonitor.console.alibabacloud.com/metric-meta//ecs/event).
                
    -   **Combined Noise Reduction**: Use the default settings.
        
    -   **Notification**: Create a notification configuration. Use the default settings for **Custom Notification Method**.
        
        When you create a notification configuration, enter a notification configuration name, set the **Notification settings** parameter to **Set the notification group directly**, select an alert contact group from the **Contact Group** drop-down list, and then click **OK**.
        
        **Note**
        
        For more information about how to create a notification configuration, see the [Create a notification configuration policy](/help/en/cms/cloudmonitor-1-0/user-guide/manage-escalation-policies#section-grp-u0t-equ) section of the "Manage notification configurations" topic.
        
        CloudMonitor automatically sends alert notifications based on the notification methods for the alert contacts in the specified alert contact group. For example, if you specify a mobile number and an email address for an alert contact and use the default notification method as the **custom notification method**, the alert contact receives only alert phone calls, text messages, and emails.
        
    -   **Push and Integration**: Leave this section empty.
        
        **Note**
        
        For information about how to create a push channel, see [Create a push channel](/help/en/cms/cloudmonitor-1-0/user-guide/manage-push-channels#section-hkv-zx6-bpw).
        
    
    For information about event notifications, see the following topics:
    
    -   [Instance event notifications](/help/en/ecs/user-guide/instance-event-notification#2337879)
        
    -   [Elastic Block Storage event notifications](/help/en/ecs/user-guide/ebs-event-notifications#2337879)
        
    -   [Snapshot event notifications](/help/en/ecs/user-guide/snapshot-event-notifications#2337879)
        
    -   [ENI event notifications](/help/en/ecs/user-guide/eni-operation-event-notifications#concept-2140232)
        
    -   [vSwitch event notifications](/help/en/ecs/user-guide/vswitch-event-notifications#main-2350385)
        
    -   [IP address event notifications](/help/en/ecs/user-guide/ip-address-event-notification#main-2350387)
        
    

## Debug event subscription

After you subscribe to system event notifications, you can use the debugging feature to check whether notifications can be sent to Message Queue, Log Service, Function Compute, and Webhook services as expected.

1.  On the **Subscription Policy** tab, click **Debug Event Subscription**.
    
2.  In the **Create Event Debugging** panel, set **Products** to **Elastic Compute Service (ECS)** and **Name** to **Instance:StateChange**.
    
    CloudMonitor automatically generates the debugging content in the JSON format.
    
    Sample JSON content for the **Instance:StateChange** event
    
    ```
    {
        "product": "ECS",
        "resourceId": "acs:ecs:cn-hangzhou:1609982529920904:instance/<resource-id>",
        "level": "INFO",
        "instanceName": "instanceName",
        "regionId": "cn-hangzhou",
        "name": "Instance:StateChange",
        "content": {
            "resourceId": "i-b***vd2",
            "instanceName": "ehp***212",
            "instanceType": "ecs***rge",
            "state": "St***ng",
            "privateIpAddress": "10.***125",
            "resourceType": "ALI***nce"
        },
        "status": "Normal"
    }
    ```
    
3.  Click **OK**.
    
    An **Operation successful** message appears. CloudMonitor automatically sends a test alert notification to the alert contacts based on the notification methods specified in the subscription policy.
    

## References

You can specify follow-up actions for event notifications, so as to handle status change events of ECS instances in an automated manner. For example, you can specify a Message Service (MNS) queue in the policy. For more information about the operations, see [Automate O&M based on ECS instance state change events](/help/en/ecs/user-guide/automate-o-and-m-based-on-status-change-events-of-ecs-instances#task-2458106).
