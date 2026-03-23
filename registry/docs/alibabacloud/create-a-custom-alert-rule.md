You can use custom alert rules to monitor the status or resource usage of specified nodes based on your business requirements. This helps you identify and handle exceptions at the earliest opportunity. This topic describes how to create a custom alert rule on the Rule Management page. This topic also describes how to add a DingTalk chatbot and obtain the webhook URL of the chatbot.

## Limits

-   Custom alert rules take effect only on **auto triggered node instances**. The results of test instances and data backfill instances that are generated for auto triggered nodes are not monitored.
    
-   Custom alert rules support the following alert notification methods: **email**, **text message**, **phone call,** **DingTalk chatbot**, and **webhook URL**. Take note of the following limits on the supported alert notification methods:
    
    -   **Phone call**: Phone call alerting is supported only for mobile phone numbers in the Chinese mainland.
        
    -   **Webhook URL**:
        
        -   DataWorks Basic Edition supports alert notification to DingTalk, Lark, and WeCom based on group-based webhook URLs.
            
        -   In addition to the feature of sending alert notifications based on group-based webhook URLs in Basic Edition, DataWorks Enterprise Edition also allows you to configure custom webhook URLs to send alert notifications.
            
    
    **Note**
    
    For information about how to configure a custom webhook, see [Intelligent monitoring: Formats of alert messages sent by using a custom webhook](/help/en/dataworks/intelligent-monitoring-custom-webhook). After the configuration is complete, [submit a ticket](https://smartservice.console.alibabacloud.com/?#/ticket/add/?productId=80) to contact Alibaba Cloud DataWorks technical support for further processing.
    
-   You can configure trigger conditions such as **Instances with Errors, Proportion of Instances with Errors, and Node Logs Contain Keywords** only in DataWorks Professional Edition or a more advanced edition. For more information, see [Features of DataWorks editions](/help/en/dataworks/user-guide/differences-among-dataworks-editions#concept-265336). For information about how to activate DataWorks, see [Purchasing guide](/help/en/dataworks/purchase-guide#concept-1215588).
    
-   Only **rule owners**, **tenant administrators**, and **Alibaba Cloud accounts** can modify alert rules.
    

## Precautions

The following table describes the monitoring time ranges that correspond to different alert trigger conditions when you use custom alert rules to monitor auto triggered node instances.

**Monitoring time range**

**Trigger condition**

**Description**

Data timestamp (previous day, represented by T)

-   Instance Generated
    
-   Fluctuation of Instance Count
    
-   Complete
    
-   Instances with Errors
    
-   Proportion of Instances with Errors
    
-   Node Logs Contain Keywords
    

DataWorks monitors auto triggered node instances whose data timestamp is the previous day and scheduling time is the current day. If one of the trigger conditions is met, an alert is reported.

Data timestamp (previous day, represented by T) and the day before the previous day (represented by T-1)

-   Incomplete
    
-   Incomplete in Cycle
    
-   Timed Out
    

DataWorks monitors auto triggered node instances whose data timestamp is the previous day and scheduling time is the current day and auto triggered node instances whose data timestamp is the day before the previous day and scheduling time is the previous day. If one of the trigger conditions is met, an alert is reported.

Data timestamp (previous day, represented by T), the day before the previous day (represented by T-1), and two days before the previous day (represented by T-2)

-   Error
    
-   Error Persisting After Automatic Rerun of Node
    

DataWorks monitors the following auto triggered node instances: auto triggered node instances whose data timestamp is the previous day and scheduling time is the current day, auto triggered node instances whose data timestamp is the day before the previous day and scheduling time is the previous day, and auto triggered node instances whose data timestamp is two days before the previous day and scheduling time is the day before the previous day. If one of the trigger conditions is met, an alert is reported.

**Note**

For an auto triggered node instance that is not within the required time range, an alert is not reported even if the instance meets a trigger condition. For more information about monitoring rules that correspond to different trigger conditions, see the [Create a custom alert rule](#section-us8-vdg-t65) section in this topic.

## **Go to the Rule Management page**

1.  Go to the Operation Center page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Operation Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Operation Center**.
    
2.  In the left-side navigation pane of the Operation Center page, choose **Alarm** > **Rule Management**.
    
    **Note**
    
    You can also go to the Auto Triggered Nodes page, select multiple nodes, and then choose Actions > Add Alert Rule at the bottom to create a custom alert rule for the nodes. For more information, see [View and manage auto triggered tasks](/help/en/dataworks/user-guide/view-and-manage-auto-triggered-nodes#task-2056582).
    

## Create a custom alert rule

On the Rule Management page, you can create a custom alert rule based on your business requirements.

### **Configure parameters in the Basic Information section**

**Parameter**

**Description**

**Rule Name**

The name of the custom alert rule.

**Object Type**

The type of object that you want to monitor. Valid values: **Node**, **Baseline**, **Workspace**, **Workflow**, **Exclusive Resource Group for Scheduling**, and **Exclusive Resource Group for Data Integration**.

**Note**

If this parameter is set to Baseline, you can monitor only the status of nodes that belong to a specified baseline. If you also want to monitor the status of ancestor nodes of the nodes that belong to the baseline, see [Overview](/help/en/dataworks/overview-37#concept-2084394).

**Rule Object**

The object that you want to monitor. To add an object that you want to monitor, enter the name or ID of the object in the Rule Object field, select the object that appears, and then click **Add**.

You can add the following types of objects. The maximum number of objects that you can add varies based on the object type you selected.

-   **Node**: You can add a maximum of 50 nodes.
    
-   **Baseline**: You can add a maximum of 5 baselines.
    
-   **Workflow**: You can add a maximum of 5 workflows.
    
-   **Workspace**: You can add only one workspace.
    

**Add to Whitelist**

Specifies the nodes that are in the monitoring scope but you do not want to monitor.

This parameter is required only if you set the **Object Type** parameter to **Baseline**, **Workspace**, or **Workflow**. To add a node to the whitelist, enter the name or ID of the node in the **Add to Whitelist** field and click **Add**.

**Note**

You can add a maximum of 50 nodes to the whitelist. The nodes that you add to the whitelist are not monitored.

**Resource Group Name**

The name of the exclusive resource group that you want to monitor.

This parameter is required only if you set the **Object Type** parameter to **Exclusive Resource Group for Scheduling** or **Exclusive Resource Group for Data Integration**.

### **Configure parameters in the Trigger Condition section**

**Note**

In the logic of a custom alert rule, a node is complete if the node is in the frozen state.

**Object type**

**Trigger Condition**

**Description**

**Node**, **Baseline**, **Workspace**, or **Workflow**

**Complete**

Nodes are monitored from the time when they start to run. When the nodes are successfully run, an alert is reported.

-   If the Object Type parameter is set to **Baseline** or **Workflow**, an alert is reported only after all nodes in the specified baseline or workflow are successfully run.
    
-   If the Object Type parameter is set to **Node** and multiple nodes are added, an alert is reported only after all nodes are complete.
    
-   If the Object Type parameter is set to **Workspace**, you cannot select **Complete** from the Trigger Condition drop-down list.
    

**Note**

For a node that is scheduled to run by hour, the node is considered complete only after the node is successfully run in all cycles.

**Incomplete**

Nodes are monitored from the time when they start to run. If the nodes are still running at a specified point in time, an alert is reported.

**Note**

Alert rules of this trigger condition type are different from alert policies provided by using the intelligent baseline feature. The intelligent baseline feature can be used to detect an exception that prevents a node in a baseline from being complete on time. If an exception is detected, the system sends you an alert notification about the exception at the earliest opportunity. For more information, see [Overview](/help/en/dataworks/overview-37#concept-2084394).

Sample scenarios:

-   Scenario 1: A node is scheduled to run at 01:00, and you set the alert time to 02:00. If the node is still running at 02:00, an alert is reported.
    
-   Scenario 2: A node is scheduled to run every hour from 00:00 to 23:59. You set the alert time to 12:00. In this case, an alert is reported every day.
    
-   Scenario 3: You set the completion time for a baseline to 10:00. If a node in the baseline is still running at 10:00, an alert is reported.
    

**Note**

For a node that is scheduled to run by hour or minute, the system checks whether the node is complete at a specified point in time in all cycles on the current day.

**Error**

Nodes are monitored from the time when they start to run. If an error occurs when the nodes are running, an alert is reported.

**Note**

If an error occurs for a node instance, the ![3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9052927851/p8786.png) icon is displayed in the General column on the **Auto Triggered Instances** page under **Auto Triggered Node O&M** in **Operation Center**.

-   If the Object Type parameter is set to **Baseline**, **Workspace**, or **Workflow**, an alert is reported when an error occurs on a node in the specified baseline, workspace, or workflow.
    
-   An alert is reported each time an error occurs when a node is running. For example, you set the number of times that an alert is reported each time an error occurs to 2. If a node is rerun twice and an error occurs during each rerun operation, an alert is reported for four times.
    
-   If you want an alert to be reported only if an error persists after a node is automatically rerun, you can select **Error Persisting After Automatic Rerun of Node** from the Trigger Condition drop-down list.
    

**Instances with Errors**

An alert is reported if the number of instances on which an error occurs on the current day reaches a specified threshold. The error can be a failed data quality check or a failure in execution of code logic.

If the Object Type parameter is set to **Workspace** and the **Trigger Condition** parameter is set to **Instances with Errors**, you must specify a threshold.

**Note**

-   This trigger condition is available only for DataWorks Professional Edition or a more advanced edition.
    
-   Instances on the `current day` refer to the auto triggered node instances whose data timestamp is the previous day and scheduling time is the current day.
    

**Proportion of Instances with Errors**

An alert is reported if the proportion of the number of instances on which an error occurs in the workspace to the total number of instances on the current day reaches a specified threshold. If the Object Type parameter is set to **Workspace** and the **Trigger Condition** parameter is set to **Proportion of Instances with Errors**, you must specify a threshold.

**Note**

-   This trigger condition is available only for DataWorks Professional Edition or a more advanced edition.
    
-   Instances on the `current day` refer to the auto triggered node instances whose data timestamp is the previous day and scheduling time is the current day.
    

**Node Logs Contain Keywords**

An alert is reported if run logs of nodes contain keywords on the current day. If the Object Type parameter is set to **Workspace** and the **Trigger Condition** parameter is set to **Node Logs Contain Keywords**, you must specify keywords.

**Note**

-   This trigger condition is available only for DataWorks Professional Edition or a more advanced edition.
    
-   Instances on the `current day` refer to the auto triggered node instances whose data timestamp is the previous day and scheduling time is the current day.
    
-   If you want to use this trigger condition for an exclusive resource group that is created before August 24, [submit a ticket](https://smartservice.console.alibabacloud.com/) to upgrade the configurations of the resource group. Otherwise, you cannot receive related alerts.
    

**Incomplete in Cycle**

If nodes are still running at the end of a specified cycle, an alert is reported. In most cases, you can configure this trigger condition for node instances that are scheduled to run by hour.

If the Trigger Condition parameter is set to **Incomplete in Cycle** for workflows, the system monitors nodes that are scheduled to run by day, hour, or minute in the workflows based on the cycle number (N) that you specified. If the number of node instances for a node is less than N, the system ignores the alerts reported for the node.

For example, you set the cycle number to 3, and two nodes are contained in a workflow. The following examples show alerting and monitoring details:

-   Node A is scheduled to run every 2 hours, and each run operation takes 25 minutes. If Node A starts to run at 00:00 every day, the node runs for 12 times within 24 hours. The first cycle starts at 00:00, and the third cycle starts at 04:00. If the node is run as expected, the node instance in the third cycle finishes running at 04:25. If you set the trigger condition to **Incomplete in Cycle** and set the alert time to 04:30 for the node instance in the third cycle, an alert is reported when the node instance in the third cycle is still running at 04:30.
    
-   Node B is scheduled to run every 10 minutes, and each run operation takes 2 minutes. If Node B starts to run at 00:00 every day, the node runs for six times within 1 hour. The first cycle starts at 00:00, and the third cycle starts at 00:20. If the node is run as expected, the node instance in the third cycle finishes running at 00:22. If you set the trigger condition to **Incomplete in Cycle** and set the alert time to 00:23 for the node instance in the third cycle, an alert is reported when the node instance in the third cycle is still running at 00:23.
    

**Timed Out**

Nodes are monitored from the time when they start to run. If the nodes are still running after a specified period of time ends, an alert is reported. In most cases, you can configure this trigger condition to monitor the duration of a node.

**Error Persisting After Automatic Rerun of Node**

Nodes are monitored from the time when they start to run. If an error persists after the nodes are rerun, an alert is reported.

**Note**

If you want an alert to be reported each time an error occurs when a node is running, you can set the trigger condition to **Error**.

**Instance Generated**

You can set the trigger condition to Instance Generated only when the Object Type parameter is set to **Workspace**.

**Fluctuation of Instance Count**

You can set the trigger condition to Fluctuation of Instance Count only when the Object Type parameter is set to **Workspace**. DataWorks generates auto triggered node instances that need to run the next day before 24:00 every day. When the number of auto triggered node instances that are generated in your workspace significantly fluctuates, in comparison with the average number of auto triggered node instances that are historically generated in the workspace, an alert is reported.

**Exclusive Resource Group for Scheduling** or **Exclusive Resource Group for Data Integration**

**Resource Group Usage**

If the value of the **Resource Group Usage** parameter is greater than a specific percentage for a specific period of time, an alert is reported.

Example: If the value of the **Resource Group Usage** parameter is greater than 50% for 15 minutes, an alert is reported.

**Number of Instances Waiting for Resources in Resource Group**

If the value of the **Number of Instances Waiting for Resources in Resource Group** parameter is greater than a specific number for a specific period of time, an alert is reported.

Example: If the value of the **Number of Instances Waiting for Resources in Resource Group** parameter is greater than 10 for 15 minutes, an alert is reported.

### **Configure parameters in the Alert Details section**

**Alert notification method**

**Alert contact**

**Description**

**Mail**, **SMS****, or Telephone**

You can select **Node Owner**, **Shift Schedule**, or **Others** for Alert Contact.

-   After you configure the Alert Contact parameter, Check Contact Information is displayed below Alert Contact. You can click **Check Contact Information** to check whether the mobile phone number or email address is correct.
    
-   You can use the phone call-based alerting feature only in DataWorks Professional Edition or a more advanced edition.
    
-   If you select **Telephone** for **Alert Notification Method**, you must also select the **To prevent a large number of alarm calls from being generated in a short period of time, DataWorks filters alarm calls. The same user receives at most one alarm call within 20 minutes, and Other Alarm calls will be downgraded to text messages. Please know** check box.
    
-   If you want to select Shift Schedule for Alert Contact, you must configure a shift schedule first. For more information about how to configure a shift schedule, see [Create and manage a shift schedule](/help/en/dataworks/user-guide/create-and-manage-a-shift-schedule#task-2081311).
    
    **Note**
    
    -   After you configure a shift schedule, DataWorks sends an alert notification only to the main engineer in charge when an alert is reported for the first two times and sends an alert notification to both the main engineer and secondary engineer in charge when the alert is reported for the third time.
        
    -   Phone call alerting is supported only for mobile phone numbers in the Chinese mainland. If you want alert notifications to be sent to a mobile phone number outside the Chinese mainland, you must create a custom webhook. After DataWorks sends an alert notification to the custom webhook, the custom webhook forwards the alert notification to the mobile phone number. For more information, see [Scheme to push monitoring and alerting information to a custom webhook](/help/en/dataworks/user-guide/user-defined-webhook-docking-solution#aa16e437334zr).
        
    

**DingTalk Chatbot** or **WebHook**

You can specify members in a group.

-   Supports @mention settings: @all or specific members.
    
-   You can click **Send Test Message** in the Actions column to check whether an alert notification can be sent. If the alert contact does not receive the alert notification, troubleshoot the issue. For more information, see [Intelligent monitoring](/help/en/dataworks/intelligent-monitoring#concept-2414941).
    
-   You can specify only keywords for the security configuration of a DingTalk chatbot. The keywords must contain DataWorks.
    

### **Configure parameters in the Alerting Frequency Control section**

**Parameter**

**Description**

**Maximum Alerts**

The maximum number of times an alert is reported. If the number of times an alert is reported exceeds the specified threshold, the alert is no longer reported.

**Minimum Alert Interval**

The minimum interval at which an alert is reported.

**Alerting Do-Not-Disturb Period**

The system does not send alert notifications during the period of time that is specified by this parameter.

For example, you set the Trigger Condition parameter to **Timed Out**, **Error**, or **Incomplete** for a node and set the Alerting Do-Not-Disturb Period parameter to the period of time from `00:00` to `08:00`. In this case, the system does not send an alert notification during this period of time. If the node times out, an error occurs on the node, or the node is not complete at 08:00, the system sends an alert notification.

Click OK. An alert rule is created. On the **Rule Management** page, you can click **View Details**, **Disable, Enable**, or **Delete** in the Actions column that corresponds to a rule to perform the related operation.

-   **View Details**: View basic information about the desired rule.
    
-   **Enable** or **Disable**: Enable or disable a rule. You can enable a rule to monitor the status of a node for which the rule is configured. You can view alert details on the Alert Management page. For more information, see [View alert details](/help/en/dataworks/user-guide/view-alert-details#concept-nvk-524-42b).
    
-   **Delete**: Delete a rule.
    

### **Modify a custom alert rule**

Only **rule owners**, **tenant administrators**, and **Alibaba Cloud accounts** can modify alert rules.

## Scenario practices: Send alert notifications to a DingTalk group

1.  Open the DingTalk group to which you want the system to send alert notifications and click the **Group Settings** icon in the upper-right corner.
    
2.  In the Group Settings panel, click **Group Assistant**.
    
3.  In the **Group Assistant** panel, click **Add Robot**.
    
4.  In the **ChatBot** dialog box, click the ![新增](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2522622561/p71067.png) icon.
    
5.  In the **Please choose which robot to add** section, click **Custom**.
    
6.  In the **Robot details** message, click **Add**.
    
7.  In the **Add Robot** dialog box, configure the parameters.
    
    **Parameter**
    
    **Description**
    
    **Chatbot name**
    
    The name of the custom chatbot.
    
    **Add to Group**
    
    The DingTalk group to which the chatbot is added. This group cannot be changed.
    
    **Custom Keywords**
    
    After you specify custom keywords, messages can be sent only if these messages contain at least one of the specified keywords. You must add DataWorks as a keyword. This keyword is case-sensitive.
    
    **Note**
    
    You can specify a maximum of 10 keywords. A message can be sent only if it contains at least one of the specified keywords.
    
8.  Read the terms of service, select **I have read and accepted <<DingTalk Custom Robot Service Terms of Service>>**, and then click **Finished**.
    
9.  After you complete the security settings, copy the **webhook URL** of the chatbot and click **Finished**.
    
    **Important**
    
    Keep the webhook URL confidential. If the webhook URL is leaked, your business is at risk.
    
10.  Go to the [Rule Management](#section-us8-vdg-t65) page and click **Create Custom Rule**. In the Create Custom Rule dialog box, set the Alert Notification Method parameter to **DingTalk Chatbot**, and paste the **chatbot webhook URL** that you copied from DingTalk in the **Webhook URL** column in the **DingTalk Chatbot** section.
     

## **FAQ**

Q: How do I prevent excessive alert notifications?

A: Configure the Maximum Alerts Minimum, Alert Interval Alerting, and Do-Not-Disturb Period parameters in the Alerting Frequency Control section. For more information, see the [Configure parameters in the Alerting Frequency Control](#ab6ff18b5amds) section in this topic.
