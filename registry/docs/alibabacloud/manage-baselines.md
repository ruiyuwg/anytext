To ensure that important nodes can be complete as expected, you can use the baseline management feature to add the nodes to a baseline and specify a committed completion time for the baseline. DataWorks calculates the estimated completion time of the nodes in the baseline based on the status of the nodes. If DataWorks estimates that a node in the baseline cannot be complete before the committed completion time, DataWorks sends you an alert notification. This topic describes how to create and manage baselines.

## Background information

An intelligent baseline enables DataWorks to identify an exception that prevents a node in the intelligent baseline from being complete as expected and notifies you about the exception at the earliest opportunity. This ensures that the data you want to obtain is generated as expected in scenarios where dependencies between nodes in a baseline are complex. For more information, see [Overview](/help/en/dataworks/overview-37#concept-2084394).

After a baseline is created and enabled, the baseline takes effect on the next day. You can go to the [Auto Triggered Instances](/help/en/dataworks/user-guide/view-auto-triggered-node-instances) page to view the execution result of the baseline.

## Limitations

-   Editions:
    
    Only DataWorks Standard Edition and more advanced editions support the baseline management feature. If you use DataWorks Basic Edition, you must upgrade it to DataWorks Standard Edition or a more advanced edition before you can use the baseline management feature. For more information, see [Features of DataWorks editions](/help/en/dataworks/user-guide/differences-among-dataworks-editions#concept-265336).
    
-   Permissions:
    
    -   Only Alibaba Cloud accounts and RAM users that are assigned the workspace administrator or tenant administrator role can be used to create baselines.
        
    -   Only tenant administrators and baseline owners can be used to enable, disable, delete, or modify baselines.
        
    
    If a user wants to perform the preceding operations, you can assign roles to the user. For more information, see [Add workspace members and assign roles to them](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them#task-2468428).
    
-   Alert notification methods:
    
    DataWorks supports alert notification methods, such as **email**, **text message**, **phone call**, **DingTalk chatbot**, and **webhook URL**. Take note of the limits that are described in the following table on the supported alert notification methods.
    
    **Alert notification method**
    
    **Supported region**
    
    **Supported DataWorks edition**
    
    **Description**
    
    **Text message**
    
    All regions
    
    DataWorks Standard Edition and more advanced editions
    
    If you want to use this method in other regions, refer to the following instructions: You can click the [link for application](https://wx-in-i.dingtalk.com/invite-page/weixin.html?bizSource=____source____&corpId=dingd0cf799086f27cb135c2f4657eb6378f&inviteCode=yQy6pP8EVh46YrX) or join the DataWorks DingTalk group for pre-sales or after-sales services. You can directly contact the DingTalk chatbot or on-duty technical personnel in the DingTalk group. The following figure shows the QR code of the DataWorks DingTalk group.![技术支持二维码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6843801671/p524796.png)
    
    **Phone call**
    
    All regions
    
    All editions
    
    Alert notifications that are sent by using phone numbers only in the Chinese mainland are supported.
    
    **Webhook**
    
    All regions
    
    DataWorks Basic Edition
    
    Alert notifications can be sent to DingTalk, Lark groups, or WeCom by using group webhook URLs.
    
    DataWorks Enterprise Edition
    
    In addition to the capabilities supported by DataWorks Basic Edition, you can also configure custom webhook URLs to receive alert notifications.
    
    **Note**
    
    If you want to use a custom webhook-based message sending service, refer to [Intelligent monitoring: Formats of alert messages sent by using a custom webhook](/help/en/dataworks/intelligent-monitoring-custom-webhook) to configure settings. After the configuration is complete, contact Alibaba Cloud DataWorks technical support for further processing.
    
    **Note**
    
    If you want to be notified by text message or phone call as a RAM user, you must add the RAM user as an alert contact on the Alert Contacts page. If an error is reported when a node is running, DataWorks sends an alert notification to the specified contacts. For more information, see [Configure and view alert contacts](/help/en/dataworks/user-guide/configure-and-view-alert-contacts#task-2520742).
    

## Create a baseline

1.  Go to the Operation Center page.
    

Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Operation Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Operation Center**.

3.  In the left-side navigation pane of the Operation Center page, choose **Node Alarm** > **Smart Baseline**.
    
4.  Create a baseline.
    
    1.  On the **Baselines** tab, click **\+ Create Baseline**.
        
    2.  In the Create Baseline panel, configure the basic information about the baseline.
        
        The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Baseline Name**
        
        The name of the baseline.
        
        **Workspace**
        
        The workspace of the nodes that you want to add to the baseline.
        
        **Note**
        
        When you select **nodes** that you want to add to a baseline, you can select only the nodes and workflows that belong to the selected **workspace**.
        
        **Owner**
        
        The name or ID of the baseline owner.
        
        **Baseline Type**
        
        The type of the baseline. Valid values:
        
        -   **Day-level Baseline**: DataWorks monitors the nodes in the baseline by day. Select this value for nodes that are scheduled by day.
            
        -   **Hour-level Baseline**: DataWorks monitors the nodes in the baseline by hour. Select this value for nodes that are scheduled by hour.
            
        
        **Nodes**
        
        The nodes that you want to add to the baseline.
        
        > The operation of adding a node to a baseline is actually migrating the current node from one baseline to another.
        
        -   **Node**: Enter the name or ID of a node and click **Add** on the right side. You can add multiple nodes to the baseline.
            
        -   **Workflow**: Enter the name or ID of a workflow and click **Add** on the right side. By default, if you add a workflow to the baseline, all nodes in the workflow are added to the baseline.
            
            **Note**
            
            We recommend that you add only the most descendant node in a workflow instead of all nodes in the workflow to a baseline. This way, all ancestor nodes that affect the data production of the most descendant node are monitored.
            
        
        **Priority**
        
        The priority of the baseline. A larger value specifies a higher priority for a baseline and higher priorities for nodes in the baseline. If scheduling resources are insufficient, a baseline that has a higher priority is preferentially scheduled. The configured priority takes effect for auto triggered node instances that are scheduled to run on the next day.
        
        **Note**
        
        -   ODPS nodes:
            
            The priorities of ODPS nodes are mapped to the priorities of MaxCompute computing tasks if the following conditions are met:
            
            -   The priority feature is enabled for MaxCompute projects.
                
            -   MaxCompute projects use the subscription computing resources.
                
            
            The priority of a MaxCompute job is calculated based on the following formula: 9 - Priority of a baseline in DataWorks.
            
        -   E-MapReduce (EMR) nodes:
            
            You can specify the priority mapping between the baseline to which EMR nodes belong and the YARN queue that is used to run the EMR nodes to adjust the final priority of the YARN queue. The priority of the YARN queue determines whether the EMR nodes can be preferentially scheduled. For more information, see [Configure mappings between baseline priorities and YARN queue priorities](/help/en/dataworks/user-guide/setting-baseline-priority-and-yarn-queue-mapping).
            
        
        Node priority is influenced by baseline priority. When a node is brought into the baseline monitoring scope, its priority is determined by the baseline priority and is propagated upwards to all related nodes and their upstream nodes within that scope.
        
        -   If a node affects the output of multiple baselines with different priorities, the node's priority is determined by the highest-priority baseline it affects.
            
        -   The baseline priority does not affect upstream nodes with cross-cycle dependencies.
            
        
        **Estimated Finish Time**
        
        The estimated completion time of the baseline. The time is calculated based on the average completion time of nodes in the baseline over a historical period of time (usually 10 days). If the estimated completion time is later than the alert time for the baseline, a baseline alert is triggered. For information about the baseline alerting mechanism, see [Appendix: Baseline alerting mechanism](#04dafbe037kfh).
        
        **Note**
        
        If the historical data is insufficient, the following message appears: **The completion time cannot be estimated due to the lack of historical data**.
        
        **Committed Finish Time**
        
        The deadline by which the nodes in the baseline are committed to be complete. DataWorks calculates the alert time for the baseline based on the value of this parameter. Configure this parameter based on the estimated completion time. Make sure that `the alert time is later than the estimated completion time of the baseline`.
        
        **Note**
        
        -   The alert time for a baseline is calculated by using the following formula: `Alert time = Committed completion time - Alert margin threshold`. If the estimated completion time is later than the `alert time`, an alert notification is sent. For example, the committed completion time for a baseline is set to `03:30`, and the alert margin threshold is set to 10 minutes. If DataWorks estimates that a node in the baseline cannot be complete before `03:20`, an alert notification is sent.
            
        -   For an hour-level baseline, you must specify hour-level instances and specify the committed completion time for the instances to ensure data production.
            
        -   The running duration of a node in a baseline may exceed 24 hours. Therefore, the system allows the committed completion time to be set to a time value within two days (`00:00 to 47:59`). If the running duration of a node in the baseline exceeds one day, you can set the committed completion time for the baseline to a specific point in time on the next day. For example, if the running duration of a node is **one and a half days**, you can set the committed completion time to `36:00`.
            
        
        **Alert Margin Threshold**
        
        The time interval between the alert time and the committed completion time for the baseline. The interval between the committed completion time and the estimated completion time of the nodes in a baseline must be at least 5 minutes. Otherwise, alerts are frequently triggered. We recommend that you configure the alert margin threshold based on the time required for the nodes in the baseline to complete. For more information, see [Configure an appropriate committed point in time and an appropriate alert margin threshold for a baseline](/help/en/dataworks/user-guide/configure-an-appropriate-committed-point-in-time-and-an-appropriate-alert-margin-threshold-for-a-baseline#concept-2200979).
        
5.  Configure the alert details of the baseline.
    
    You can specify whether to enable the alert notification feature for the baseline by turning on or off Enable Alerting. If you turn on Enable Alerting, you can specify the notification methods that are used to send a baseline alert if the data of a node in the baseline cannot be generated as expected. You can also specify the methods that are used to send an event alert notification if the nodes that affect the data production of the baseline or their ancestor nodes slow down or fail to run. Before you configure an alert for a baseline, we recommend that you learn the alerting mechanism of a baseline. For more information, see the [Appendix: Baseline alerting mechanism](#04dafbe037kfh) section in this topic.
    
    1.  Enable the alert notification feature.
        
        After you enable the alert notification feature, DataWorks detects issues based on alerting conditions and sends alert notifications by using the configured alert notification methods.
        
        -   If DataWorks estimates that a node in a baseline cannot be complete before the committed completion time, DataWorks sends a baseline alert notification by using the specified notification methods. For more information, see [Overview](/help/en/dataworks/overview-37#section-y6v-xvo-r2u).
            
        -   If a node in a baseline or an ancestor node of the node fails to run, or a node on the key path slows down, DataWorks sends an event alert notification by using the specified notification methods. You can view existing events on the **Events** tab. For more information, see [Manage events](/help/en/dataworks/user-guide/manage-events#concept-e5p-fc4-42b).
            
    
    **Note**
    
    If you disable the alert notification feature, no alert notifications are sent for the baseline. However, if the baseline is enabled, baseline instances are generated as expected, and the baseline priority still takes effect.
    
    3.  Select alert notification methods.
        
        After you enable the alert notification feature, you can select alert notification methods based on your business requirements. We recommend that you configure baseline alerts and event alerts for important nodes.
        
        **Important**
        
        -   Baseline and event alarms only monitor cycle instances with a business date of yesterday or the day before yesterday. Instances outside of this time period will not trigger an alarm.
            
        -   If alert notifications cannot be received, refer to [What do I do if I am unable to receive alert notifications after I configure an alert rule in Operation Center?](/help/en/dataworks/intelligent-monitoring#section-uy8-ke3-vtu) to troubleshoot the issue.
            
        
        ## Baseline alerts
        
        **Parameter**
        
        **Description**
        
        **Enable Alerting Configuration**
        
        Specifies whether to enable the baseline.
        
        **Note**
        
        If you disable the alert notification feature, no alert notifications are sent for the baseline. However, if the baseline is enabled, baseline instances are generated as expected, and the baseline priority still takes effect.
        
        **Alert Notification Method**
        
        -   The alert notification methods that are used to send alerts. The system can send alert notifications to the baseline owner, on-duty engineers on the current day in the specified shift schedule, or other specified recipients based on the configured alert notification methods such as **email**, **text message**, and **phone call**. For information about how to configure a shift schedule, see [Create and manage a shift schedule](/help/en/dataworks/user-guide/create-and-manage-a-shift-schedule).
            
        -   The system can also send alert notifications to applications such as DingTalk, WeCom, and Lark based on **DingTalk group chatbots** or **webhook URLs**. For information about how to configure a DingTalk chatbot, see [Scenario practices: Send alert notifications to a DingTalk group](/help/en/dataworks/user-guide/create-a-custom-alert-rule#section-u55-nxf-x4l).
            
        
        **Note**
        
        -   You can click **Check Contact Information** or **Send Test Message** to check whether alert notifications can be successfully sent.
            
        -   You can select Phone for the Alert Notification Method parameter only in DataWorks Professional Edition or more advanced editions.
            
        -   If you select Phone as an alert notification method, DataWorks filters alert calls to prevent recipients from frequently receiving alert calls. A recipient can receive up to one alert call in 20 minutes. Other alert calls are downgraded and converted to text messages.
            
        
        **Maximum Alerts**
        
        The maximum number of alert notifications that can be sent. If the maximum number is exceeded, no alert notifications are sent.
        
        **Minimum Alert Interval**
        
        The minimum interval at which alert notifications are sent.
        
        **Alerting Do-Not-Disturb Period**
        
        DataWorks does not send alert notifications during the period of time that is specified by this parameter.
        
        For example, if you set this parameter to `00:00` to `08:00` for the baseline and an exception occurs on a node in the baseline within this period of time, DataWorks does not send baseline or event alert notifications. If the exception still exists after 08:00, DataWorks sends an alert notification.
        
        ## Event alerts
        
        **Parameter**
        
        **Description**
        
        **Event Type**
        
        The type of the event that triggers alerts. Valid values:
        
        -   **Error**: indicates that a node in the baseline fails to run.
            
        -   **Slow**: indicates that the time required by a node to be complete is significantly longer than the average time required for the node to be complete in the historical periods.
            
        
        **Alert Notification Method**
        
        -   The alert notification methods that are used to send alerts. The system can send alert notifications to the node owner, on-duty engineers on the current day in the specified shift schedule, or other specified recipients based on the configured alert notification methods such as **email**, **text message**, and **phone call**. For information about how to configure a shift schedule, see [Create and manage a shift schedule](/help/en/dataworks/user-guide/create-and-manage-a-shift-schedule).
            
        -   The system can also send alert notifications to applications such as DingTalk, WeCom, and Lark based on **DingTalk group chatbots** or **webhook URLs**. For information about how to configure a DingTalk chatbot, see [Scenario practices: Send alert notifications to a DingTalk group](/help/en/dataworks/user-guide/create-a-custom-alert-rule#section-u55-nxf-x4l).
            
        
        **Note**
        
        -   You can click **Check Contact Information** or **Send Test Message** to check whether alert notifications can be successfully sent.
            
        -   You can select Phone for the Alert Notification Method parameter only in DataWorks Professional Edition or more advanced editions.
            
        -   If you select Phone as an alert notification method, DataWorks filters alert calls to prevent recipients from frequently receiving alert calls. A recipient can receive up to one alert call in 20 minutes. Other alert calls are downgraded and converted to text messages.
            
        
        **Maximum Alerts**
        
        The maximum number of alert notifications that can be sent. If the maximum number is exceeded, no alert notifications are sent.
        
        **Minimum Alert Interval**
        
        The minimum interval at which alert notifications are sent.
        
        **Alerting Do-Not-Disturb Period**
        
        DataWorks does not send alert notifications during the period of time that is specified by this parameter.
        
        For example, if you set this parameter to `00:00` to `08:00` for the baseline and an exception occurs on a node in the baseline within this period of time, DataWorks does not send baseline or event alert notifications. If the exception still exists after 08:00, DataWorks sends an alert notification.
        
    4.  Click **OK**. The baseline is created.
        

## Add nodes to a baseline

A node can be added to only one baseline. For example, if Node A has been added to Baseline A, when you create Baseline B and add Node A to Baseline B, Node A is removed from Baseline A and added to Baseline B.

**Note**

If a baseline that is enabled contains no nodes, the baseline becomes an empty baseline, and a baseline instance in the Empty Baseline state is generated. For more information about empty baselines, see [Why is a baseline in the Empty Baseline state?](/help/en/dataworks/intelligent-monitoring#section-1on-03o-ug8)

You can use one of the following methods to add nodes to a baseline:

-   On the **Baselines** tab, click **\+ Create Baseline** to create a baseline, and add nodes to the baseline.
    
-   On the **Auto Triggered Tasks** page, find the desired node and choose **More** > **Add Baseline** in the Actions column to add the node to a baseline.
    
    **Note**
    
    If you want to use this method to add multiple nodes to a baseline, you can add the nodes to only a new baseline. You cannot add the nodes to an existing baseline.
    
    -   Add a single node to a baseline
        
        Find the node that you want to add to a baseline and choose **More** > **Add Baseline** in the **Actions** column.
        
    -   Add multiple nodes to a baseline
        
        Select multiple nodes that you want to add to a baseline and choose **Actions** > **Add Baseline** in the lower part of the page.
        

## Manage baselines

On the Baselines tab, you can specify filter conditions such as **Owner**, **Workspace**, **Baseline Name**, and **Priority** to search for the desired baseline and perform the following operations on the baseline:

-   **View** **Details**: Click View Details to view the basic information about the baseline.
    
-   **Modify**: Click Modify to modify the baseline.
    
-   **View** **Change Records**: Click View Change Records to view the historical change records of the baseline.
    
-   **Enable** or **Disable**: Click Enable or Disable to enable or disable the baseline. Instances can be generated for a baseline only after you enable the baseline. A baseline instance is generated for a baseline every day if the baseline is enabled. You can view the details of the daily baseline instances on the Baseline Instances tab. For more information, see [Manage baseline instances](/help/en/dataworks/user-guide/manage-baseline-instances#concept-uwf-rzn-42b).
    
-   **Delete**: Click Delete to delete the baseline.
    

## **Appendix: Baseline alerting mechanism**

If the baseline that you create is enabled, and you turn on the alerting switch for the baseline, the system sends you an alert notification when a baseline alert is triggered. You can configure the **alert margin threshold** and **committed completion time** for the baseline based on the **estimated completion time** for the baseline. DataWorks can estimate the latest completion time for each node within the monitoring scope based on the average completion time of the nodes in the most recent 10 days. DataWorks also monitors the status of nodes in a baseline. If DataWorks predicts that a node in the baseline cannot finish running before the alert time that is obtained by subtracting the alert margin threshold from the committed completion time, DataWorks sends an alert notification to the alert contact that you specify when you configure the baseline.

**Note**

If the alert margin threshold and committed completion time that you specify are inappropriate, the triggered alert may not meet your expectations. For more information, see [Configure an appropriate committed point in time and an appropriate alert margin threshold for a baseline](/help/en/dataworks/user-guide/configure-an-appropriate-committed-point-in-time-and-an-appropriate-alert-margin-threshold-for-a-baseline#concept-2200979).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9321533671/CAEQMxiBgMC_w8X7pxkiIDczZTkwMzI2MTIwMjQ1MTc5ZDMxY2E1NmRhMzQ2Njg14724835_20241022135007.254.svg)

-   Alert rule for a baseline before a node in the baseline is run:
    
    **Note**
    
    The system can estimate the completion time for each node within the monitoring scope of a baseline on the current day. The completion time is estimated based on the average completion time of the nodes within the monitoring scope in the most recent 10 days. The system can predict nodes that cannot finish running before the alert time for the baseline and send an alert notification that contains exception information to the specified alert contact at the earliest opportunity before the nodes in the baseline start to run on that day. A baseline can help you identify exceptions and receive an alert notification about the exceptions at the earliest opportunity in scenarios in which dependencies between nodes in the baseline are complex and the dependencies frequently change.
    
    -   If the estimated completion time for a node in a baseline is later than the alert time for the baseline, a baseline alert is triggered. You can view the estimated completion time of a baseline on the **Baselines** tab. For more information, see the [Create a baseline](/help/en/dataworks/user-guide/manage-baselines#section-9lm-epc-l8k) section in this topic.
        
    -   If the estimated completion time of an ancestor node of a node in a baseline is later than the alert time for the baseline, a baseline alert is triggered. The estimated completion time for the ancestor node is calculated based on the average completion time of the ancestor node in the most recent 10 days.
        
-   Alert rule for a baseline when a node in the baseline is running:
    
    If the completion time for a node in a baseline is later than the alert time for the baseline, a baseline alert is triggered.
    

## **What to do next**

After you create the baseline, you can perform the following operations:

-   [View baseline instances](/help/en/dataworks/user-guide/manage-baseline-instances#concept-uwf-rzn-42b): A baseline instance is generated for a baseline every day if the baseline is enabled. You can view the running details of a baseline on the Baseline Instance tab.
    
-   [EMR nodes](/help/en/dataworks/user-guide/setting-baseline-priority-and-yarn-queue-mapping): You can specify a priority mapping between the baseline to which EMR nodes belong and the YARN queue that is used to run the EMR nodes to adjust the final priority of the YARN queue. The priority of the YARN queue determines whether the EMR nodes can be preferentially scheduled.
    
-   [View baseline operation records](/help/en/dataworks/user-guide/view-operation-records-in-operation-center#task-2170579): You can view the operation records of a baseline in Operation Center.
