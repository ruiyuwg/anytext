This topic provides answers to some frequently asked questions about intelligent monitoring.

-   [What do I do if I cannot receive alert notifications after I configure an alert rule in Operation Center?](#section-uy8-ke3-vtu)
    
-   [What do I do if I want to disable alerting for a task?](#section-c3j-jwc-nko)
    
-   [Why is a baseline in the Empty Baseline state?](#section-1on-03o-ug8)
    
-   [Why is no alert notification sent for a baseline in the Overtime state?](#section-pfx-ikk-jcp)
    
-   [Can I disable alerting about the slowdowns of tasks?](#section-jup-b2q-p18)
    
-   [Why am I unable to receive an alert notification for a task error?](#section-aw8-k93-7vm)
    
-   [What do I do if I receive an alert notification at night?](#section-vsi-6mf-rei)
    

## What do I do if I cannot receive alert notifications after I configure an alert rule in Operation Center?

Check whether an alert is triggered. If an alert is triggered but you cannot receive an alert notification, troubleshoot the issue based on the notification method that you specify. The notification methods include **text message**, **email**, and **DingTalk group message**.

-   **Check whether an alert is triggered.**
    
    -   If an alert rule is configured for an auto triggered task, view the status of the instances that are generated for the task on the **Cycle Instance** page in Operation Center and check whether an alert can be triggered for the task.
        
        For information about the conditions for triggering an alert based on a custom alert rule, see [Create a custom alert](/help/en/dataworks/user-guide/create-a-custom-alert-rule#task-2364475) rule. For more information about the conditions for triggering a baseline alert, see [Overview](/help/en/dataworks/overview-37#concept-2084394).
        
    -   If an alert rule is configured for a real-time synchronization task, view the status of the real-time synchronization task. To view the status of the task, go to **Operation Center**. In the left-side navigation pane, choose **Real-time Node O&M** > **Real-time Synchronization Nodes**.
        
-   **No alert is triggered.**
    
    When a task is incomplete, the system scans the previous 100 incomplete tasks. If a large number of tasks are frozen, the system may fail to scan the task. As a result, no alert is triggered for the task.
    
-   **Alert notifications are not received over** **text message or email after an alert is triggered.**
    
    Check whether the specified mobile phone numbers and email addresses of alert contacts in DataWorks are correct.
    
    In the left-side navigation pane of the DataWorks console, choose **More** > **Alert Contacts**. On the Alert Contacts page, you can view and specify alert contacts. To specify alert contacts, perform the steps as shown in the following figure.
    
    ![配置报警人信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1954602461/p354883.png)If the specified alert contacts cannot receive alert notifications after the alert is triggered, perform the following checks on the **Alert Contacts** page:
    
    -   Check whether the specified mobile phone numbers and email addresses of the alert contacts are correct.
        
    -   Check whether the alert contacts activated the mobile phone numbers and email addresses that are specified.
        
    
    **Note**
    
    -   Alibaba Cloud accounts and RAM users to which the AliyunDataWorksFullAccess policy is attached can specify contact information for other RAM users. For more information, see [Configure and view alert contacts](/help/en/dataworks/user-guide/configure-and-view-alert-contacts#task-2520742).
        
    -   If the specified mobile phone numbers or email addresses of alert contacts are incorrect, the system sends alert notifications that are related to overdue payments, service suspension, and release information to the recipients on the [Common Settings](https://notifications.console.alibabacloud.com/?accounttraceid=305499f3-d1c7-4b53-9eac-f056d6d100d4#/subscribeMsg) page. In this case, the specified alert contacts cannot receive the alert notifications.
        
    
-   **Alert notifications are not received in a DingTalk group after an alert is triggered.**
    
    Perform the following checks:
    
    -   **Check whether the webhook URL of the DingTalk chatbot is correct on the alert configuration page.**
        
        -   If baseline alert information or a custom alert rule is configured for an auto triggered task, check whether the webhook URL is correct. For example, check for extra spaces.
            
        -   If the alert rule is configured for a real-time synchronization task, check whether the token information of the DingTalk chatbot is correct.![实时同步报警](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1954602461/p354854.png)
            
    -   **Check whether the DingTalk chatbot is correctly configured.**
        
        When you add a chatbot to a DingTalk group for receiving alert notifications, set the Security Settings parameter to Custom Keywords and make sure that the keywords include DataWorks (case-sensitive). For more information, see the "Send alert notifications to a DingTalk group" section in the [Create a custom alert rule](/help/en/dataworks/user-guide/create-a-custom-alert-rule) topic.
        

## What do I do if I want to disable alerting for a task?

After a baseline is created and enabled, the intelligent monitoring service monitors all tasks in the baseline and their ancestor tasks. If a task in the baseline or an ancestor task of the task affects data generation of the monitored tasks in the baseline, the intelligent monitoring service generates an event alert and sends a notification to the task owner by default. For more information, see [Overview](/help/en/dataworks/overview-37#concept-rdp-ltn-42b).![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3191659951/p77371.png)

In the preceding figure, DataWorks has six tasks, and Tasks D and E belong to a baseline. The intelligent monitoring service monitors Tasks D and E and all their ancestor tasks. In this case, the intelligent monitoring service detects errors or slowdowns on Tasks A, B, D, and E. Tasks C and F are not monitored by the intelligent monitoring service.

-   If you want to disable alerting for Tasks D and E, contact the baseline owner to remove Tasks D and E from the baseline.
    
-   Tasks A and B are ancestor tasks of Tasks D and E and may affect data generation of the monitored tasks in the baseline. If an error or a slowdown occurs on Task A or B, the intelligent monitoring service generates an event alert and sends a notification to the task owner by default.
    
    If you want to disable alerting for Task A or B, contact the owners of Tasks D and E to delete the dependencies of Tasks D and E on Task A or B.
    

## Why is a baseline in the Empty Baseline state?

In the following scenarios, a baseline may enter the Empty Baseline state:

-   Scenario 1: A task can belong to only one baseline. If you add a task to another baseline, the system removes the task from the current baseline and adds the task to the specified baseline. If all tasks are removed from a baseline, the baseline enters the Empty Baseline state.
    
-   Scenario 2: On the day when a baseline is created, the baseline is in the Empty Baseline state. After you enable the baseline, a baseline instance is generated on the next day.
    
-   Scenario 3: You specify an invalid scheduling cycle for an auto triggered instance in an hour-level baseline.
    
    **Note**
    
    For example, the task is scheduled to run at 6:00 and 18:00 every day. The task has two cycles. When you configure the baseline, you need to specify 6:00 as the execution time of the task in the first cycle and 18:00 as the execution time of the task in the second cycle.
    

## Why is no alert notification sent for a baseline in the Overtime state?

Baseline monitoring is controlled by the baseline switch and enabled for tasks. Overtime is a baseline state, which indicates that the tasks in a baseline are incomplete when the committed completion time is reached. If all tasks in a baseline are run as expected, no alert is triggered even if the baseline enters the Overtime state. This is because the intelligent monitoring service cannot determine which task has an error.

If the baseline enters the Overtime state when all tasks are run as expected, consider the following reasons:

-   The time information configured for the baseline is improper.
    
-   The task dependency is improper.
    

## Can I disable alerting about the slowdowns of tasks?

The intelligent monitoring service notifies you of a task slowdown only if a task meets both of the following conditions:

-   The task is an ancestor task of an important task in the baseline.
    
-   Compared with the historical performance of the task, the task obviously slows down.
    

You can view the descendant task of a task in a baseline on the **Events** tab in Operation Center. Then, you can confirm the impact with the party whose baseline contains descendant tasks of your task.

-   If the task slowdown has a minor impact, you can ignore the alert.
    
-   If the task slowdown has a major impact, properly maintain your task.
    

## Why am I unable to receive an alert notification for a task error?

The intelligent monitoring service notifies you of a task error only if a task meets one of the following conditions:

-   The task is an ancestor task of a task in a baseline that is enabled. For more information about baselines, see [Manage baselines](/help/en/dataworks/user-guide/manage-baselines#concept-uwf-rzn-42b).
    
-   A custom alert rule is configured. For more information about how to configure a custom alert rule, see [Create a custom alert rule](/help/en/dataworks/user-guide/create-a-custom-alert-rule#task-2364475).
    

## What do I do if I receive an alert notification at night?

1.  Go to the Operation Center page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Operation Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Operation Center**.
    
2.  In the left-side navigation pane, click **Smart Baseline**. On the page that appears, click the **Events** tab.
    
3.  On the **Events** tab, disable alerting. You can disable alerting by using one of the following methods:
    
    -   Handle the event that triggers the alert. Then, alerting is temporarily disabled for the event.
        
        1.  Find the event and click **Handle** in the Actions column.
            
        2.  In the **Handle Event** dialog box, configure the **Handling Time** parameter.
            
        3.  Click **OK**.
            
            **Note**
            
            DataWorks records the event handling operation and temporarily disables alerting for the event when the event is being handled.
            
    -   Ignore the event that triggers the alert. Then, alerting is permanently disabled for the event.
        
        1.  Find the event and click **Ignore** in the Actions column.
            
        2.  In the **Ignore Event** message, click **OK**.
            
            **Note**
            
            DataWorks records the event ignoring operation and permanently disables alerting for the event.
