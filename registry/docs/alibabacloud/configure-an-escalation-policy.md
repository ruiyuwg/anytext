An escalation policy automatically notifies additional contacts when an alert remains unclaimed or uncleared within a specified time window. By linking an escalation policy to a notification policy, you define who gets notified, how, and when -- so that critical alerts always reach someone who can act on them.

For example, if an on-call engineer does not claim an alert within 10 minutes, the escalation policy can notify a backup engineer by phone and email.

## Prerequisites

Before you begin, make sure that you have:

-   At least one contact. For more information, see [Create a contact](/help/en/prometheus/user-guide/create-and-manage-contacts#section-yfw-gno-cad)
    

## Create an escalation policy

1.  Log on to the [Managed Service for Prometheus console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home).
    
2.  In the left-side navigation pane, choose **Alert Management** > **Escalation Policies**.
    
3.  On the **Escalation Policy** page, click **Create Escalation Policy** in the upper-right corner.
    
4.  On the right side of the page, in the **Name** field, enter a descriptive name that identifies the team or severity level, such as `Database Team - Critical`.
    
5.  Configure at least one escalation rule. Each rule defines a trigger condition: the system sends notifications when an alert is not claimed or cleared within the time you specify. For example, set the rule to escalate when an alert remains unclaimed for 10 minutes. Configure the following parameters for each rule:
    
    **Note**
    
    To add an escalation rule, click **Add Rule**.
    
    **Parameter**
    
    **Description**
    
    Notification Objects
    
    The contacts, contact groups, DingTalk groups, or schedules to notify. You can specify one or more. For more information, see [Create a contact](/help/en/prometheus/user-guide/create-and-manage-contacts#section-yfw-gno-cad) and [Create a scheduling policy](/help/en/arms/alarm-operation-center/create-scheduling-policies#task-2122734).
    
    Notification Methods
    
    The channels for sending notifications. Select one or more: DingTalk, Email, Text messages, Phone, or WebHook. To receive notifications by phone, the contact must first verify their phone number. See [Verify a mobile phone number](/help/en/prometheus/user-guide/create-and-manage-contacts#section-bmz-kvv-rwl).
    
    Notification Period
    
    The time window during which the system repeatedly sends notifications when the escalation condition is met.
    
    Number of Repetitions
    
    The number of times to repeat the notification. The system stops sending notifications when the alert no longer meets the escalation condition. Even if you set this parameter to `0`, the system sends at least one notification.
    
6.  Click **Save**.
    

## Manage escalation policies

After you create an escalation policy, it appears in the **Escalation Policies** section. You can manage your policies in either of the following ways:

-   **From the list**: Click the More icon next to a policy and select **Edit**, **Disable**, **Enable**, **Copy**, or **Delete**.
    
-   **From the detail pane**: Click the policy name to open its details on the right side. Use the icons in the upper-right corner to edit, refresh, duplicate, or delete the policy.
    

## What's next

-   [Create a notification policy](/help/en/prometheus/user-guide/create-a-notification-policy) to specify your escalation policy in a notification policy.
    
-   [Create a scheduling policy](/help/en/arms/alarm-operation-center/create-scheduling-policies) to define on-call rotations as notification targets.
