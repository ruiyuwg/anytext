The Alarm feature allows you to configure custom alert rules to monitor the status and resource usage of nodes. This feature also allows you to configure intelligent baselines to ensure that the data you want to obtain is generated as expected in scenarios where dependencies between nodes are complex. In addition, you can configure custom O&M rules for resource groups based on your business requirements to implement automated O&M for node instances that are run on the resource groups.

## Modules

The following table describes the modules that are provided by the Alarm feature.

**Module**

**Description**

[Smart Baseline](/help/en/dataworks/overview-37#concept-2084394)

A baseline enables DataWorks to identify an exception that prevents a node in the baseline from being completed on schedule and send you an alert notification about the exception at the earliest opportunity. This ensures that the data you want to obtain is generated as expected in scenarios where dependencies between nodes in the baseline are complex. On the Smart Baseline page, you can perform the following operations:

-   Create and manage a baseline. For more information, see [Manage baselines](/help/en/dataworks/user-guide/manage-baselines#concept-uwf-rzn-42b).
    
-   View baseline instances and the details of a specific baseline instance. For more information, see [Manage baseline instances](/help/en/dataworks/user-guide/manage-baseline-instances#concept-uwf-rzn-42b).
    
-   View events and the details of a specific event. For more information, see [Manage events](/help/en/dataworks/user-guide/manage-events#concept-e5p-fc4-42b).
    

[Rule Management](/help/en/dataworks/user-guide/create-a-custom-alert-rule#task-2364475)

In the left-side navigation pane of the Operation Center page, choose **Alarm** > **Rule Management**. On the page that appears, you can manage global alert rules and configure custom alert rules based on your business requirements.

-   Global alert rules: DataWorks provides built-in global alert rules to monitor the status of auto triggered nodes. This prevents exceptions that occur on auto triggered nodes from affecting the scheduling and running of auto triggered node instances. The built-in global alert rules are not workspace-level alert rules. For more information, see [Status monitoring of auto triggered nodes](/help/en/dataworks/overview-29#section-1kl-7zi-cf0).
    
-   Custom alert rules:
    
    -   In DataWorks, auto triggered node instances are generated when an auto triggered node is periodically scheduled. You can configure custom alert rules for **auto triggered nodes** to monitor the status of auto triggered node instances. For more information, see [Status monitoring of auto triggered node instances](/help/en/dataworks/overview-29#section-1kl-7zi-cf0).
        
    -   You can configure custom alert rules for real-time computing nodes to monitor the status of the nodes. When you configure custom alert rules for real-time computing nodes, you must set the **Object** parameter to **Real-time Computing Nodes**. For more information, see [Status monitoring of real-time computing nodes](/help/en/dataworks/overview-29#section-1kl-7zi-cf0).
        
    -   You can configure custom alert rules for exclusive resource groups to monitor the resource usage of the exclusive resource groups. When you configure custom alert rules for exclusive resource groups, you must set the **Object Type** parameter to **Exclusive Resource Groups for Data Integration** or **Exclusive Resource Groups for Scheduling**. For more information, see [Resource usage](#li-013-jri-kbv).
        

[Alert Management](/help/en/dataworks/user-guide/view-alert-details#concept-nvk-524-42b)

In the left-side navigation pane of the Operation Center page, choose **Alarm** > **Alert Management**. On the page that appears, you can view alerts, including alerts that are generated based on custom alert rules, alerts that are generated based on global alert rules, and baseline alerts.

[Schedule](/help/en/dataworks/user-guide/create-and-manage-a-shift-schedule#task-2081311)

In the left-side navigation pane of the Operation Center page, choose **Alarm** > **Schedule**. On the page that appears, you can configure a custom shift schedule. When you specify a notification method for an alert rule, you can select the shift schedule. This way, alert notifications can be sent to the on-duty engineer based on the shift schedule.

**Note**

You can configure both primary and secondary on-duty engineers in a shift schedule. By default, an alert notification is sent to the primary on-duty engineer. If the primary on-duty engineer does not handle the alert after the alert notification is sent twice, the subsequent alert notifications are sent to both the primary and secondary on-duty engineers.

[Automatic](/help/en/dataworks/user-guide/automatic-operation-and-maintenance#task-2086541)

You can create O&M rules for exclusive resource groups and associate the O&M rules with created alert rules based on your business requirements. If an associated alert rule is triggered, DataWorks performs automated O&M on the node instances that are run on the specified exclusive resource groups and that meet the specified **filter conditions**.

**Note**

You can associate O&M rules only with the alert rules configured for exclusive resource groups for scheduling.

## Node status monitoring

### Monitored objects

You can configure custom alert rules and intelligent baselines to monitor resource usage and the status of auto triggered nodes, auto triggered node instances, and real-time computing nodes.

-   Status of auto triggered nodes
    
    DataWorks generates **auto triggered node instances** that are scheduled to run on the next day for an **auto triggered node** every night. DataWorks provides built-in global alert rules to periodically monitor **auto triggered nodes** and ensure that instances are generated and scheduled for the auto triggered nodes as expected. If an exception occurs, DataWorks sends an alert notification. The built-in global alert rules are not workspace-level alert rules. These rules include **alert rules for isolated nodes** and **alert rules for nodes that form a loop**.
    
    **Rule type**
    
    **Monitored object**
    
    **Trigger condition**
    
    **Description**
    
    Global alert rule
    
    Isolated nodes: This type of node does not depend on other nodes.
    
    An alert notification is automatically sent when an isolated node is generated. We recommend that you handle the alert at the earliest opportunity.
    
    **Note**
    
    In DataWorks, except the root node in your workspace, each auto triggered node that you created must have ancestor nodes. If no ancestor nodes are configured for an auto triggered node, the auto triggered node cannot be scheduled. Isolated nodes cannot be automatically scheduled to run. If an isolated node has a large number of descendant nodes, serious consequences may occur.
    
    -   DataWorks scans the status of auto triggered nodes at 09:00:00, 12:00:00, and 16:00:00 every day. If an isolated node or a node dependency loop is detected, DataWorks sends an alert notification by using the specified method. However, exceptions that are generated within the 10 minutes before a scan are not included in the current scanning cycle. These exceptions are included in the subsequent scanning cycle.
        
    -   Global alert rules are built-in rules that are automatically created in DataWorks. If an alert is triggered based on a global alert rule, an alert notification is sent to a node owner by text message or email by default. You can change the alert contact for global alert rules on the **Rule Management** page.
        
    -   You can disable global alert rules on the **Rule Management** page.
        
    
    Nodes that form a loop: This type of node depends on their descendant nodes and forms a dependency loop with their descendant nodes.
    
    An alert notification is automatically sent after a node dependency loop is formed. We recommend that you handle the alert at the earliest opportunity.
    
    **Note**
    
    This type of node cannot be automatically scheduled to run.
    
-   Status of auto triggered node instances
    
    In DataWorks, auto triggered node instances are generated when an auto triggered node is periodically scheduled. You can configure custom alert rules for **auto triggered nodes** to monitor the status of the **instances of the auto triggered nodes**. You can configure a custom alert rule for a specified object and configure an intelligent baseline for important nodes.
    
    **Rule type**
    
    **Monitored object**
    
    **Trigger condition**
    
    [Custom alert rule](/help/en/dataworks/user-guide/create-a-custom-alert-rule#task-2364475)
    
    Nodes of the **Node**, **Baseline**, **Workspace**, or **Workflow** object type
    
    -   An alert notification is sent if a node of a specified object type is in one of the following states: **Completed**, **Uncompleted**, **Error**, **Uncompleted in Cycle**, **Overtime**, and **The error persists after the node automatically reruns**.
        
    -   An alert notification is sent if the object type of a node is **Workspace** and the node is in one of the following states and the preceding states: **Instance Generated** and **Fluctuation of Instance Number**.
        
    
    [Intelligent baseline](/help/en/dataworks/overview-37#concept-2084394)
    
    Nodes in a baseline and the ancestor nodes that affect data generation of the nodes in a baseline
    
    **Note**
    
    -   You can specify a priority for a baseline to ensure that nodes in the baseline are scheduled and data of the nodes is generated as expected.
        
    -   If an auto triggered node is important and the dependencies between the auto triggered node and its ancestor nodes are complex, you can move the auto triggered node to a specific baseline.
        
    
    -   **Baseline alerts**:
        
        If DataWorks predicts that nodes in a baseline cannot finish running before the committed completion time, DataWorks sends you a baseline alert notification by using the specified notification method. For more information, see [Core logic: baseline alert](/help/en/dataworks/overview-37#section-y6v-xvo-r2u).
        
    -   **Event alerts**:
        
        When an error is reported for a node in a baseline, an error is reported for an ancestor node of the node in the baseline, or a node in the key path slows down, an event is generated and DataWorks sends you an event alert notification. For more information, see [Manage events](/help/en/dataworks/user-guide/manage-events#concept-e5p-fc4-42b).
        
    
-   Status of real-time computing nodes
    
    -   Rule type: custom alert rule
        
    -   Monitored objects: real-time computing nodes
        
    -   Trigger condition: An alert is reported if an **error** occurs on a real-time computing node.
        
-   Resource usage
    
    -   Rule type: custom alert rule
        
    -   Monitored objects: exclusive resource groups for scheduling and exclusive resource groups for Data Integration
        
    -   Trigger conditions:
        
        -   If the value of the **Resource Group Usage** parameter is greater than a specific percentage for a specific period of time, an alert is reported.
            
        -   If the value of the **Number of instances Waiting for Resources in Resource Group** parameter is greater than a specific number for a specific period of time, an alert is reported.
            

### Notification methods

After you configure alert rules, when DataWorks detects that an alert rule is triggered, DataWorks sends you an alert notification by using the notification method that you specified, such as email, text message, phone call, or DingTalk message. This way, you can identify and troubleshoot issues at the earliest opportunity.

**Rule type**

**Notification method**

**Alerting frequency control**

Custom alert rule, global alert rule, and intelligent baseline

-   Alert notifications can be sent to specified personnel such as the node owner, specified owner, or on-duty engineers in a shift schedule by **email**, **text message**, or **phone call**. Alert notifications that are sent by using phone numbers only in the Chinese mainland are supported.
    
-   Alert notifications can be sent to DingTalk groups by **DingTalk chatbot** or **webhook URL**.
    
    **Note**
    
    -   DataWorks Basic Edition supports alert notifications to DingTalk, Lark, and WeCom based on group-based webhook URLs.
        
    -   In addition to the feature of sending alert notifications based on group-based webhook URLs in Basic Edition, DataWorks Enterprise Edition also allows you to configure custom webhook URLs to send alert notifications.
        
    -   If you want to configure a custom webhook, you can click the [link for application](https://wx.dingtalk.com/invite-page/weixin.html?bizSource=____source____&corpId=dingd0cf799086f27cb135c2f4657eb6378f&inviterUid=A26F27643C000F2D94460A2FDF52346D&encodeDeptId=6B32040BBEAFAF1DE93FD50C752B256A) or join the DataWorks DingTalk group for pre-sales or after-sales services. If you join the DingTalk group, you can directly contact the DingTalk chatbot or contact on-duty technical personnel. The following figure shows the QR code of the DataWorks DingTalk group. ![技术支持二维码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3068220761/p524796.png) 
        
    

You can use the following parameters to control alerting frequency: **Maximum Alerts**, **Minimum Alert Interval**, and **Quiet Hours**.

**Note**

-   Maximum Alerts: the maximum number of alert notifications that can be sent. If the number of alert notifications that are sent exceeds the specified threshold, alert notifications are no longer sent.
    
-   Minimum Alert Interval: the minimum interval at which alert notifications are sent. If the node for which an alert is reported becomes normal during the period of time specified by this parameter, alert notifications are no longer sent.
    
-   Quiet Hours: Alert notifications are not sent during the period of time that is specified by this parameter.
    
    For example, you set the Trigger Condition parameter to **Overtime**, **Error**, and **Uncompleted** for a node and set the Quiet Hours parameter to a period of time from `00:00` to `08:00`. During this period of time, if the node times out, an error occurs on the node, or the node is not complete, DataWorks does not send an alert notification. If the exception still exists after 08:00, DataWorks sends an alert notification.
    

## Automated O&M on node instances that are run on exclusive resource groups for scheduling

The automated O&M feature enables DataWorks to perform O&M operations on node instances that are run on exclusive resource groups for scheduling. DataWorks performs O&M operations based on the O&M rules that you created and the alert rules that are associated with the O&M rules.

-   Trigger condition: Associated alert rules are triggered.
    
    **Note**
    
    -   The **resource usage of a resource group** and the **number of node instances that are waiting for resources in a resource group** are monitored.
        
    -   Automated O&M can be performed only on node instances that are run on exclusive resource groups for scheduling.
        
    
-   Node instances on which automated O&M can be performed: You can specify the following **filter conditions** to search for desired node instances: **Instance Type**, **Scheduling Cycle**, **Priority**, **Status**, and **Workspace**.
    
-   O&M operation: Terminate node instances that are running.
    
    **Note**
    
    A maximum of 2,000 node instances can be terminated at a time.
    

## View alert information

You can view information about alerts that are generated for a specified node instance in the directed acyclic graph (DAG) of the node instance or on the Intelligent Diagnosis page.

-   View alert information in the DAG of a node instance
    
    For a node instance for which alert rules are configured and alerts are generated within 24 hours from the current point in time, you can perform the following operations to view alert information: In the left-side navigation pane of the Operation Center page, choose **Auto Triggered Node O&M** > **Auto Triggered Tasks**. On the page that appears, find the node instance and open the DAG of the node instance. On the DAG page, click the red dot in the upper-right corner of the node instance. In the **Monitoring details** pane, view the rules or baselines to which the monitored node that generates the instance is added and view the status of each rule or baseline. The red dot is displayed in the area marked with 2 in the following figure. You can also click **View alarm information** in the upper-right corner of the Monitoring details pane to go to the Alert Management page and view alert details on this page. In addition, you can click the name of a rule in the **Rule/Baseline Name** column to go to the Rule Management page and view the configuration details of the rule.
    
    **Note**
    
    You can select the **Nodes that generated alarms in the past 24 hours** check box in the area marked with 1 in the following figure to search for desired node instances.
    
    ![报警信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3905669271/p444491.png)
    
-   View alert information on the Intelligent Diagnosis page
    
    For a node for which alert rules are configured, you can perform the following operations to view alert information about an instance that is generated for the node: Go to the **Intelligent Diagnosis** page. Find the desired node instance and click the node instance. On the End-to-end Diagnostics tab of the page that appears, click **View details** next to the prompt message. In the **Monitoring details** pane, view the rules or baselines to which the monitored node that generates the instance is added and view the status of each rule or baseline. You can also click **View alarm information** in the upper-right corner of the Monitoring details pane to go to the Alert Management page and view alert details on this page. In addition, you can click the name of a rule in the **Rule/Baseline Name** column to go to the Rule Management page and view the configuration details of the rule.![运行诊断](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3905669271/p444501.png)
    
-   View alert information on the Alert Management page
    
    You can view all generated alerts on the Alert Management page and view the details of an alert on the Alarm details page, including the alert rule that triggers the alert, the trigger condition, and the alert cause. For more information, see [View alert details](/help/en/dataworks/user-guide/view-alert-details#concept-nvk-524-42b).
