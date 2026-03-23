When a system event occurs or a resource metric meets its alert conditions, Cloud Monitor automatically sends an alert notification to the specified alert contacts. You can use event subscriptions to customize these alert notifications. For example, you can subscribe to system or threshold-based events, merge alerts to reduce noise, escalate alerts to different alert contact groups, customize notification methods, and push alerts to target channels using a data template in a JSON format.

## Background information

Event subscriptions let you perform the following actions:

-   Subscribe to system events or threshold-based events.
    
-   Merge alerts from system and threshold-based events to reduce noise. You can also use conditional noise reduction to filter alerts and prevent alert storms caused by a high volume of duplicate alerts.
    
-   After merging and noise reduction, Cloud Monitor sends valid alert notifications directly to alert contacts. If an alert is not resolved within a specified time, Cloud Monitor automatically escalates the alert by sending the notification to the next alert contact group.
    
-   Customize notification methods by defining notification levels and templates for different channels. You can also integrate and push all alert data directly to services such as Simple Message Queue (formerly MNS), Simple Log Service (SLS), Function Compute (FC), and webhooks.
    

## Create a subscription policy

This topic uses an example of subscribing to the **InstanceRestart:StartedDueToInstanceError** system event for an Elastic Compute Service (ECS) instance to demonstrate how to subscribe to an event.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Event Center** > **Event Subscription**.
    
    **Note**
    
    You can also create a subscription policy from the **System Event** menu. The steps are as follows:
    
    1.  In the navigation pane on the left, choose **Event Center** > **System Event**.
        
    2.  In the **Welcome To The New Event Center** section, click **Create Now**.
        
    
3.  On the **Subscription Policy** tab, click **Create Subscription Policy**.
    
4.  On the **Create Subscription Policy** page, set the parameters for the subscription policy.
    
    -   **Basic Information**: Enter a name for the subscription policy.
        
    -   **Alert Subscription**:
        
        -   Set **Subscription Type** to **System Event**.
            
        -   In the **Subscription Scope** section, configure the following parameters: Set **Product** to **ECS**, **Event Type** to **Abnormal**, **Event Name** to **InstanceRestart:StartedDueToInstanceError**, and **Event Level** to **Critical**. Leave the **Application Group**, **Event Content**, and **Event Resource** fields empty. This configuration subscribes to the **InstanceRestart:StartedDueToInstanceError** system event for all ECS instances in all application groups under your account.
            
            **Note**
            
            For more information about the system events supported by ECS, see [Elastic Compute Service](https://cloudmonitor.console.alibabacloud.com/metric-meta//ecs/event).
            
    -   **Merge and Denoise**: Use the default settings.
        
    -   **Notification**: Create a notification configuration. Use the default notification method for **Custom Notification Method**.
        
        When you create a notification configuration, first enter a name for it. Then, set **Notification Settings** to **Directly Set Notification Group**, select a **Contact Group**, and click **OK**.
        
        **Note**
        
        For more information about how to create a notification configuration, see [Create a notification configuration policy](/help/en/cms/cloudmonitor-1-0/user-guide/manage-escalation-policies#section-grp-u0t-equ).
        
        The system sends alert notifications using the notification methods specified for the alert contacts in the alert contact group. For example, if you set a mobile number and an email address for an alert contact and use the default notification method for **Custom Notification Method**, the alert contact receives notifications by phone call, text message, and email.
        
    -   **Push and Integration**: No configuration is required.
        
        **Note**
        
        For more information about how to create a push channel, see [Create a push channel](/help/en/cms/cloudmonitor-1-0/user-guide/manage-push-channels#section-hkv-zx6-bpw).
        
    
    Table 1. Subscription policy parameters
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    **Basic Information**
    
    **Name**
    
    The name of the subscription policy.
    
    **Description**
    
    The description of the subscription policy.
    
    **Alert Subscription**
    
    **Subscription Type**
    
    The type of alert subscription. Valid values:
    
    -   **System Event**: System events gather fault and O&M events from various cloud products. By subscribing to system events, you can receive timely notifications or trigger external systems when events occur. You need to set the subscription scope for system events, including the following: Product, Event Type, Event Name, Event Level, Application Group, Event Content, and Event Resource.
        
        -   Event Content: Refers to the fields within \`Content\` in the event details. The input box performs a containment match for keywords. To enter multiple keywords, separate them with commas (,). In whitelist mode, a match is found if any of the keywords are met. In blacklist mode, all keywords must be matched. For example, in whitelist mode, if you enter \`re,1754xxxxx651403\` in the Event Content input box, all events containing the field \`re\` or \`1754xxxxx651403\` are filtered.
            
            ```
            "content": {
                    "invokeId": "t-bj05sxXXXXXXa5xq8",
                    "repeats": 1,
                    "finishTime": "2025-08-05T17:07:17Z",
                    "commandName": "cmd-2025-08-06",
                    "instanceId": "i-2ze61xxxxxugk0zoh7",
                    "repeatMode": "Once",
                    "playerUid": 1754xxxxx651403,
                    "exitCode": 0,
                    "startTime": "2025-08-05T17:07:14Z",
                    "ownerId": 18250xxxxx44564,
                    "commandId": "c-bj05sxxxxxxog00",
                    "invocationStatus": "Success"
            }
            ```
            
        -   Event Resource: The \`ResourceId\` corresponding to the cloud product, for example, `acs:ecs:cn-shanghai:{uid}:instance/{instanceId}`. The input box performs a containment match for keywords. To enter multiple keywords, separate them with commas (,). In whitelist mode, a match is found if any of the keywords are met. In blacklist mode, all keywords must be matched. For example, in whitelist mode, if you enter `instanceId_1,instanceId_2` in the Event Resource input box, events with the instance ID \`instanceId\_1\` or \`instanceId\_2\` are filtered.
            
    -   **Threshold-based Event**: When a threshold-based alert rule meets its conditions, a threshold-based event is triggered in Cloud Monitor. By subscribing to threshold-based events, you can have fine-grained control and customization over alert notifications, such as merging, noise reduction, and custom notification methods. You need to set the subscription scope for threshold-based events, including the following: Product Classification, Metric, Severity Level, and Application Group.
        
    
    **Merge And Denoise**
    
    **Note**
    
    If you do not set a merge rule, all alerts accepted by the subscription policy are merged by default.
    
    **Merge Content**
    
    Select the dimensions for merging from the **Subscription Scope** of the **Subscription Type**.
    
    **Denoise**
    
    Reduce the frequency of alert notifications. The options are:
    
    -   Conditional trigger, suppress after trigger: If a notification is triggered a certain number of times (default: 5) within a specific period (default: 5 minutes), a mute period (default: 5 minutes) is entered. During the mute period, no duplicate notifications are sent. After the mute period ends, this process repeats.
        
    -   Direct trigger, suppress after trigger: A notification is sent immediately when an alert is triggered. Then, a mute period (default: 5 minutes) is entered. During the mute period, no duplicate notifications are sent. After the mute period ends, this process repeats.
        
    -   Direct trigger, no suppression (use system default anti-storm settings): A notification is sent immediately when an alert is triggered.
        
        **Note**
        
        By default, Cloud Monitor can send a maximum of 50 alert notifications by email within 5 minutes.
        
    
    **Notification**
    
    **Notification Configuration**
    
    When a system event or threshold-based event meets the alert conditions, notify the alert contacts directly or notify different alert contacts based on the alert level.
    
    You can select an existing notification configuration or click **Create Notification Configuration** to create one.
    
    For more information about how to configure the parameters for a notification configuration policy, see [Parameters for a notification configuration policy](/help/en/cms/cloudmonitor-1-0/user-guide/manage-escalation-policies#table-ebp-lcm-vt8).
    
    **Custom Notification Method**
    
    Customize the alert notification method.
    
    Click **Modify** next to a notification method to change the **Notification Template** and **Alert Level**.
    
    **Push And Integration**
    
    **Push Channel**
    
    The push channel for alert notifications. To create a push channel, perform the following steps:
    
    1.  Click **Create New Push**.
        
    2.  Select an existing push channel or click **Add Channel** to create one.
        
        For more information about how to configure the parameters of a notification push channel, see [Parameters of a notification push channel](/help/en/cms/cloudmonitor-1-0/user-guide/manage-push-channels#table-uyz-miz-arr).
        
    
5.  Click **Submit**.
    
6.  Test the event subscription.
    
    1.  On the **Subscription Policy** tab, click **Test Event Subscription**.
        
    2.  In the **Create Event Test** panel, set **Product** to **ECS** and **Name** to **InstanceRestart:StartedDueToInstanceError**.
        
        The system automatically generates the test content in JSON format.
        
    3.  Click **OK**.
        
        An **Operation Is Successful** message is displayed. Cloud Monitor automatically sends a test alert notification to the alert contacts based on the notification method in the subscription policy.
        

## View a subscription policy

After you create a subscription policy, you can view its details.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Event Center** > **Event Subscription**.
    
    **Note**
    
    You can also create a subscription policy from the **System Event** menu. The steps are as follows:
    
    1.  In the navigation pane on the left, choose **Event Center** > **System Event**.
        
    2.  In the **Welcome To The New Event Center** section, click **Create Now**.
        
    
3.  On the **Subscription Policy** tab, find the target subscription policy and click **View** in the **Actions** column.
    
    In the **Subscription Policy Details** panel, you can view the basic information, event subscription, Merge and Denoise settings, and notification settings for the policy.
    

## Modify a subscription policy

If an existing subscription policy does not meet your requirements, you can modify it.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Event Center** > **Event Subscription**.
    
    **Note**
    
    You can also create a subscription policy from the **System Event** menu. The steps are as follows:
    
    1.  In the navigation pane on the left, choose **Event Center** > **System Event**.
        
    2.  In the **Welcome To The New Event Center** section, click **Create Now**.
        
    
3.  On the **Subscription Policy** tab, find the target subscription policy and click **Edit** in the **Actions** column.
    
4.  On the **Edit Subscription Policy** page, set the parameters for the subscription policy.
    
    For more information about the parameters for a subscription policy, see [Subscription policy parameters](#table-zve-mzd-ab1).
    
5.  Click **Submit**.
    

## Delete a subscription policy

After you delete a subscription policy, the alert contacts will no longer receive alert notifications.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Event Center** > **Event Subscription**.
    
    **Note**
    
    You can also create a subscription policy from the **System Event** menu. The steps are as follows:
    
    1.  In the navigation pane on the left, choose **Event Center** > **System Event**.
        
    2.  In the **Welcome To The New Event Center** section, click **Create Now**.
        
    
3.  On the **Subscription Policy** tab, find the target subscription policy and click **Delete** in the **Actions** column.
    
4.  In the **Delete Tip** dialog box, click **OK**.
    

## **Disable a subscription policy**

The **Status** of a new subscription policy is **Enabled** by default. You can disable a subscription policy to temporarily stop receiving alert notifications, for example, during manual system changes. While a policy is disabled, alert contacts will not receive any alert notifications.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Event Center** > **Event Subscription**.
    
    **Note**
    
    You can also create a subscription policy from the **System Event** menu. The steps are as follows:
    
    1.  In the navigation pane on the left, choose **Event Center** > **System Event**.
        
    2.  In the **Welcome To The New Event Center** section, click **Create Now**.
        
    
3.  On the **Subscription Policy** tab, find the target subscription policy and click **Disable** in the **Actions** column.
    
4.  Click **OK**.
    

## **Enable a subscription policy**

You can enable a subscription policy whose **Status** is **Disabled**. After you enable the subscription policy, alert notifications are automatically resumed.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Event Center** > **Event Subscription**.
    
    **Note**
    
    You can also create a subscription policy from the **System Event** menu. The steps are as follows:
    
    1.  In the navigation pane on the left, choose **Event Center** > **System Event**.
        
    2.  In the **Welcome To The New Event Center** section, click **Create Now**.
        
    
3.  On the **Subscription Policy** tab, use the drop-down list to filter for policies with a disabled status. Then, find the target subscription policy and click **Enable** in the **Actions** column.
    
4.  Click **OK**.
    

## **References**

-   [Create a notification configuration policy](/help/en/cms/cloudmonitor-1-0/user-guide/manage-escalation-policies#section-grp-u0t-equ)
    
-   [Create a push channel](/help/en/cms/cloudmonitor-1-0/user-guide/manage-push-channels#section-hkv-zx6-bpw)
    
-   [Create an alert rule for a system event](/help/en/cms/cloudmonitor-1-0/user-guide/create-a-system-event-triggered-alert-rule-1#steps-h8j-zc2-m3j)
    
-   [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule)
    
-   [Supported cloud products and their system events](/help/en/cms/cloudmonitor-1-0/user-guide/appendix-2-system-events)
