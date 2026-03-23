Elastic Desktop Service (EDS) Enterprise provides resource monitoring and alerting capabilities. The monitoring feature tracks metrics such as cloud computer usage and session connections. If any metrics deviate from normal ranges, the alerting feature quickly identifies potential issues, enabling timely resolution to ensure business continuity. This topic describes how to use the monitoring and alerting features.

## Configure alert contacts

An alert contact is the recipient designated to receive alerts.

### **Create an alert contact**

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Monitoring & Alerts** > **Notifications & Alerts**.
    
3.  Click the **Contact Groups & Members** tab, and then click the **Name** tab.
    
4.  Click **Create Contact**. In the **Create Contact** panel, configure the following parameters and click **Confirm**.
    
    -   **Name**: Contact name.
        
    -   Notification method: Configure at least one of the following methods: email address, or DingTalk Robot.
        
        **Note**
        
        After you enter a callback URL of the DingTalk chatbot, click **Test** to complete verification. The DingTalk chatbot takes effect only after successful verification.
        
    -   **Notification Language**: You can select your preferred language for alerts between Simplified Chinese or English, or follow the system language of the device that receives alerts.
        

### **What to do next**

-   Activate contact methods. After the contact is created, the system sends activation notifications to the contact based on the contact method that you specify. The contact method must be activated within 24 hours after the contact receives the notifications. Alerts are sent only to activated contact methods. If the activation code sent to an alert contact expires after 24 hours, find the contact on the ****Name**** tab and click **Resend Activation Code**.
    
-   To edit or delete a contact: On the ****Name**** tab, click **Edit** or **Delete** in the **Actions** column for the contact. You can also select multiple contacts and delete them in batch.
    

## Configure an alert contact group

An alert contact group is a set of alert contacts. When configuring alert rules, you must bind them to alert contact groups rather than directly to alert contacts.

### **Create an alert contact group**

Before you create an alert contact group, make sure that alert contacts are created.

1.  In the left-side navigation pane, choose **Monitoring & Alerts** > **Notifications & Alerts**.
    
2.  Click the ****Contact Groups & Members**** tab, and then click the **Contact Groups** tab.
    
3.  Click **Create Contact Group**. In the **Create Contact Group** panel, configure the following parameters and click **Confirm**.
    
    -   Group Name: Enter a name for the alert contact group.
        
    -   Remarks (Optional): Enter a description or comments for the alert contact group.
        
    -   Add Contacts: Select at least one contact.
        
        **Note**
        
        Make sure that the alert contact is activated. Otherwise, the contact cannot receive alert notifications.
        

### **What to do next**

-   Add or remove contacts. On the ****Contact Groups**** tab, find the contact group that you want to manage and click **View/Add Contacts** in the **Actions** column to add or remove contacts as needed.
    
-   Delete a contact group. On the ****Contact Groups**** tab, click **Delete** in the **Actions** column. When you delete an alert contact group, the alert contacts are removed from the group but not deleted.
    

## Configure alert rules

An alert rule specifies the conditions for triggering an alert, its severity, and its effective duration.

### **Create an alert rule**

Each alert rule must be bound to a contact group. Make sure that a contact group is created before you create an alert rule.

1.  In the left-side navigation pane, choose **Monitoring & Alerts** > **Notifications & Alerts**.
    
2.  Click the **Alert Rules & Records** tab, and then click the **Alert Rules** tab.
    
3.  Click **Create Alert Rule**. In the **Create Alert Rule** panel, configure the following parameters and click OK.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Rule Name
    
    Enter a name for the alert rule.
    
    CPU usage alert
    
    Alert Source
    
    -   Cloud Computer
        
    -   Premium Bandwidth
        
    
    Cloud Computer
    
    Monitoring Scope
    
    -   All Resources: The rule takes effect for all cloud computers or premium bandwidth.
        
    -   Cloud Computer: The rule takes effect for the selected cloud computers.
        
    -   Premium Bandwidth: The rule takes effect for the selected premium bandwidth.
        
    
    All Resources
    
    Metric Type
    
    -   Single Metric: Only one metric is monitored. However, you can create alert rules for the metric at different severity levels.
        
    -   Multiple Metrics: You can monitor multiple metrics simultaneously and create alert rules at the same severity level for each. You must define the trigger conditions for the alerts.
        
    
    Single Metric
    
    Effective Period
    
    The time period during which the alert rule is effective.
    
    08:00-09:59
    
    Mute Period
    
    The period used to prevent continuous alerts from the same alert rule within a specific time frame. If the alert rule is still triggered after the mute period ends, the system will send alert notifications again.
    
    30 Minutes
    
    Alert Contact Group
    
    The contact group that receives alerts.
    
    O&M Group
    
    **Parameters when Metric Type is set to Single Metric**
    
    Metric
    
    The metric that you want to monitor.
    
    CPU Used by Current User Space (%)
    
    Severity & Rule
    
    The triggering conditions at different severity levels. You must specify at least one condition.
    
    Standard
    
    Average value in 3 consecutive periods > 80%
    
    **Parameters when Metric Type is set to Multiple Metrics**
    
    Severity
    
    The contact methods to send alerts at different severity levels are different. Valid values:
    
    -   Critical: Phone+SMS+Email+DingTalk
        
    -   Warning: SMS+Email+DingTalk
        
    -   Info: Email+DingTalk
        
    
    Standard
    
    Multi-metric Alert Condition
    
    The trigger conditions for different metrics. You can configure up to 10 conditions.
    
    -   The average disk usage exceeds 80%.
        
    -   The average memory usage exceeds 60%.
        
    
    Metric Relationship
    
    -   Trigger alert when all conditions are met: When the condition of each metric is in logical AND relationship, alerts are triggered. Alerts are triggered when all conditions are met.
        
    -   Trigger alert when any condition is met: When the condition of each metric is in logical OR relationship, alerts are triggered. Alerts are triggered when one of the conditions is met.
        
    
    Trigger alert when any condition is met
    
    Trigger Condition
    
    The number of consecutive periods required for conditions to be met before an alert is triggered.
    
    in consecutive 3 periods
    

### **What to do next**

-   Modify an alert rule. On the **Alert Rules** tab, find the alert rule that you want to modify and click **Modify** in the **Actions** column. In the **Modify Alert Rule** panel, modify the rule based on your business requirements.
    
-   Disable or enable an alert rule. On the **Alert Rules** tab, find the alert rule that you want to disable or enable and click **Disable** or **Enable** in the **Actions** column. In the confirmation dialog box, click **Confirm**. When an alert rule is disabled, the system monitors the metrics but does not send alert notifications, even if the trigger conditions are met.
    
-   Delete an alert rule. On the **Alert Rules** tab, find the alert rule that you want to delete and click **Delete** in the **Actions** column. In the confirmation dialog box, click **Confirm**.
    

## **Configure notification policies**

Notification policies are provided by WUYING Workspace. You do not need to create them. After you enable a notification policy, when the trigger conditions of the policy are met, notifications will be sent according to the notification rules you set.

### **Configure notification rules**

1.  In the left-side navigation pane, choose **Monitoring & Alerts** > **Notifications & Alerts**.
    
2.  Click the **Notification Policies & Records** tab, and then click the **Notification Policy** tab.
    
3.  In the **Actions** column of the target notification policy, click **Configure Notification Rule**. In the **Configure Notification Rule** panel, configure the following parameters and click **Confirm**.
    
    ## User Status Changed to Resigned
    
    Supported account types: convenience accounts, DingTalk, WeChat Work, and Lark.
    
    If you use one of the account types listed above for your end users, the system will send a notification when a user is offboarded.
    
    Upon receiving the notification, you can decide whether to delete the offboarded user's account and transfer their assets, or delete/reassign the cloud computer resources allocated to them. The system may provide recommendations to guide your decision.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Notification Period
    
    Select the notification period range. You must select at least one period.
    
    Friday
    
    Notification Time
    
    Select the notification time. You must select at least one time point and can select up to two time points.
    
    **Note**
    
    The current execution time is in UTC+8 time zone.
    
    17:00
    
    Notification Rule
    
    Description of the current notification policy rule. No configuration is required.
    
    None
    
    Contact Group
    
    The contact group that receives notifications.
    
    O&M Group
    
    ## Prolonged User Inactivity
    
    Supported account types: convenience accounts, DingTalk, WeChat Work, Lark, and Active Directory (AD) accounts.
    
    The system will send a notification when a user has not connected to their cloud computer for a specified period.
    
    Based on this alert and any system recommendations, you can decide whether action is needed on the associated resources.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Notification Schedule
    
    Select the day(s) on which to send notifications. At least one day must be selected.
    
    Friday
    
    Notified At
    
    Select the time for the notification. You must select at least one time, and can set up to two.
    
    **Note**
    
    All times are based on the UTC+8 timezone.
    
    17:00
    
    Custom Duration
    
    Set the number of days of user inactivity that will trigger a notification. You must configure at least one threshold and can add up to three.
    
    30 Days
    
    Contact Group
    
    The contact group that will receive the notifications.
    
    Ops Team 1
    

### **What to do next**

-   Enable or disable a notification policy. Click the **Notification Policies** tab. In the Actions column of the target notification policy, click **Enable** or **Disable**. The following policies are currently supported:
    
    -   User account status changed to resigned: After you enable this notification policy, when a user account (including WUYING convenience account) status changes to resigned, the system automatically sends you a notification. After receiving the notification, you can decide whether to delete the resigned account or transfer assets, and whether to delete or reassign cloud computer resources allocated to the resigned account based on your actual situation. For more information, see [Manage resigned convenience accounts](/help/en/wuying-workspace/user-guide/manage-convenience-users-1#0d9b1f57d6g0i).
        
-   View notification records. Click the **Notification Policies & Records** tab, and then click **Notification Records**. In the **Actions** column of the target notification policy, click **View Details**.
    

## View alert records

1.  In the left-side navigation pane, choose **Monitoring & Alerts** > **Notifications & Alerts**.
    
2.  Click the **Alert Rules & Records** tab, and then click the **Alert Rules** tab.
    
3.  You can perform one of the following operations to view alert records:
    
    -   Click the Alert History tab, and then enter the name or ID of an alert rule to filter the relevant alert records. To export alert records, click the **Export** icon in the upper-right corner of the **Alert History** tab.
        
    -   Click the **Alert Rules** tab. In the **Actions** column of the target alert rule, click **View Details**. On the **Alert Records** page, you can select a preset time period or customize a time period.
        

## FAQ

### **What should I do if an alert rule is configured but no alerts are sent to the designated contacts?**

Specific data on cloud computers is collected by CloudMonitor agent. By default, CloudMonitor agent is disabled in cloud computers. If metrics are missing, perform the following steps to enable CloudMonitor agent:

1.  Press the shortcut keys `Win+R` on your cloud computer, and enter `services.msc` in the **Run** window. Then, press Enter to open the **Services** window.
    
2.  In the **Services** window, find the service named `argusagent service`, right-click the service, and select **Properties**.
    
3.  On the **General** tab, set the **Startup Type** parameter to **Automatic**. If the service is not running, click **Start** in the **Service Status** section and then click **OK**.
