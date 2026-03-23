You can enable the initiative alert feature or configure custom alert rules on the details page of an Elastic Compute Service (ECS) instance to detect exceptions of the instance at the earliest opportunity.

## Background information

On the Monitoring tab of the details page of an ECS instance, you can enable the initiative alert and custom alert rule features.

-   After you enable the initiative alert feature, alert rules related to CPU utilization, disk usage, memory usage, and network bandwidth utilization are created for all ECS instances in your Alibaba Cloud account. For more information, see the [Enable the initiative alert feature](#section-u83-pol-cbv) section of this topic.
    
-   You can configure custom alert rules for the ECS instance. The custom alert rules take effect only on the ECS instance. For more information, see the [Configure custom alert rules](#section-l0p-dd5-whe) section of this topic.
    
    **Note**
    
    You can manage alert rules or use more monitoring and alerting features in the CloudMonitor console. For more information, see [What is CloudMonitor](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor#concept-2452587)
    

## Enable the initiative alert feature

You can enable the initiative alert feature to set up an alert system for ECS and obtain exception information about key metrics at the earliest opportunity. After you enable the initiative alert feature, relevant alert rules take effect on all ECS instances in your Alibaba cloud account.

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find an ECS instance and click the instance ID. The instance details page appears.
    
4.  Click the **Monitoring** tab, click the **Alert Rule** tab, and then click **On Key Alert**.
    
5.  In the **Proactive Alerting** panel, turn on **Proactive Alerting** to enable the initiative alert feature.
    
    After you enable the initiative alert feature, you can view the alert rules in the **Rule Details** section. You can also perform the following operations:
    
    -   **Disable an alert rule**. To disable an alert rule, find the alert rule and click **Disable** in the **Actions** column. In the Disable Alert Rule message, click Disable.
        
    -   **Delete an alert rule**. If you no longer require an alert rule, find the alert rule and click **Delete** in the **Actions** column. In the **Delete Alert Rule** message, click **Delete**.
        

## Configure custom alert rules

In addition to the initiative alert feature, you can also configure custom alert rules for your ECS instance based on your business requirements. The custom alert rules automatically take effect on the ECS instance to help you detect instance exceptions at the earliest opportunity.

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find an ECS instance and click the instance ID. The instance details page appears.
    
4.  Click the **Monitoring** tab, click the **Alert Rule** tab, and then click **Create Alert Rule**.
    
5.  In the **Create Alert Rule** panel, follow the on-screen instructions to create custom alert rules and click **Confirm**.
    
    The following table describes the parameters used to create custom alert rules.
    
    **Parameter**
    
    **Description**
    
    **Rule Description**
    
    The name and content of the alert rules.
    
    Click **Add Rule**, select a metric type from the drop-down list, configure the parameters in the **Configure Rule Description** panel, and then click **OK**.
    
    ![报警规则](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1252657371/p907508.png)
    
    **Note**
    
    -   The rule content specifies the condition that triggers an alert. For example, if the average CPU utilization is greater than or equal to 90% for three consecutive cycles in 5 minutes, an alert is triggered. CloudMonitor checks whether the condition is met for only three times every 5 minutes.
        
    -   For information about the ECS metrics of alert rules, see [Operating system monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/operating-system-monitoring#concept-gdq-tgc-5db).
        
    
    **Mute For**
    
    The interval at which CloudMonitor resends an alert notification if the issue that triggers the alert persists.
    
    **Effective Period**
    
    The period during which the alert rules are in effect. CloudMonitor monitors metrics and generates alerts based on the alert rules only within the effective period. If you do not specify an effective period, the alert rules take effect throughout the day.
    
    **Alert Contact Group**
    
    The contacts or contact groups to which alert notifications are sent. For information about how to configure alert contacts or contact groups, see [Create an alert contact or an alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#task-2514452).
    
    **Alert Callback**
    
    The webhook address, which must be a URL accessible over the Internet. CloudMonitor pushes an alert notification to the specified URL by sending an HTTP POST request. Only the HTTP protocol is supported.
    
6.  **(Optional)** In the alert rule list, find a custom alert rule and click buttons in the **Actions** column to perform operations on the rule, such as modifying or copying the rule.
    
    ![2025-01-20_16-04-44](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1252657371/p907548.png)
    

## References

-   You can enable the initiative alert feature in the CloudMonitor console to quickly build an alert system in a cloud service and detect exceptions of key metrics at the earliest opportunity. For more information, see [Enable the initiative alert feature](/help/en/cms/cloudmonitor-1-0/user-guide/enable-the-initiative-alert-feature#task-1961972).
    
-   To monitor the utilization of various cloud resources, create alert rules in the CloudMonitor console. For more information, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule).
