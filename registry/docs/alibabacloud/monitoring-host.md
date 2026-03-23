Cloud Monitor supports monitoring on Elastic Compute Service (ECS) instances and third-party hosts. This topic describes how to configure an alert rule to monitor an ECS instance. In this example, the **CPU Utilization** metric is specified as the alert condition for the alert rule.

## Prerequisites

-   An ECS instance is created. For more information, see [Creation methods](/help/en/ecs/user-guide/create-instances/).
    
-   An alert contact group is created. For more information, see [Create an alert contact or alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#task-2514452).
    

## **Step 1: Check whether the Cloud Monitor agent is installed on the host**

After you create an ECS instance in the ECS console, the host is displayed in the **Host Monitoring** list of the Cloud Monitor console. Before Cloud Monitor can monitor an ECS instance, you must install the Cloud Monitor agent on the ECS instance.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Cloud Resource Monitoring** > **Host Monitoring**.
    
3.  Check whether the Cloud Monitor agent is installed on the ECS instance that you created.
    
    -   If the Cloud Monitor agent is installed, perform [Step 2: Create an alert rule for the host](#section-enm-m97-vu9).
        
        If **Running** is displayed in the **argusagent Status** column of the ECS instance, the Cloud Monitor agent is installed.
        
    -   If the Cloud Monitor agent is not installed, manually install the Cloud Monitor agent on the ECS instance. For more information, see [Automatic installation (recommended)](/help/en/cms/cloudmonitor-1-0/user-guide/install-and-uninstall-the-cloudmonitor-agent-for-cpp#section-8an-8rz-xgs).
        
        If **Reinstall/Upgrade** is displayed in the **argusagent Status** column of the ECS instance, the Cloud Monitor agent is not installed.
        

**Note**

-   For more information about monitoring of third-party hosts, see [Manage a Cloud Monitor agent](/help/en/cms/cloudmonitor-1-0/user-guide/install-and-uninstall-the-cloudmonitor-agent-for-cpp).
    
-   For more information about how to delete third-party hosts from host monitoring, see [What do I do If a third-party host fails to be deleted from the Host Monitoring list?](/help/en/cms/cloudmonitor-1-0/support/how-do-i-handle-the-failure-to-delete-a-non-alibaba-cloud-host-in-host-monitoring)
    

## Step 2: Create an alert rule for the host

When you view the metrics for the ECS instance, you can create an alert rule for the ECS instance. If the value of the specified metric meets the specified alert condition, an alert is triggered and Cloud Monitor sends an alert notification. This helps you monitor the metric status in real time.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Cloud Resource Monitoring** > **Host Monitoring**.
    
3.  On the **Host Monitoring** page, click the name of the host that you want to manage.
    
4.  On the **Host Monitoring Details** page, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3600861171/p727051.png) icon in the **CPU Utilization(%)** section.
    
5.  In the **Configure Rule Description** panel, enter a rule name in the **Alert Rule** field, configure the **Metric Type**, **Metric**, and **Threshold and Alert Level** parameters, and then click **OK**.
    
    **Alert level**
    
    **Default alert notification method**
    
    Critical
    
    Email + Webhook
    
    Warn
    
    Email + Webhook
    
    Info
    
    Email + Webhook
    
6.  In the **Create Alert Rule** panel, specify an alert contact group. Use the default values for other parameters.
    
    **Note**
    
    If an alert contact is configured with only an email address or webhook URL, the alert contact can receive alert notifications only by using emails or webhooks.
    
7.  Click **Confirm**.
    
    For information about how to modify, disable, enable, and delete an alert rule, see [Manage alert rules](/help/en/cms/cloudmonitor-1-0/user-guide/modify-an-alert-rule).
    

**Note**

For more information about how to configure an alert rule, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule#task-2181123).

## Step 3: View host alerts

After an alert rule is created, you can perform the following operations to view the alert rule and alert status.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Rules**.
    
3.  On the **Alert Rules** page, view the required alert rule and alert status.
    
    -   If the status of the alert rule is **Normal**, no alert is triggered.
        
    -   If the alert rule is in the **Alert** state, alerts are triggered and alert notifications are already sent. You can also view the historical alerts of the alert rule. For more information, see [View historical alerts](/help/en/cms/cloudmonitor-1-0/user-guide/view-historical-alerts).
